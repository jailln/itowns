/** @classdesc
 * Class for managing
 * [3D Tiles extensions](https://github.com/AnalyticalGraphicsInc/3d-tiles/tree/master/extensions).
 * Extensions used in a 3D Tiles tileset must be registered in the iTowns' layer
 * holding the tileset by the user with the method registerExtension. The extension
 * must be registered with a class holding the code to interpret the
 * extension. This class must extend {@link $3DTAbstractExtension}. An
 * example of extension class is {@link $3DTBatchTableHierarchyExtension}.
 * @example
 * // Register batch table hierarchy extension and add it to the layer
 * // using defineLayerProperty method
 * const extensions = new itowns.$3DTExtensions();
 * extensions.registerExtension("3DTILES_batch_table_hierarchy",
 * new itowns.$3DTBatchTableHierarchyExtension());

 * $3dTilesLayerBTHierarchy.defineLayerProperty('registeredExtensions');
 * $3dTilesLayerBTHierarchy.registeredExtensions = extensions;
 */
export class $3DTExtensions {
    /**
     * Register a 3D Tiles extension: Maps an extension name to its class
     * @param {string} extensionName - Name of the extension
     * @param {class} extensionClass - The class holding the code to
     * interpret the extension.
     */
    registerExtension(extensionName, extensionClass) {
        this[extensionName] = extensionClass;
    }

    /**
     * Get an extension with its name
     * @param {string} extensionName - name of the extension.
     * @returns {*}
     */
    getExtension(extensionName) {
        return this[extensionName];
    }

    /**
     * Test if an extension is registered
     * @param {string} extensionName - Name of the extension
     * @returns {boolean} - true if the extension is registered and false
     * otherwise
     */
    isExtensionRegistered(extensionName) {
        return !!this[extensionName];
    }

    /**
     * Parses the extensions from a given JSON (extensionsJSON) by
     * calling the right parsers from the registered extensions objects.
     * @param {object} extensionsJSON - the JSON to parse extensions from.
     * @param {*} context - the context in which the parseExtensions method
     * has been called. For instance, if the {@link $3DTBatchTable} needs to
     * parse its extensions, it will call parseExtension with the JSON to
     * parse and this as the context.
     * @returns {object} - An object with keys being the names of the
     * extensions and values the objects returned by the extensions parsers.
     */
    parseExtensions(extensionsJSON, context) {
        const parsedExtensions = {};
        for (const extName in extensionsJSON) {
            if (this.isExtensionRegistered(extName)) {
                const extension = this.getExtension(extName);
                parsedExtensions[extName] =
                    extension.parse(extensionsJSON[extName], context);
            }
        }
        return parsedExtensions;
    }
}

/** @classdesc
 * Abstract class for
 * [3D Tiles extensions](https://github.com/AnalyticalGraphicsInc/3d-tiles/tree/master/extensions).
 * This class is an interface for 3D Tiles extensions. Extensions implemented by
 * the user must inherit from this class. Example of extension extending this
 * class:
 *  [$3DTBatchTableHierarchyExtension]{@link $3DTBatchTableHierarchyExtension}
 */
export class $3DTAbstractExtension {
    /**
     * This class must not be instanciated directly.
     */
    constructor() {
        if (this.constructor === $3DTAbstractExtension) {
            throw new TypeError('Abstract class ' +
                '"$3dTAbstractExtension" cannot be instantiated directly');
        }
    }

    /**
     * Default extension parser. Example of implementation:
     * {@link $3DTBatchTableHierarchyExtension#parse}
     * @param {Object} json - json holding the extension
     * @param {Object} context - the class calling this parser. Used to
     * determine which part of the extension needs to be parsed.
     * @return {Object} - an object representing the parsed extension.
     */
    // eslint-disable-next-line
    parse(json, context) {
        return {};
    }

    /**
     * Method to get the displayable information related to a given feature
     * from an extension. Example of implementation:
     * {@link $3DTBatchTableHierarchyExtension#getPickingInfo}
     * @param {object} extObject - The extensionObject to get information from.
     * @param {integer} featureId - id of the feature to get information for.
     * @returns {object} - an object containing displayable information of
     * the extension.
     */
    // eslint-disable-next-line
    getPickingInfo(extObject, featureId) {
        return {};
    }
}
