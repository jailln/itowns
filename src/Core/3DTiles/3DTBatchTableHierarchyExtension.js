import { $3DTAbstractExtension } from './3DTExtensions';
import $3DTBatchTable from './3DTBatchTable';

/**
 * @classdesc
 * Batch Table part of the 3D Tiles
 * [Batch Table Hierarchy Extension](https://github.com/AnalyticalGraphicsInc/3d-tiles/tree/master/extensions/3DTILES_batch_table_hierarchy)
 * @property {object} classes - The classes as defined in the specification.
 * @property {object} inverseHierarchy - InverseHierarchy contains for each
 * instance (i.e. georgraphic feature e.g. building, roof, etc.) an array of the
 * indexes of its parents. For example, the parents of the instance 0 can be
 * found using inverseHierarchy[0].
 * @property {number[]} instancesIdxs - For each instance of the extension,
 * contains a javascript object with classId and instanceIdx. classId is the id
 * of the class (from this.classes) of the instance. instanceIdx is the index of
 * the instance in this class. Goal: Ease the retrieval of the properties of an
 * instance.
 */
class $3DT_BTHExtension_BatchTable {
    /**
     * Constructor of the $3DT_BTHExtension_BatchTable class.
     * @param {Object} json - The parsed json of the batch table part of the 3D
     * Tiles [Batch Table Hierarchy Extension](https://github.com/AnalyticalGraphicsInc/3d-tiles/tree/master/extensions/3DTILES_batch_table_hierarchy)
     */
    constructor(json) {
        // Described in the jsdoc above.
        this.classes = json.classes;
        this.inverseHierarchy = {};
        this.instancesIdxs = [];

        // Counts the number of instances of a class
        const classCounter = {};
        let parentIdsCounter = 0;

        // if omitted, parentCounts is an array of length instancesLength,
        // where all values are 1 (cf. spec)
        let parentCounts = json.parentCounts;
        if (parentCounts === undefined) {
            parentCounts = new Array(json.instancesLength);
            parentCounts.fill(1);
        }

        // for each instance
        for (let i = 0; i < json.instancesLength; i++) {
            // for each parent of the current instance
            for (let j = 0; j < parentCounts[i]; j++) {
                // When an instance's parentId points to itself, then it has no
                // parent" (cf. spec)
                if (i !== json.parentIds[parentIdsCounter]) {
                    if (this.inverseHierarchy[i] === undefined) {
                        this.inverseHierarchy[i] = [];
                    }
                    this.inverseHierarchy[i].push(json.parentIds[parentIdsCounter]);
                    parentIdsCounter++;
                }
            }
            const classId = json.classIds[i];
            if (classCounter[classId] === undefined) {
                classCounter[classId] = 0;
            }
            this.instancesIdxs[i] = {
                classId,
                instanceIdx: classCounter[classId],
            };
            classCounter[classId]++;
        }
    }

    /**
     * Creates and returns a javascript object holding the displayable
     * information relative to this extension and for a given feature and
     * its parents
     * @param {integer} featureId - id of the feature
     * @returns {Object} - displayable information relative to this extension
     * and for the feature with id=featureId and for its parents
     */
    getPickingInfo(featureId) {
        const instanceProperties = {};
        // get feature class name
        const instanceClassId = this.instancesIdxs[featureId].classId;
        const featureClass = this.classes[instanceClassId].name;
        // get feature properties and values
        const instanceIdx = this.instancesIdxs[featureId].instanceIdx;

        const properties = Object.keys(this.classes[instanceClassId].instances);
        for (let i = 0; i < properties.length; i++) {
            const property = properties[i];
            instanceProperties[property] =
                this.classes[instanceClassId].instances[property][instanceIdx];
        }
        // create return object: className: {featureProperties and values}
        const pickingInfo = {};
        pickingInfo[featureClass] = instanceProperties;
        // If this feature has parent(s), recurse on them
        if (this.inverseHierarchy && this.inverseHierarchy[featureId]) {
            for (let i = 0; i < this.inverseHierarchy[featureId].length; i++) {
                const parentID = this.inverseHierarchy[featureId][i];
                Object.assign(pickingInfo, this.getPickingInfo(parentID));
            }
        }
        return pickingInfo;
    }
}

/**
 * @classdesc
 * 3D Tiles
 * [Batch Table Hierarchy Extension](https://github.com/AnalyticalGraphicsInc/3d-tiles/tree/master/extensions/3DTILES_batch_table_hierarchy)
 */
export default class $3DTBatchTableHierarchyExtension extends $3DTAbstractExtension {
    /**
     * Parses a
     * [3DTILES_batch_table_hierarchy extension]{@link https://github.com/AnalyticalGraphicsInc/3d-tiles/tree/master/extensions/3DTILES_batch_table_hierarchy}
     * and returns a $3DT_BTHExtension_BatchTable object.
     * @param {Object} json - json holding the extension
     * @param {Object} context - the class calling this parser. Used to
     * determine if which part of the extension needs to be parsed.
     * @return {Object} - a declined $3DT_BTHExtension_BatchTable object.
     */
    // eslint-disable-next-line class-methods-use-this
    parse(json, context) {
        if (context instanceof $3DTBatchTable) {
            return new $3DT_BTHExtension_BatchTable(json);
        } else {
            return undefined;
        }
    }

    /**
     * Calls the function getPickingInfo on the extension object.
     * @param {Object} extObject - id of the feature
     * @param {integer} featureId - Id of the feature for which information
     * must be retrieved.
     * @returns {Object} - displayable information relative to the batch
     * table hierarchy extension.
     */
    // eslint-disable-next-line class-methods-use-this
    getPickingInfo(extObject, featureId) {
        if (extObject instanceof $3DT_BTHExtension_BatchTable) {
            return extObject.getPickingInfo(featureId);
        } else {
            return {};
        }
    }
}
