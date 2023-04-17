import * as THREE from 'three';
import Extent from '../Geographic/Extent';
import OBB from '../../Renderer/OBB';
import Coordinates from '../Geographic/Coordinates';
import C3DTilesTypes from './C3DTilesTypes';

const matrix = new THREE.Matrix4();
const center = new THREE.Vector3();
const size = new THREE.Vector3();
const extent = new Extent('EPSG:4326', 0, 0, 0, 0);
const sphereCenter = new THREE.Vector3();
const worldCoordinateCenter = new THREE.Vector3();

/**
 * @classdesc 3D Tiles
 * [bounding volume](https://github.com/AnalyticalGraphicsInc/3d-tiles/blob/master/specification/schema/boundingVolume.schema.json)
 * @property {C3DTilesTypes} type - Used by 3D Tiles extensions
 * (e.g. {@link C3DTBatchTableHierarchyExtension}) to know in which context
 * (i.e. for which 3D Tiles class) the parsing of the extension should be done.
 * @property {THREE.Box3} box - Bounding box, defined only if the Bounding Volume
 * is a box.
 * @property {OBB} region - Bounding region, defined only if the Bounding
 * Volume is a region.
 * @property {THREE.Sphere} sphere - Bounding sphere, defined only if the
 * Bounding Volume is a sphere.
 * @property {object} extensions - 3D Tiles extensions of the bounding volume
 * stored in the following format:
 * {extensioName1: extensionObject1, extensioName2: extensionObject2, ...}
 */
class C3DTBoundingVolume {
    constructor(json, inverseTileTransform, registeredExtensions) {
        this.type = C3DTilesTypes.boundingVolume;

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
                registeredExtensions.parseExtensions(json.extensions, this.type);
        }
    }

    initBoundingRegion(region, inverseTileTransform) {
        // TODO optim
        // Compute center:
        let east = region[2];
        const west = region[0];
        const south = region[1];
        const north = region[3];
        const minHeight = region[4];
        const maxHeight = region[5];

        if (east < west) {
            east += 2*Math.PI;
        }

        let longitude = (west + east) * 0.5;
        if (longitude < -Math.PI || longitude > Math.PI) {
            longitude = longitude + Math.PI;
            if (longitude < 0 || longitude > 2 * Math.PI) {
                const mod = longitude % (2 * Math.PI);
                if (
                    Math.abs(mod) < 0.00000000000001 &&
                    Math.abs(longitude) > 0.00000000000001
                ) {
                    longitude = CesiumMath.TWO_PI;
                } else {
                    longitude = mod;
                }
            }
        }
        const latitude = (south + north) * 0.5;
        const height = maxHeight - minHeight;

        const center = new itowns.Coordinates('EPSG:4326', latitude, longitude, height);
        const centerVec3 = center.as('EPSG:4978').toVector3();


        var min = new Coordinates('EPSG:4326', THREE.MathUtils.radToDeg(region[0]), THREE.MathUtils.radToDeg(region[1]), region[4]); // south west corner with min height
        var max = new Coordinates('EPSG:4326', THREE.MathUtils.radToDeg(region[2]), THREE.MathUtils.radToDeg(region[3]), region[5]); // north east corner with max height
        var minVec3 = min.as('EPSG:4978').toVector3();
        var maxVec3 = max.as('EPSG:4978').toVector3();
        // TODO: temps to pass isEmpty test of threejs bounding box. Should be handled another way
        if (minVec3.x > maxVec3.x) {
            var x = minVec3.x;
            minVec3.x = maxVec3.x;
            maxVec3.x = x;
        }
        if (minVec3.y > maxVec3.y) {
            var y = minVec3.y;
            minVec3.y = maxVec3.y;
            maxVec3.y = y;
        }
        this.region = new THREE.Box3(minVec3, maxVec3);
        // // TODO optim
        // var min = new Coordinates('EPSG:4326', THREE.MathUtils.radToDeg(region[0]), THREE.MathUtils.radToDeg(region[1]), region[4]); // south west corner with min height
        // var max = new Coordinates('EPSG:4326', THREE.MathUtils.radToDeg(region[2]), THREE.MathUtils.radToDeg(region[3]), region[5]); // north east corner with max height
        // var minVec3 = min.as('EPSG:4978').toVector3();
        // var maxVec3 = max.as('EPSG:4978').toVector3();
        // // TODO: temps to pass isEmpty test of threejs bounding box. Should be handled another way
        // if (minVec3.x > maxVec3.x) {
        //     var x = minVec3.x;
        //     minVec3.x = maxVec3.x;
        //     maxVec3.x = x;
        // }
        // if (minVec3.y > maxVec3.y) {
        //     var y = minVec3.y;
        //     minVec3.y = maxVec3.y;
        //     maxVec3.y = y;
        // }
        // this.region = new THREE.Box3(minVec3, maxVec3);
    }

    initBoundingBox(box) {
        // box[0], box[1], box[2] = center of the box
        // box[3], box[4], box[5] = x axis direction and half-length
        // box[6], box[7], box[8] = y axis direction and half-length
        // box[9], box[10], box[11] = z axis direction and half-length
        center.set(box[0], box[1], box[2]);
        size.set(box[3], box[7], box[11]).multiplyScalar(2);
        this.box = new THREE.Box3();
        this.box.setFromCenterAndSize(center, size);
    }

    initBoundingSphere(sphere) {
        sphereCenter.set(sphere[0], sphere[1], sphere[2]);
        this.sphere = new THREE.Sphere(sphereCenter, sphere[3]);
    }

    boundingVolumeCulling(camera, tileMatrixWorld) {
        if (this.region &&
            !camera.isBox3Visible(this.region, tileMatrixWorld)) { // TODO: multiply matrices ?
            return true;
        }
        if (this.box && !camera.isBox3Visible(this.box,
            tileMatrixWorld)) {
            return true;
        }
        return this.sphere &&
            !camera.isSphereVisible(this.sphere, tileMatrixWorld);
    }

    viewerRequestVolumeCulling(camera, tileMatrixWorld) {
        if (this.region) {
            console.warn('Region viewerRequestVolume not yet supported');
            return true;
        }
        if (this.box) {
            console.warn('Bounding box viewerRequestVolume not yet supported');
            return true;
        }
        if (this.sphere) {
            worldCoordinateCenter.copy(this.sphere.center);
            worldCoordinateCenter.applyMatrix4(tileMatrixWorld);
            // To check the distance between the center sphere and the camera
            if (!(camera.camera3D.position.distanceTo(worldCoordinateCenter) <=
                this.sphere.radius)) {
                return true;
            }
        }
        return false;
    }
}

export default C3DTBoundingVolume;
