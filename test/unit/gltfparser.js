import fs from 'fs';
import assert from 'assert';
import GLTFParser from 'Parser/GLTFParser';
import gltf20 from '../data/gltf/Box.gltf';

if (typeof atob === 'undefined') {
    global.atob = b64Encoded => Buffer.from(b64Encoded, 'base64').toString('binary');
}

describe('GLTFParser', function () {
    // TODO catch + promise / then chercher autres tests comment c'est fait
    it('should load glb 1.0', function () {
        const glb10 = fs.readFileSync('test/data/gltf/Box-1.0.glb');
        GLTFParser.parse(glb10, '../data/gltf/').then((result) => {
            console.log('succeed');
            assert.ok(result.scene);
        });
    });

    it('should load gltf 2.0', function () {
        GLTFParser.parse(gltf20, '../data/gltf/').then((result) => {
            assert.ok(result.scene);
        });
    });

});
