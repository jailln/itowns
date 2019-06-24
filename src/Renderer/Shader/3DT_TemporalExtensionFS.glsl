varying float batchID;
void main() {
    float red = batchID / floor(batchID);
    gl_FragColor = vec4( red, 0.5, 0.5, 1.0 );
}
