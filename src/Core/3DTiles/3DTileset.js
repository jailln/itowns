import * as THREE from 'three';
import $3DTBoundingVolume from './3DTBoundingVolume';

/** @classdesc
 * A 3D Tiles
 *  [Tileset](https://github.com/AnalyticalGraphicsInc/3d-tiles/blob/master/specification/schema/tileset.schema.json).
 *  @property {object[]} index - an array holding all the
 *  [tiles](https://github.com/AnalyticalGraphicsInc/3d-tiles/blob/master/specification/schema/tile.schema.json)
 *  (not their content which is stored in the attribute object3d of the layer).
 *  @property {object} extensions - Extensions of the tileset in the form:
 * {extensioName1: extensionObject1, extensioName2: extensionObject2, ...}
 */
// TODO: This layer is currently stored in the tileIndex attribute of the
//  layer. It must be stored in a tileset attribute.
export default class $3DTileset {
    constructor(json, baseURL, registeredExtensions) {
        // List of tiles (i.e. a flattened tileset)
        this.index = [];
        // recurses on the tileset and fills this.index
        // Note: We start the recursion on the root node which has no parent
        this.recurse(json.root, baseURL, undefined, registeredExtensions);

        if (json.extensions) {
            this.extensions =
                registeredExtensions.parseExtensions(json.extensions, this);
        }
    }

    // TODO: Instead of passing the parent node, pass only its
    //  _worlFromLocalTransform attribute which is the only thing used
    recurse(node, baseURL, parent, registeredExtensions) {
        const inverseTileTransform = new THREE.Matrix4();

        // compute transform (will become Object3D.matrix when the object is
        // downloaded)
        node.transform =
            node.transform ? (new THREE.Matrix4()).fromArray(node.transform) :
                undefined;

        // The only reason to store _worldFromLocalTransform is because of
        // extendTileset where we need the transform chain for one node.
        node._worldFromLocalTransform = node.transform;
        if (parent && parent._worldFromLocalTransform) {
            if (node.transform) {
                node._worldFromLocalTransform =
                    new THREE.Matrix4().multiplyMatrices(
                        parent._worldFromLocalTransform, node.transform);
            } else {
                node._worldFromLocalTransform = parent._worldFromLocalTransform;
            }
        }

        // TODO: Move this to the bounding volume class ?
        // getBox only use inverseTileTransform for volume.region so let's not
        // compute the inverse matrix each time
        if ((node.viewerRequestVolume && node.viewerRequestVolume.region)
            || (node.boundingVolume && node.boundingVolume.region)) {
            if (node._worldFromLocalTransform) {
                inverseTileTransform.getInverse(node._worldFromLocalTransform);
            } else {
                inverseTileTransform.identity();
            }
        }

        node.viewerRequestVolume = node.viewerRequestVolume ?
            new $3DTBoundingVolume(node.viewerRequestVolume,
                inverseTileTransform,
                registeredExtensions) : undefined;
        node.boundingVolume = new $3DTBoundingVolume(node.boundingVolume,
            inverseTileTransform, registeredExtensions);

        this.index.push(node);
        node.tileId = this.index.length - 1;
        node.baseURL = baseURL;
        if (node.children) {
            for (const child of node.children) {
                this.recurse(child, baseURL, node, registeredExtensions);
            }
        }
    }

    extendTileset(tileset, nodeId, baseURL, registeredExtensions) {
        this.recurse(tileset.root, baseURL, this.index[nodeId],
            registeredExtensions);
        this.index[nodeId].children = [tileset.root];
        this.index[nodeId].isTileset = true;
    }
}
