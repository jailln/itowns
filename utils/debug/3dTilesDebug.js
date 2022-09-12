import * as THREE from 'three';
import View from 'Core/View';
import GeometryLayer from 'Layer/GeometryLayer';
import PlanarControls from 'Controls/PlanarControls';
import GeometryDebug from './GeometryDebug';
import OBBHelper from './OBBHelper';

const bboxMesh = new THREE.Mesh();
const geometrySphere = new THREE.SphereGeometry(1, 16, 16);

export default function create3dTilesDebugUI(datDebugTool, view, _3dTileslayer) {
    const gui = GeometryDebug.createGeometryDebugUI(datDebugTool, view, _3dTileslayer);

    const regionBoundingBoxParent = new THREE.Group();
    view.scene.add(regionBoundingBoxParent);

    // add wireframe
    GeometryDebug.addWireFrameCheckbox(gui, view, _3dTileslayer);

    // Bounding box control
    const obb_layer_id = `${_3dTileslayer.id}_obb_debug`;

    // const planarControls = new PlanarControls(view);

    // function zoomToObject(viewer, objects) {
    //     // LookAt position of the camera
    //     let boundingBox = new THREE.Box3();

    //     let boxes;

    //     // THREE.Group() alters objects in some bad ways
    //     // FIXME maximum call size after 4 object concat
    //     if (objects.length > 1) {
    //         boxes = new THREE.BoxHelper(objects[0]);
    //         for (let i = 1; i < objects.length; i++) {
    //             boxes.add(new THREE.BoxHelper(objects[i]));
    //         }
    //     } else {
    //         boxes = new THREE.BoxHelper(objects[0]);
    //     }

    //     boundingBox = new THREE.BoxHelper(boxes);
    //     const bboxData = new THREE.Box3();
    //     bboxData.setFromObject(boundingBox);

    //     const center = new THREE.Vector3();
    //     bboxData.getCenter(center);
    //     const size = new THREE.Vector3();
    //     bboxData.getSize(size);
    //     // Inspired from initiateSmartTravel... Maybe use this method instead but with the center of the bounding box 
    //     // as target Point instead of mouse under cursor?
    //     // direction of the movement, projected on xy plane and normalized
    //     const dir = new THREE.Vector3();
    //     dir.copy(center).sub(viewer.camera.camera3D.position);
    //     dir.z = 0;
    //     dir.normalize();

    //     // Camera position at the end of the travel
    //     const targetHeight = size.z; // not sure this is the best value
    //     const camPosTarget = new THREE.Vector3();
    //     camPosTarget.copy(center);
    //     camPosTarget.add(dir.multiplyScalar(-targetHeight));
    //     camPosTarget.z = center.z + targetHeight * 4; // empirical

    //     planarControls.initiateTravel(camPosTarget, 'auto', center, true);
    // }


    function debugIdUpdate(context, layer, node) {
        const enabled = context.camera.camera3D.layers.test({ mask: 1 << layer.threejsLayer });

        if (!enabled) {
            return;
        }
        const metadata = node.userData.metadata;

        let helper = node.userData.obb;

        if (node.visible && metadata.boundingVolume) {
            if (!helper) {
                // 3dtiles with region
                if (metadata.boundingVolume.region) {
                    helper = new OBBHelper(metadata.boundingVolume.region, `id:${node.id}`);
                    regionBoundingBoxParent.add(helper);
                    helper.updateMatrixWorld(true);
                // 3dtiles with box
                } else if (metadata.boundingVolume.box) {
                    bboxMesh.geometry.boundingBox = metadata.boundingVolume.box;
                    helper = new THREE.BoxHelper(bboxMesh);
                    helper.material.linewidth = 2;
                // 3dtiles with Sphere
                } else if (metadata.boundingVolume.sphere) {
                    const color = new THREE.Color(Math.random(), Math.random(), Math.random());
                    const material = new THREE.MeshBasicMaterial({ color: color.getHex(), wireframe: true });
                    helper = new THREE.Mesh(geometrySphere, material);
                    helper.position.copy(metadata.boundingVolume.sphere.center);
                    helper.scale.multiplyScalar(metadata.boundingVolume.sphere.radius);
                }

                if (helper) {
                    helper.layer = layer;
                    // add the ability to hide all the debug obj for one layer at once
                    const l3js = layer.threejsLayer;
                    helper.layers.set(l3js);
                    if (helper.children.length) {
                        helper.children[0].layers.set(l3js);
                    }
                    node.userData.obb = helper;
                    helper.updateMatrixWorld();
                }

                if (helper && !metadata.boundingVolume.region) {
                    // compensate B3dm orientation correction
                    const gltfUpAxis = _3dTileslayer.tileset.asset.gltfUpAxis;
                    if (gltfUpAxis === undefined || gltfUpAxis === 'Y') {
                        helper.rotation.x = -Math.PI * 0.5;
                    } else if (gltfUpAxis === 'X') {
                        helper.rotation.z = -Math.PI * 0.5;
                    }

                    // Add helper to parent to apply the correct transformation
                    node.parent.add(helper);
                    helper.updateMatrix();
                    helper.updateMatrixWorld(true);
                }
            }

            if (helper) {
                helper.visible = true;
                if (typeof helper.setMaterialVisibility === 'function') {
                    helper.setMaterialVisibility(true);
                }
            }
        } else if (helper) {
            helper.visible = false;
            if (typeof helper.setMaterialVisibility === 'function') {
                helper.setMaterialVisibility(false);
            }
        }
    }

    const obbLayer = new GeometryLayer(obb_layer_id, new THREE.Object3D(), {
        update: debugIdUpdate,
        visible: false,
        cacheLifeTime: Infinity,
        source: false,
    });

    View.prototype.addLayer.call(view, obbLayer, _3dTileslayer).then((l) => {
        gui.add(l, 'visible').name('Bounding boxes').onChange(() => {
            view.notifyChange(view.camera.camera3D);
        });
    });

    // The sse Threshold for each tile
    gui.add(_3dTileslayer, 'sseThreshold', 0, 100).name('sseThreshold').onChange(() => {
        view.notifyChange(view.camera.camera3D);
    });
}
