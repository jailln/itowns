import * as THREE from 'three';

class RealOBBHelper extends THREE.Mesh {
    constructor(OBB, color) {
        color = color || new THREE.Color(Math.random(), Math.random(), Math.random());
        const geom = new THREE.BoxGeometry(OBB.halfSize.x * 2, OBB.halfSize.y * 2, OBB.halfSize.z * 2);
        const mat = new THREE.MeshBasicMaterial({ color, wireframe: true, wireframeLinewidth: 2 });
        super(geom, mat);
        const mat4 = new THREE.Matrix4();
        mat4.setFromMatrix3(OBB.rotation);
        this.setRotationFromMatrix(mat4);
        this.position.copy(OBB.center);
        this.obb = OBB;
        this.frustumCulled = false;
    }

    // updateMatrixWorld(force = false) {
    //     if (this.obb.box3D.isEmpty()) {
    //         return;
    //     }
    //
    //     this.quaternion.copy(this.obb.quaternion);
    //
    //     this.obb.box3D.getCenter(this.position).applyQuaternion(this.quaternion).add(this.obb.position);
    //
    //     this.obb.box3D.getSize(this.scale);
    //
    //     this.scale.multiplyScalar(0.5);
    //
    //     this.updateMatrix();
    //
    //     THREE.Object3D.prototype.updateMatrixWorld.call(this, force);
    // }
}

export default RealOBBHelper;
