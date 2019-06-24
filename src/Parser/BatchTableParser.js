import utf8Decoder from 'Utils/Utf8Decoder';
import { BatchTable } from 'Provider/3dTilesClasses';

/**
 * @module BatchTableParser
 */
// TODO: Move to BatchTable constructor directly
export default {
    /** Parse a batch table buffer and returns a promise that resolves with a
     *  BatchTable object.
     * @param {ArrayBuffer} buffer - the batch table buffer.
     * @param {integer} BTBinaryLength - length of the binary part of the
     * batch table
     * @param {number} BATCH_LENGTH the length of the batch.
     * @param {Object} registeredExtensions - extensions registered to the layer
     * @return {Promise} - a promise that resolves with a BatchTable object.
     *
     */
    parse(buffer, BTBinaryLength, BATCH_LENGTH, registeredExtensions) {
        // Batch table has a json part and can have a binary part (not
        // supported yet)
        let binary;
        let jsonBuffer = buffer;
        if (BTBinaryLength > 0) {
            binary = buffer.slice(buffer.byteLength - BTBinaryLength);
            jsonBuffer =
                buffer.slice(0, buffer.byteLength - BTBinaryLength);
        }
        const content = utf8Decoder.decode(new Uint8Array(jsonBuffer));
        const json = JSON.parse(content);

        return Promise.resolve(new BatchTable(json, binary, BATCH_LENGTH, registeredExtensions));
    },
};
