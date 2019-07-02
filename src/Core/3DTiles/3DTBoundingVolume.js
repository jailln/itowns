import * as THREE from 'three';
import Extent from '../Geographic/Extent';
import OBB from '../../Renderer/OBB';

/**
 * @classdesc 3D Tiles
 * [bounding volume](https://github.com/AnalyticalGraphicsInc/3d-tiles/blob/master/specification/schema/boundingVolume.schema.json)
 * @property {THREE.Box3} box - Bounding box, defined only if the Bounding Volume
 * is a bounding box.
 * @property {OBB} region - Bounding region, defined only if the Bounding
 * Volume is a bounding region.
 * @property {THREE.Sphere} sphere - Bounding sphere, defined only if the
 * Bounding Volume is a sphere.
 */
export default class $3DTBoundingVolume {
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

        if (json.extensions) {
            this.extensions =
                registeredExtensions.parseExtensions(json.extensions, this);
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
        if (boundingVolume.region &&
            !camera.isBox3Visible(boundingVolume.region.box3D,
                tileMatrixWorld.clone()
                    .multiply(boundingVolume.region.matrix))) {
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
            if (!(camera.camera3D.position.distanceTo(worldCoordinateCenter) <=
                viewerRequestVolume.sphere.radius)) {
                return true;
            }
        }

        return false;
    }
}
