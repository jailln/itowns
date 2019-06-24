import * as THREE from 'three';
import OBB from 'Renderer/OBB';
import Extent from 'Core/Geographic/Extent';

/** @classdesc
 * Class mapping 3D Tiles extensions names to their associated parsing methods.
 */
export class $3DTilesExtensions {
    /**
     * Register a 3D Tiles extension: Maps an extension name to its parser
     * @param {String} extensionName - Name of the extension
     * @param {Function} parser - The function for parsing the extension
     */
    registerExtension(extensionName, parser) {
        this[extensionName] = parser;
    }

    getExtension(extensionName) {
        return this[extensionName];
    }

    /**
     * Test if an extension is registered
     * @param {String} extensionName - Name of the extension
     * @returns {boolean} - true if the extension is registered and false
     * otherwise
     */
    isExtensionRegistered(extensionName) {
        if (this[extensionName]) {
            return true;
        } else { return false; }
    }

    static parseExtensions(registered3dTilesExtensions, extensionsJSON, context) {
        const parsedExtensions = {};
        for (const extName in extensionsJSON) {
            if (registered3dTilesExtensions.isExtensionRegistered(extName)) {
                const extension = registered3dTilesExtensions.getExtension(extName);
                parsedExtensions[extName] =
                    extension.parse(extensionsJSON[extName], context);
            }
        }
        return parsedExtensions;
    }
}

export class BoundingVolume {
    constructor(json, inverseTileTransform, registeredExtensions) {
        // Init bounding volume
        if (json.region) {
            this.initBoundingRegion(json.region, inverseTileTransform);
        } else if (json.box) {
            this.initBoundingBox(json.box);
        } else if (json.sphere) {
            this.initBoundingSphere(json.sphere);
        } else {
            throw new Error('3D Tiles nodes must have a bounding volume');
        }

        // TODO: mettre par defaut un extension vide ?
        if (json.extensions) {
            this.extensions =
                $3DTilesExtensions.parseExtensions(registeredExtensions,
                    json.extensions, this);
        }
    }

    initBoundingRegion(region, inverseTileTransform) {
        const extent = new Extent('EPSG:4326', 0, 0, 0, 0);
        extent.set(
            THREE.Math.radToDeg(region[0]),
            THREE.Math.radToDeg(region[2]),
            THREE.Math.radToDeg(region[1]),
            THREE.Math.radToDeg(region[3]));
        const box = new OBB().setFromExtent(extent);
        // at this point box.matrix = box.epsg4978_from_local, so
        // we transform it in parent_from_local by using parent's
        // epsg4978_from_local which from our point of view is
        // epsg4978_from_parent. box.matrix = (epsg4978_from_parent ^ -1) *
        // epsg4978_from_local =  parent_from_epsg4978 * epsg4978_from_local =
        // parent_from_local
        box.matrix.premultiply(inverseTileTransform);
        // update position, rotation and scale
        box.matrix.decompose(box.position, box.quaternion, box.scale);
        this.region = box;
    }

    initBoundingBox(box) {
        // TODO: only works for axis aligned boxes
        // box[0], box[1], box[2] = center of the box
        // box[3], box[4], box[5] = x axis direction and half-length
        // box[6], box[7], box[8] = y axis direction and half-length
        // box[9], box[10], box[11] = z axis direction and half-length
        const center = new THREE.Vector3(box[0], box[1], box[2]);
        const w = center.x - box[3];
        const e = center.x + box[3];
        const s = center.y - box[7];
        const n = center.y + box[7];
        const b = center.z - box[11];
        const t = center.z + box[11];

        this.box = new THREE.Box3(new THREE.Vector3(w, s, b),
            new THREE.Vector3(e, n, t));
    }

    initBoundingSphere(sphere) {
        this.sphere = new THREE.Sphere(
            new THREE.Vector3(sphere[0], sphere[1],
                sphere[2]), sphere[3]);
    }

    static boundingVolumeCulling(layer, boundingVolume, camera, tileMatrixWorld) {
        if (boundingVolume.region && !camera.isBox3Visible(boundingVolume.region.box3D,
            tileMatrixWorld.clone().multiply(boundingVolume.region.matrix))) {
            return true;
        }
        if (boundingVolume.box && !camera.isBox3Visible(boundingVolume.box,
            tileMatrixWorld)) {
            return true;
        }
        if (boundingVolume.sphere &&
            !camera.isSphereVisible(boundingVolume.sphere, tileMatrixWorld)) {
            return true;
        }

        return false;
    }

    static viewerRequestVolumeCulling(viewerRequestVolume, camera, tileMatrixWorld) {
        if (viewerRequestVolume.region) {
            // TODO
            return true;
        }
        if (viewerRequestVolume.box) {
            // TODO
            return true;
        }
        if (viewerRequestVolume.sphere) {
            const worldCoordinateCenter = viewerRequestVolume.sphere.center.clone();
            worldCoordinateCenter.applyMatrix4(tileMatrixWorld);
            // To check the distance between the center sphere and the camera
            if (!(camera.camera3D.position.distanceTo(worldCoordinateCenter) <= viewerRequestVolume.sphere.radius)) {
                return true;
            }
        }

        return false;
    }
}

/** @classdesc
 * Class representing a 3D Tiles batch table
 */
export class BatchTable {
    /**
     * @param {Object} json - batch table json part
     * @param {ArrayBuffer} binary - buffer representing the batch table
     * binary part (not supported yet)
     * @param {number} batchLength the length of the batch.
     * @param {Object} registeredExtensions - extensions registered to the layer
     */
    constructor(json, binary, batchLength, registeredExtensions) {
        if (binary !== undefined) {
            console.warn('Binary batch table content not supported yet.');
        }

        // Compute the length of the batch (i.e. the number of features)
        // Note: The batchLength could also be retrieved from the feature table
        // which is currently not supported
        if (batchLength != undefined) {
            this.batchLength = batchLength;
        }

        // Separate the content and the possible extensions
        // When an extension is found, we call its parser and append the
        // returned object to batchTable.extensions
        // Extensions must be registered in $3dTilesExtensions global object
        // where an extension name is mapped to a parser.
        if (json.extensions) {
            this.extensions =
                $3DTilesExtensions.parseExtensions(registeredExtensions,
                    json.extensions, this);
            delete json.extensions;
        }

        // Store batch table content
        this.content = json;
    }

    /**
     * Creates and returns a javascript object holding the displayable
     * information from the batch table and from extensions of the batch table
     * for a given feature
     * @param {integer} featureId - id of the feature
     * @returns {Object} - displayable information relative to the batch table
     * and its extensions for the feature with id=featureId. Object is
     * formatted as follow: {BatchTable: {BatchTableFeatureProperties},
     * ExtensionName: {ExtensionDisplayableInfo}}
     */
    getPickingInfo(featureId) {
        const featureDisplayableInfo = {};
        // Verify that the ID of the feature is valid
        if (featureId < 0) {
            throw new Error(`Batch Id (${featureId}) must be positive to access
            feature properties from the batch table.`);
        }
        // Get properties from batch table content
        for (const property in this.content) {
            // check that the property is not inherited from prototype chain
            if (Object.prototype.hasOwnProperty.call(this.content, property)) {
                // check that the featureID is not too big to access
                // information in the batch table
                if (featureId < this.content[property].length) {
                    featureDisplayableInfo[property] =
                        this.content[property][featureId];
                } else {
                    throw new Error(
                        `Batch Id (${featureId}) must be inferior to batch length 
                (${this.batchTableLength}) to access feature properties in batch 
                table.`);
                }
            }
        }
        return { BatchTable: featureDisplayableInfo };
    }
}

export class Tileset {
    constructor(json, baseURL, registeredExtensions) {
        // List of tiles (i.e. a flattened tileset)
        this.index = [];
        // recurses on the tileset and fills this.index
        // Note: We start the recursion on the root node which has no parent
        this.recurse(json.root, baseURL, undefined, registeredExtensions);

        if (json.extensions) {
            this.extensions =
                $3DTilesExtensions.parseExtensions(registeredExtensions,
                    json.extensions, this);
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

        // TODO: remonter ce bout de code dans la classe bounding volume ?
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
            new BoundingVolume(node.viewerRequestVolume, inverseTileTransform,
                registeredExtensions) : undefined;
        node.boundingVolume = new BoundingVolume(node.boundingVolume,
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
        this.recurse(tileset.root, baseURL, this.index[nodeId], registeredExtensions);
        this.index[nodeId].children = [tileset.root];
        this.index[nodeId].isTileset = true;
    }
}

/** @classdesc
 * Abstract class for 3DTiles Extensions. Extensions implemented by the user
 * must inherit from this class. Example of extension extending this class:
 *  [BatchTableHierarchyExtension]{@link BatchTableHierarchyExtension}
 */
export class $3dTilesAbstractExtension {
    constructor() {
        if (this.constructor === $3dTilesAbstractExtension) {
            throw new TypeError('Abstract class ' +
                '"$3dTilesAbstractExtension" cannot be instantiated directly');
        }
    }

    /**
     * Method to get the displayable information related to a given feature
     * from an extension. All extensions must implement it (event if it
     * returns an empty object).
     * @param {integer} featureId - id of the feature
     */
    // disable warning saying that we don't use 'this' in this method
    // eslint-disable-next-line
    getPickingInfo(extObject, featureId) {
        return {};
    }

    // eslint-disable-next-line
    culling() {
        return false;
    }
}
