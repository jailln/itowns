import * as THREE from 'three';
import Extent from '../Geographic/Extent';
import OBB from '../../Renderer/OBB';
import C3DTilesTypes from './C3DTilesTypes';

const matrix = new THREE.Matrix4();
const center = new THREE.Vector3();
const size = new THREE.Vector3();
const extent = new Extent('EPSG:4326', 0, 0, 0, 0);
const sphereCenter = new THREE.Vector3();
const worldCoordinateCenter = new THREE.Vector3();

const _orthoX = new THREE.Vector3();
const _orthoY = new THREE.Vector3();
const _orthoZ = new THREE.Vector3();
const _invMatrix = new THREE.Matrix4();

let _poolIndex = 0;
const _pointsPool = [];
function getVector(usePool = false) {
    if (!usePool) {
        return new THREE.Vector3();
    }

    if (!_pointsPool[_poolIndex]) {
        _pointsPool[_poolIndex] = new THREE.Vector3();
    }

    _poolIndex++;
    return _pointsPool[_poolIndex - 1];
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

    _getPoints(region, usePool = false) {

        const latStart = region[1];
        const latEnd = region[3];
        const lonStart = region[0];
        const lonEnd = region[2];
        const heightStart = region[4];
        const heightEnd = region[5];

        const midLat = THREE.MathUtils.mapLinear(0.5, 0, 1, latStart, latEnd);
        const midLon = THREE.MathUtils.mapLinear(0.5, 0, 1, lonStart, lonEnd);

        const lonOffset = Math.floor(lonStart / (Math.PI / 2)) * (Math.PI / 2);
        const latlon = [
            [-Math.PI / 2, 0],
            [Math.PI / 2, 0],
            [0, lonOffset],
            [0, lonOffset + Math.PI / 2],
            [0, lonOffset + Math.PI],
            [0, lonOffset + 3 * Math.PI / 2],

            [latStart, lonEnd],
            [latEnd, lonEnd],
            [latStart, lonStart],
            [latEnd, lonStart],

            [0, lonStart],
            [0, lonEnd],

            [midLat, midLon],
            [latStart, midLon],
            [latEnd, midLon],
            [midLat, lonStart],
            [midLat, lonEnd],
        ];

        const target = [];
        const total = latlon.length;

        for (let z = 0; z <= 1; z++) {

            const height = THREE.MathUtils.mapLinear(z, 0, 1, heightStart, heightEnd);
            for (let i = 0, l = total; i < l; i++) {

                const [lat, lon] = latlon[i];
                if (lat >= latStart && lat <= latEnd && lon >= lonStart && lon <= lonEnd) {
                    const v = getVector(usePool);
                    target.push(v);
                    this.getCartographicToPosition(lat, lon, height, v);
                }
            }
        }

        return target;
    }

    initBoundingRegion(region, inverseTileTransform) {
        const latStart = region[1];
        const latEnd = region[3];
        const lonStart = region[0];
        const lonEnd = region[2];

        const latRange = latEnd - latStart;
        if (latRange < Math.PI / 2) {
            // get the midway point for the region
            const midLat = THREE.MathUtils.mapLinear(0.5, 0, 1, latStart, latEnd);
            const midLon = THREE.MathUtils.mapLinear(0.5, 0, 1, lonStart, lonEnd);

            // get the frame matrix for the box - works well for smaller regions
            this.getCartographicToNormal(midLat, midLon, _orthoZ);
            _orthoY.set(0, 0, 1);
            _orthoX.crossVectors(_orthoY, _orthoZ);
            _orthoY.crossVectors(_orthoX, _orthoZ);
            matrix.makeBasis(_orthoX, _orthoY, _orthoZ);
        } else {
            _orthoX.set(1, 0, 0);
            _orthoY.set(0, 1, 0);
            _orthoZ.set(0, 0, 1);
            matrix.makeBasis(_orthoX, _orthoY, _orthoZ);
        }

        // transform the points into the local frame
        _invMatrix.copy(matrix).invert();

        const points = this._getPoints(region, true);
        for (let i = 0, l = points.length; i < l; i++) {
            points[i].applyMatrix4(_invMatrix);
        }

        // init the box
        const box = new THREE.Box3();
        box.setFromPoints(points);

        // extent.set(THREE.MathUtils.radToDeg(region[0]),
        //     THREE.MathUtils.radToDeg(region[2]),
        //     THREE.MathUtils.radToDeg(region[1]),
        //     THREE.MathUtils.radToDeg(region[3]));
        // const regionBox = new OBB();
        // regionBox.setFromExtent(extent);
        // regionBox.updateZ({ min: region[4], max: region[5] });
        // // at this point box.matrix = box.epsg4978_from_local, so
        // // we transform it in parent_from_local by using parent's
        // // epsg4978_from_local which from our point of view is
        // // epsg4978_from_parent. box.matrix = (epsg4978_from_parent ^ -1) *
        // // epsg4978_from_local =  parent_from_epsg4978 * epsg4978_from_local =
        // // parent_from_local
        // regionBox.matrix.premultiply(inverseTileTransform);
        // // update position, rotation and scale
        // regionBox.matrix.decompose(regionBox.position, regionBox.quaternion, regionBox.scale);
        // this.region = regionBox;
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
            !camera.isBox3Visible(this.region.box3D,
                matrix.multiplyMatrices(tileMatrixWorld, this.region.matrix))) {
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
