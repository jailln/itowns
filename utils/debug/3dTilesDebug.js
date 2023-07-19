import * as THREE from 'three';
import View from 'Core/View';
import GeometryLayer from 'Layer/GeometryLayer';
import { OBB } from 'ThreeExtended/math/OBB';
import GeometryDebug from './GeometryDebug';
import RealOBBHelper from './RealOBBHelper';

const bboxMesh = new THREE.Mesh();

const matrixChangeUpVectorZtoY = (new THREE.Matrix4()).makeRotationX(Math.PI / 2);
// For gltf rotation
const matrixChangeUpVectorZtoX = (new THREE.Matrix4()).makeRotationZ(-Math.PI / 2);

export default function create3dTilesDebugUI(datDebugTool, view, _3dTileslayer) {
    const gui = GeometryDebug.createGeometryDebugUI(datDebugTool, view, _3dTileslayer);

    const regionBoundingBoxParent = new THREE.Group();
    regionBoundingBoxParent.name = 'bboxparent';
    view.scene.add(regionBoundingBoxParent);

    // add wireframe
    GeometryDebug.addWireFrameCheckbox(gui, view, _3dTileslayer);

    // Bounding box control
    const obb_layer_id = `${_3dTileslayer.id}_obb_debug`;

    function debugIdUpdate(context, layer, node) {
        const metadata = node.userData.metadata;

        let helper = node.userData.obb;

        if (!layer.visible) {
            if (helper) {
                helper.visible = false;
                if (typeof helper.setMaterialVisibility === 'function') {
                    helper.setMaterialVisibility(false);
                }
            }
            return;
        }

        if (node.visible && metadata.boundingVolume) {
            if (!helper) {
                // 3dtiles with region
                if (metadata.boundingVolume.region) {
                    const obb = new OBB();
                    obb.copy(metadata.boundingVolume.region);
                    const inverseTileTransform = new THREE.Matrix4();
                    inverseTileTransform.copy(node.matrixWorld).invert();
                    // obb.applyMatrix4(inverseTileTransform);
                    helper = new RealOBBHelper(obb);
                    regionBoundingBoxParent.add(helper);
                    helper.updateMatrixWorld();
                // 3dtiles with box
                } else if (metadata.boundingVolume.box) {
                    // var boxbox = new THREE.Box3();
                    // boxbox.copy(metadata.boundingVolume.box);
                    // boxbox.expandByScalar(5000000);
                    // metadata.boundingVolume.box.expandByScalar(50000);
                    bboxMesh.geometry.boundingBox = metadata.boundingVolume.box;
                    helper = new THREE.BoxHelper(bboxMesh);
                    helper.material.linewidth = 2;
                // 3dtiles with Sphere
                } else if (metadata.boundingVolume.sphere) {
                    const geometry = new THREE.SphereGeometry(metadata.boundingVolume.sphere.radius, 32, 32);
                    const material = new THREE.MeshBasicMaterial({ wireframe: true });
                    helper = new THREE.Mesh(geometry, material);
                    helper.position.copy(metadata.boundingVolume.sphere.center);
                }

                // if (helper) {
                //     helper.layer = layer;
                //     // add the ability to hide all the debug obj for one layer at once
                //     const l3js = layer.threejsLayer;
                //     helper.layers.set(l3js);
                //     if (helper.children.length) {
                //         helper.children[0].layers.set(l3js);
                //     }
                    node.userData.obb = helper;
                //     helper.updateMatrixWorld();
                //
                //     // compensate B3dm orientation correction
                //     // TODO: why do we need to compensate ? Should be handled by node matrixworld ? : do it in the node matrix instead of the gltf scene when parsing?
                //     const gltfUpAxis = _3dTileslayer.tileset.asset.gltfUpAxis;
                //     if (gltfUpAxis === undefined || gltfUpAxis === 'Y') {
                //         helper.rotation.x = -Math.PI * 0.5;
                //     } else if (gltfUpAxis === 'X') {
                //         helper.rotation.z = -Math.PI * 0.5;
                //     }
                //     helper.updateMatrix();
                //
                // }

                if (helper && !metadata.boundingVolume.region) {

                    // Add helper to parent to apply the correct transformation
                    node.parent.add(helper);
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

    gui.add({ frozen: _3dTileslayer.frozen }, 'frozen').onChange(((value) => {
        _3dTileslayer.frozen = value;
        view.notifyChange(_3dTileslayer);
    }));
}
