attribute vec3 _BATCHID;
varying float batchID;
void main() {
    batchID = _BATCHID.x;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
