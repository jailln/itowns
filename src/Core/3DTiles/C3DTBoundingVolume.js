import * as THREE from 'three';
import { OBB } from 'ThreeExtended/math/OBB';
import Extent from '../Geographic/Extent';
import Coordinates from '../Geographic/Coordinates';
import C3DTilesTypes from './C3DTilesTypes';

const matrix = new THREE.Matrix4();
const size = new THREE.Vector3();
const extent = new Extent('EPSG:4326', 0, 0, 0, 0);
const boxCenter = new THREE.Vector3();
const sphereCenter = new THREE.Vector3();
const worldCoordinateCenter = new THREE.Vector3();

const epsilon = 0.00000000000001;
const regionCenterCarto = new Coordinates('EPSG:4326');
const regionCenterCartesian = new Coordinates('EPSG:4978');
const regioncenterVec3 = new THREE.Vector3();
function computeRegionCenter(east, west, south, north, minHeight, maxHeight) {
    if (east < west) {
        east += 2 * Math.PI;
    }

    let longitude = (west + east) * 0.5;
    if (longitude < -Math.PI || longitude > Math.PI) {
        longitude += Math.PI;
        if (longitude < 0 || longitude > 2 * Math.PI) {
            const mod = longitude % (2 * Math.PI);
            if (
                Math.abs(mod) < epsilon &&
                Math.abs(longitude) > epsilon
            ) {
                longitude = Math.PI * 2;
            } else {
                longitude = mod;
            }
        }
    }
    let latitude = (south + north) * 0.5;

    longitude = THREE.MathUtils.radToDeg(longitude);
    latitude = THREE.MathUtils.radToDeg(latitude);
    const height = (maxHeight + minHeight) / 2;

    regionCenterCarto.setFromValues(longitude, latitude, height);
    regionCenterCarto.as('EPSG:4978', regionCenterCartesian);
    regionCenterCartesian.toVector3(regioncenterVec3);
    return regioncenterVec3;
}

const southWestBottomCarto = new Coordinates('EPSG:4326');
const southWestBottomCartesian = new Coordinates('EPSG:4978');
const southWestBottomVec3 = new THREE.Vector3();
const southEastBottomCarto = new Coordinates('EPSG:4326');
const southEastBottomCartesian = new Coordinates('EPSG:4978');
const southEastBottomVec3 = new THREE.Vector3();
const northWestBottomCarto = new Coordinates('EPSG:4326');
const northWestBottomCartesian = new Coordinates('EPSG:4978');
const northWestBottomVec3 = new THREE.Vector3();
const southWestUpCarto = new Coordinates('EPSG:4326');
const southWestUpCartesian = new Coordinates('EPSG:4978');
const southWestUpVec3 = new THREE.Vector3();
function computeRegionHalfSize(east, west, south, north, minHeight, maxHeight) {
    // TODO : need to apply rotations for computation to be correct like in the center computation?
    const westDeg = THREE.MathUtils.radToDeg(west);
    const eastDeg = THREE.MathUtils.radToDeg(east);
    const southDeg = THREE.MathUtils.radToDeg(south);
    const northDeg = THREE.MathUtils.radToDeg(north);

    southWestBottomCarto.setFromValues(westDeg, southDeg, minHeight);
    southWestBottomCarto.as('EPSG:4978', southWestBottomCartesian);
    southWestBottomCartesian.toVector3(southWestBottomVec3);

    southEastBottomCarto.setFromValues(eastDeg, southDeg, minHeight);
    southEastBottomCarto.as('EPSG:4978', southEastBottomCartesian);
    southEastBottomCartesian.toVector3(southEastBottomVec3);

    northWestBottomCarto.setFromValues(westDeg, northDeg, minHeight);
    northWestBottomCarto.as('EPSG:4978', northWestBottomCartesian);
    northWestBottomCartesian.toVector3(northWestBottomVec3);

    southWestUpCarto.setFromValues(westDeg, southDeg, maxHeight);
    southWestUpCarto.as('EPSG:4978', southWestUpCartesian);
    southWestUpCartesian.toVector3(southWestUpVec3);

    const sizeX = southWestBottomVec3.distanceTo(southWestUpVec3);
    const sizeY = southWestBottomVec3.distanceTo(southEastBottomVec3);
    const sizeZ = southWestBottomVec3.distanceTo(northWestBottomVec3);

    return new THREE.Vector3(sizeX / 2, sizeY / 2, sizeZ / 2);
}

// center = bounding box / region center in EPSG:4326
function computeRegionRotation(center) {
    const euler = new THREE.Euler(0, THREE.MathUtils.degToRad(-center.latitude), THREE.MathUtils.degToRad(center.longitude));
    const mat4Rot = new THREE.Matrix4();
    mat4Rot.makeRotationFromEuler(euler);
    const mat3Rot = new THREE.Matrix3();
    mat3Rot.setFromMatrix4(mat4Rot);
    return mat3Rot;
}

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
        const east = region[2];
        const west = region[0];
        const south = region[1];
        const north = region[3];
        const minHeight = 0;
        const maxHeight = region[5];

        const c = computeRegionCenter(east, west, south, north, minHeight, maxHeight);
        const s = computeRegionHalfSize(east, west, south, north, minHeight, maxHeight);
        const r = computeRegionRotation(regionCenterCarto); // TODO: pas top de passer regionCenterCarto

        this.region = new OBB(c, s, r);
        this.region.applyMatrix4(inverseTileTransform);
    }

    initBoundingBox(box) {
        // box[0], box[1], box[2] = center of the box
        // box[3], box[4], box[5] = x axis direction and half-length
        // box[6], box[7], box[8] = y axis direction and half-length
        // box[9], box[10], box[11] = z axis direction and half-length
        boxCenter.set(box[0], box[1], box[2]);
        size.set(box[3], box[7], box[11]).multiplyScalar(2);
        this.box = new THREE.Box3();
        this.box.setFromCenterAndSize(boxCenter, size);
    }

    initBoundingSphere(sphere) {
        sphereCenter.set(sphere[0], sphere[1], sphere[2]);
        this.sphere = new THREE.Sphere(sphereCenter, sphere[3]);
    }

    boundingVolumeCulling(camera, tileMatrixWorld) {
        if (this.region &&
            !camera.isOBBVisible(this.region, tileMatrixWorld)) { // TODO: multiply matrices ?
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
