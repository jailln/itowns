import * as THREE from 'three';
import Extent from '../Geographic/Extent';
import Coordinates from '../Geographic/Coordinates';
import OBB from '../../Renderer/OBB';
import C3DTilesTypes from './C3DTilesTypes';

const identityMatrix = new THREE.Matrix4();
const center = new THREE.Vector3();
const size = new THREE.Vector3();
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

    // Bounding regions define the bounding geographic region with lat long and height coordinates with the order
    // [west, south, east, north, minimum height, maximum height]. For more information, see 
    // [bounding region spec](https://github.com/CesiumGS/3d-tiles/tree/main/specification#region) for more information
    initBoundingRegion(region) {
        // the bounding region is represented by an OBB which requires lower and upper boundaries to be initialized.
        // Convert the lower and upper boundaries of the bounding box in the globe CRS (4978) since bounding regions are
        // only used for tilesets in 4326/4979 (i.e. to be displayed in a globe view)
        const lowerBoundary4326 = new Coordinates('EPSG:4326', THREE.MathUtils.radToDeg(region[0]), THREE.MathUtils.radToDeg(region[1]), region[4]);
        const lowerBoundary4978 = new Coordinates('EPSG:4978');
        lowerBoundary4326.as('EPSG:4978', lowerBoundary4978);
        const upperBoundary4326 = new Coordinates('EPSG:4326', THREE.MathUtils.radToDeg(region[2]), THREE.MathUtils.radToDeg(region[3]), region[5]);
        const upperBoundary4978 = new Coordinates('EPSG:4978');
        upperBoundary4326.as('EPSG:4978', upperBoundary4978);
        this.region = new OBB(lowerBoundary4978, upperBoundary4978);
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
            !camera.isBox3Visible(this.region.box3D, identityMatrix)) {
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
