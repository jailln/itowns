import * as THREE from 'three';
import assert from 'assert';
import Coordinates from 'Core/Geographic/Coordinates';
import Ellipsoid from 'Core/Math/Ellipsoid';
import CameraUtils from 'Utils/CameraUtils';
import DEMUtils from 'Utils/DEMUtils';
import Camera, { CAMERA_TYPE } from 'Renderer/Camera';
import Extent from 'Core/Geographic/Extent';
import proj4 from 'proj4';

proj4.defs('EPSG:2154', '+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');

function equalToFixed(value1, value2, toFixed) {
    return value1.toFixed(toFixed) === value2.toFixed(toFixed);
}

describe('Camera utils unit test', function () {
    THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1);

    const original = DEMUtils.getElevationValueAt;

    before(() => {
        DEMUtils.getElevationValueAt = () => 0;
    });

    after(() => {
        DEMUtils.getElevationValueAt = original;
    });

    const raycaster = new THREE.Raycaster();
    const center = new THREE.Vector2();
    const ellipsoid = new Ellipsoid();

    function pickEllipsoid(camera) {
        raycaster.setFromCamera(center, camera);
        return ellipsoid.intersection(raycaster.ray);
    }

    const view = {};
    const camera = new THREE.PerspectiveCamera();

    view.getPickingPositionFromDepth = function getPickingPositionFromDepth() {
        return pickEllipsoid(camera);
    };
    view.referenceCrs = 'EPSG:4978';
    view.getLayers = () => [{
        extent: {
            crs: 'EPSG:4326',
        },
    }];
    view.addFrameRequester = () => {};
    view.removeFrameRequester = () => {};
    view.notifyChange = () => { camera.updateMatrixWorld(true); };
    view.dispatchEvent = () => {};

    const range = 25000000;
    const coord = new Coordinates('EPSG:4326', 2.35, 48.85, 0);

    it('init like expected', function () {
        const params = { range, coord };
        CameraUtils.transformCameraToLookAtTarget(view, camera, params).then((result) => {
            assert.ok(equalToFixed(result.range, params.range, 1));
            assert.ok(equalToFixed(result.coord.longitude, params.coord.longitude, 4));
            assert.ok(equalToFixed(result.coord.latitude, params.coord.latitude, 4));
        });
    });
    it('should set range like expected', function () {
        const params = { range: 10000 };
        CameraUtils.transformCameraToLookAtTarget(view, camera, params).then((result) => {
            const range = result.range;
            assert.ok(equalToFixed(range, params.range, 1));
        });
    });
    it('should look at coordinate like expected', function () {
        const params = { coord: coord.clone() };
        params.coord.setFromValues(params.coord.longitude + 1, params.coord.latitude + 1, 0);
        CameraUtils.transformCameraToLookAtTarget(view, camera, params).then((result) => {
            assert.ok(equalToFixed(result.coord.longitude, params.coord.longitude, 4));
            assert.ok(equalToFixed(result.coord.latitude, params.coord.latitude, 4));
        });
    });
    it('should tilt like expected', function () {
        const params = { tilt: 38 };
        CameraUtils.transformCameraToLookAtTarget(view, camera, params).then((result) => {
            assert.ok(equalToFixed(result.tilt, params.tilt, 4));
        });
    });
    it('should heading like expected', function () {
        const params = { heading: 147 };
        CameraUtils.transformCameraToLookAtTarget(view, camera, params).then((result) => {
            assert.ok(equalToFixed(result.heading, params.heading, 4));
        });
    });
    it('should heading, tilt, range and coordinate like expected', function () {
        const params = { heading: 17, tilt: 80, range: 20000, coord: coord.clone() };
        params.coord.setFromValues(params.coord.longitude + 5, params.coord.latitude + 5, 0);
        CameraUtils.transformCameraToLookAtTarget(view, camera, params).then((result) => {
            assert.ok(equalToFixed(result.heading, params.heading, 4));
            assert.ok(equalToFixed(result.tilt, params.tilt, 4));
            assert.ok(equalToFixed(result.range, params.range, 1));
            assert.ok(equalToFixed(result.coord.longitude, params.coord.longitude, 4));
            assert.ok(equalToFixed(result.coord.latitude, params.coord.latitude, 4));
        });
    });
    it('should heading, tilt, range and coordinate like expected with animation (200ms)', function () {
        const params = { heading: 17, tilt: 80, range: 20000, coord: coord.clone(), time: 200 };
        params.coord.setFromValues(params.coord.longitude + 3, params.coord.latitude + 4, 0);
        CameraUtils.animateCameraToLookAtTarget(view, camera, params).then((result) => {
            assert.ok(equalToFixed(result.heading, params.heading, 4));
            assert.ok(equalToFixed(result.tilt, params.tilt, 4));
            assert.ok(equalToFixed(result.range, params.range, 1));
            assert.ok(equalToFixed(result.coord.longitude, params.coord.longitude, 4));
            assert.ok(equalToFixed(result.coord.latitude, params.coord.latitude, 4));
        });
    });

    it('should transform ortographic camera from given extent in planar view (EPSG:2154)', function () {
        view.isPlanarView = true;
        view.isGlobeView = false;
        view.referenceCrs = 'EPSG:2154';

        const orthographicCamera = new Camera(view.referenceCrs, 60, 40, { type: CAMERA_TYPE.ORTHOGRAPHIC });
        let camera3D = orthographicCamera.camera3D;

        // let r the ratio width / height of the camera
        // let R the ratio width / height if the extent

        // case r > R (r = 1.5 and R = 0.75)
        const subExtent = new Extent(view.referenceCrs, 0, 3, 0, 4);
        CameraUtils.transformCameraToLookAtTarget(view, camera3D, subExtent);
        assert.equal(
            (camera3D.top - camera3D.bottom) / camera3D.zoom,
            subExtent.planarDimensions().y,
        );
        assert.equal(
            (camera3D.right - camera3D.left) / camera3D.zoom,
            subExtent.planarDimensions().y * 1.5,
        );

        // case r < R (r = 1.5 and R = 2.0)
        subExtent.set(0, 10, 0, 5);
        CameraUtils.transformCameraToLookAtTarget(view, camera3D, subExtent);
        assert.ok(
            (camera3D.top - camera3D.bottom) / camera3D.zoom - subExtent.planarDimensions().x / 1.5 < 10 ** -14,
        );
        assert.equal(
            (camera3D.right - camera3D.left) / camera3D.zoom,
            subExtent.planarDimensions().x,
        );

        const perspectiveCamera = new Camera(view.referenceCrs, 60, 40);
        camera3D = perspectiveCamera.camera3D;

        subExtent.set(0, 3, 0, 4);
        CameraUtils.transformCameraToLookAtTarget(view, camera3D, subExtent);
        camera3D.updateMatrixWorld(true);
        assert.ok(
            CameraUtils.getCameraTransformOptionsFromExtent(view, camera3D, subExtent).range -
            subExtent.planarDimensions().y / (2 * Math.tan(THREE.Math.degToRad(camera3D.fov) / 2)) < 10 ** -14,
        );
    });

    it('should transform perspective camera from given bounding box in globe view', function () {
        view.isPlanarView = false;
        view.isGlobeView = true;
        view.referenceCrs = 'EPSG:4978';
        view.domElement = {};
        view.domElement.clientHeight = 350;
        view.domElement.clientWidth = 556;

        const perspectiveCamera = new Camera(view.referenceCrs, 60, 40, { type: CAMERA_TYPE.PERSPECTIVE });
        const camera3D = perspectiveCamera.camera3D;
        camera3D.aspect = 1.58;
        camera3D.fov = 30;

        const boundingBox = new THREE.Box3(
            new THREE.Vector3(4440583, 374007, 4547154),
            new THREE.Vector3(4441385, 375904, 4547994));

        const expectedCameraTransform = {
            coord: new Coordinates(view.referenceCrs, 4440984, 374955.5, 4547574),
            tilt: 45,
            heading: 0,
            range: 2228.3229619472627,
        };
        const cameraTransform = CameraUtils.getCameraTransformOptionsFromBoundingBox(view, camera3D, boundingBox);

        assert.deepStrictEqual(cameraTransform, expectedCameraTransform);
    });
});
