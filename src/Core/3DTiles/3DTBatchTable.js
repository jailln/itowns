/** @classdesc
 * A 3D Tiles
 * [batch table](https://github.com/AnalyticalGraphicsInc/3d-tiles/tree/master/specification/TileFormats/BatchTable)
 * @property {number} batchLength - the length of the batch.
 * @property {object} content - the content of the batch table in the form:
 * {property1: values[], property2: values[], ...}.
 * @property {object} extensions - Extensions of the batch table in the form:
 * {extensioName1: extensionObject1, extensioName2: extensionObject2, ...}
 */
export default class $3DTBatchTable {
    /**
     * @param {Object} json - batch table json part
     * @param {ArrayBuffer} binary - buffer representing the batch table
     * binary part (not supported yet)
     * @param {number} batchLength - the length of the batch.
     * @param {Object} registeredExtensions - extensions registered to the layer
     */
    constructor(json, binary, batchLength, registeredExtensions) {
        if (binary !== undefined) {
            console.warn('Binary batch table content not supported yet.');
        }

        this.batchLength = batchLength;

        // Separate the content and the possible extensions
        // When an extension is found, we call its parser and append the
        // returned object to batchTable.extensions
        // Extensions must be registered in the layer (see an example of this in
        // 3dtiles_hierarchy.html)
        if (json.extensions) {
            this.extensions =
                registeredExtensions.parseExtensions(json.extensions, this);
            delete json.extensions;
        }

        // Store batch table json content
        this.content = json;
    }

    /**
     * Creates and returns a javascript object holding the displayable
     * information from the batch table and from extensions of the batch table
     * for a given feature
     * @param {integer} batchID - id of the feature in the batch
     * @returns {Object} - displayable information relative to the batch
     * table. Object is formatted as follow:
     * {BatchTable: {BatchTableFeatureProperties} }.
     */
    getPickingInfo(batchID) {
        const featureDisplayableInfo = {};
        // Verify that the batch ID is valid
        if (batchID < 0 && batchID < this.batchLength) {
            throw new Error(`Batch Id (${batchID}) must be between 0 and 
            ${this.batchLength} to access feature properties from the batch 
            table.`);
        }
        // Get properties from batch table content
        for (const property in this.content) {
            // check that the property is not inherited from prototype chain
            if (Object.prototype.hasOwnProperty.call(this.content, property)) {
                featureDisplayableInfo[property] =
                    this.content[property][batchID];
            }
        }
        return { BatchTable: featureDisplayableInfo };
    }
}
