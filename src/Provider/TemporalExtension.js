import * as THREE from 'three';
import {
    $3dTilesAbstractExtension,
    BatchTable,
    BoundingVolume,
    Tileset,
} from './3dTilesClasses';

// TODO: COmplex transactions ? Et en particulier les
//  subdivision/fusion+modified
// V2 with creations and demolitions
const featureDisplayColors = {
    projectedState: {
        demolition: new THREE.Color(0xff0000), // red
        modified: new THREE.Color(0xFFD700), // yellow
        subdivision: new THREE.Color(0x00FFFF), // cyan
        fusion: new THREE.Color(0x00FFFF), // cyan
    },
    currentState: {
        classic: new THREE.Color(0xffffff), // white
        creation: new THREE.Color(0x009900), // green
        modified: new THREE.Color(0xff5733), // orange
        subdivision: new THREE.Color(0x0000ff), // dark blue
        fusion: new THREE.Color(0x0000ff), // dark blue
    },
};


// TODO: change tags names to subdivided and fused ?
/* V1 with subdivision and fusion
const featureDisplayColors = {
    classic: new THREE.Color(0xffffff), // white
    modified: new THREE.Color(0xff0000), // red
    subdivision: new THREE.Color(0x009900), // green
    fusion: new THREE.Color(0x0033cc), // blue
}; */

class TemporalExtension_Tileset {
    constructor(json) {
        // TODO: pour l'instant les dates sont des années, à terme on gèrera
        //  les dates avec moment comme dans UDV
        this.startDate = json.startDate;
        this.endDate = json.endDate;

        this.versions = json.versions;
        this.versionTransitions = json.versionTransitions;
        this.transactions = json.transactions;

        this.FeaturesTransactions = {};
        this.findFeaturesTransactions();
    }

    // TODO: on prend ici seulement la prmeière transaction. Devrait il y en
    //  avoir qu'une ? Si non, comment doit on gérer ça ?
    findFeaturesTransactions() {
        for (let i = 0; i < this.transactions.length; i++) {
            const transaction = this.transactions[i];
            for (let j = 0; j < transaction.oldFeatures.length; j++) {
                const oldFeature = transaction.oldFeatures[j];
                if (this.FeaturesTransactions[oldFeature] === undefined) {
                    this.FeaturesTransactions[oldFeature] = {};
                }
                if (this.FeaturesTransactions[oldFeature].transactionsAsOldFeature === undefined) {
                    this.FeaturesTransactions[oldFeature].transactionsAsOldFeature = transaction;
                }
            }
            for (let j = 0; j < transaction.newFeatures.length; j++) {
                const newFeature = transaction.newFeatures[j];
                if (this.FeaturesTransactions[newFeature] === undefined) {
                    this.FeaturesTransactions[newFeature] = {};
                }
                if (this.FeaturesTransactions[newFeature].transactionsAsNewFeature === undefined) {
                    this.FeaturesTransactions[newFeature].transactionsAsNewFeature = transaction;
                }
            }
        }
    }
}

class TemporalExtension_BoundingVolume {
    constructor(json) {
        this.startDate = json.startDate;
        this.endDate = json.endDate;
    }

    culling(displayDate) {
        // Bounding volume culling
        if (this.startDate > displayDate || this.endDate < displayDate) {
            return true;
        }
    }
}

class TemporalExtension_BatchTable {
    constructor(json) {
        this.startDates = json.startDates;
        this.endDates = json.endDates;
        this.featureIds = json.featureIds;
        // Create a table which will hold for each features the transaction
        // for which the current feature is an oldFeature (i.e. the source of
        // the transaction) if it exists. This array is filled in the parse
        // method of the TemporalExtension class
        this.oldFeaturesTransaction = [];
        this.newFeaturesTransaction = [];
    }

    /* *** Culling with transactions and colors management     */
    // eslint-disable-next-line class-methods-use-this
    culling(displayDate) {
        // featuresCulling is an array of size number of features (i.e. the
        // size of the batch table). Each entry is a boolean equals to true
        // if the feature must be culled and to false if not. It will be
        // passed to the shader later on which will cull the correct
        // features given this array and the batch ID of the current feature
        // TODO: initialiser les tableaux a la bonne taille avec les
        //  valeurs par défault; ca simplifiera les assignations ensuite
        const featuresCulling = [];
        const featuresColors = [];
        for (let i = 0; i < this.featureIds.length; i++) {
            // fill featuresCulling
            if (this.startDates[i] === displayDate) {
                // ** FEATURE EXISTS
                featuresCulling[i] = false;
                if (Object.keys(this.newFeaturesTransaction[i]).length === 0) {
                    // ** CREATIONS
                    // TODO: Very ugly hardcoded to avoid displaying 2009
                    //  in green
                    if (displayDate !== 2009) {
                        featuresColors[i] = featureDisplayColors.currentState.creation;
                    } else {
                        featuresColors[i] = featureDisplayColors.currentState.classic;
                    }
                } else {
                    // ** MODIFICATION, SUBDIVISION OR FUSION
                    // Get transaction tag and display it in corresponding color
                    const transactionTags = this.newFeaturesTransaction[i].tags;
                    if (transactionTags.length === 1) {
                        const transactionTag = transactionTags[0];
                        if (featureDisplayColors.currentState[transactionTag]) {
                            featuresColors[i] = featureDisplayColors.currentState[transactionTag];
                        } else {
                            console.warn(`Temporal transaction tag ${transactionTag} unknown, defaulting color to white.`);
                            featuresColors[i] = featureDisplayColors.currentState.classic;
                        }
                    } else {
                        // TODO: for demonstration purposes, if there is two
                        //  tags (fusion + modification or subdivision +
                        //  modification) we display the features in grey.
                        //  These cases are indeed mostly between 2012 and
                        //  2015 and are due to the data
                        featuresColors[i] = featureDisplayColors.currentState.classic;
                    }
                }
            } else if (this.endDates[i] + 2 === displayDate) {
                if (Object.keys(this.oldFeaturesTransaction[i]).length === 0) {
                    // ** DEMOLITIONS
                    // TODO: VERY UGLY HARDCODED +2
                    featuresCulling[i] = false;
                    featuresColors[i] = featureDisplayColors.projectedState.demolition;
                    // Note: other cases where the feature is an oldFeature
                    // in a transaction are managed later
                } else {
                    // ** MODIFICATION, SUBDIVISION OR FUSION
                    // Get transaction tag and display it in corresponding color
                    const transactionTags = this.oldFeaturesTransaction[i].tags;
                    if (transactionTags.length === 1) {
                        const transactionTag = transactionTags[0];
                        if (featureDisplayColors.projectedState[transactionTag]) {
                            featuresColors[i] = featureDisplayColors.projectedState[transactionTag];
                        } else {
                            console.warn(`Temporal transaction tag ${transactionTag} unknown, defaulting color to white.`);
                            featuresColors[i] = featureDisplayColors.currentState.classic;
                        }
                    } else {
                        // TODO: for demonstration purposes, if there is two
                        //  tags (fusion + modification or subdivision +
                        //  modification) we display the features in grey.
                        //  These cases are indeed mostly between 2012 and
                        //  2015 and are due to the data
                        featuresColors[i] = featureDisplayColors.currentState.classic;
                    }
                }
            } else if (this.endDates[i] + 1 === displayDate &&
                Object.keys(this.oldFeaturesTransaction[i]).length === 0) {
                // ** Transition time between DEMOLITIONS
                // TODO: VERY UGLY HARDCODED +1
                featuresCulling[i] = false;
                featuresColors[i] = featureDisplayColors.currentState.classic;
                // Note: other cases where the feature is an oldFeature
                // in a transaction are managed later
            } else if (this.startDates[i] <= displayDate &&
                       this.endDates[i] >= displayDate) {
                // ** NORMAL EXISTENCE
                featuresCulling[i] = false;
                featuresColors[i] = featureDisplayColors.currentState.classic;
            } else if (Object.keys(this.oldFeaturesTransaction[i]).length !== 0
                       && this.oldFeaturesTransaction[i].startDate < displayDate
                       && this.oldFeaturesTransaction[i].endDate > displayDate) {
                // TODO: add a comment to explain the dates comparison here
                // ** TRANSITION TIME BETWEEN TWO FEATURES
                // we make the choice to display the old feature
                featuresCulling[i] = false;
                featuresColors[i] = featureDisplayColors.currentState.classic;
            } else {
                // ** NOT EXISTING FEATURES
                // the feature was not present at displayDate
                // Check if there is a transaction with this feature as an
                // oldFeature (i.e. source of the transaction). If yes,
                // we choose to still display the feature but with a color
                // depending on the tag of the transaction

                // no transaction so we cull the feature
                featuresCulling[i] = true;
                // The color won't be used but this array will be added
                // as a BufferAttribute to the mesh later on, which
                // needs to have a length equal to the number of features
                featuresColors[i] = featureDisplayColors.currentState.classic;
            }
        }

        const featuresDisplayInfo = { culling: featuresCulling, colors: featuresColors };
        return featuresDisplayInfo;
    }

    getPickingInfo(featureId) {
        const pickingInfo = {};
        // TODO: this could be a function as we do the same thing 3 times.
        if (this.featureIds && this.featureIds[featureId]) {
            pickingInfo.featureId = this.featureIds[featureId];
        }
        if (this.startDates && this.startDates[featureId]) {
            pickingInfo.startDate = this.startDates[featureId];
        }
        if (this.endDates && this.endDates[featureId]) {
            pickingInfo.endDate = this.endDates[featureId];
        }
        return pickingInfo;
    }
}

/**
 * @module TemporalExtension
 */
// TODO: ajouter un constructeur et un attribut extensionName
export default class TemporalExtension extends $3dTilesAbstractExtension {
    // we only store the temporal_tileset because we need to access it (more
    // precisely, we need to access the transactions) for culling
    constructor() {
        super();
        this.temporal_tileset = {};
    }

    /**
     * Parses a
     * 3DTiles temporal extension and returns a declined TemporalExtension
     * object.
     * @param {Object} json - json holding the extension
     * @param {Object} context - Object calling the parser. An extension can
     * be implemented in different 3D Tiles classes (e.g. Tileset, Batch
     * table, b3dm, etc.). Each class will call this parser if it detects
     * the name associated to this extension. Therefore, the parser needs to
     * know the context in which it has been invoked to call the right
     * parser.
     * @return {Object} - a TemporalExtensioon declined object.
     */
    // eslint-disable-next-line class-methods-use-this
    parse(json, context) {
        if (context instanceof Tileset) {
            this.temporal_tileset = new TemporalExtension_Tileset(json);
            return this.temporal_tileset;
        } else if (context instanceof BatchTable) {
            const temporal_batchTable = new TemporalExtension_BatchTable(json);
            // Fill this.temporal_batchTable.oldFeaturesTransaction which is
            // then used for optimization later on (e.g. in culling).
            for (let i = 0; i < temporal_batchTable.featureIds.length; i++) {
                const featureId = temporal_batchTable.featureIds[i];
                if (this.temporal_tileset.FeaturesTransactions[featureId] !== undefined) {
                    const featureTransacs = this.temporal_tileset.FeaturesTransactions[featureId];
                    temporal_batchTable.oldFeaturesTransaction[i] = featureTransacs.transactionsAsOldFeature === undefined ? {} : featureTransacs.transactionsAsOldFeature;
                    temporal_batchTable.newFeaturesTransaction[i] = featureTransacs.transactionsAsNewFeature === undefined ? {} : featureTransacs.transactionsAsNewFeature;
                } else {
                    temporal_batchTable.oldFeaturesTransaction[i] = {};
                    temporal_batchTable.newFeaturesTransaction[i] = {};
                }
            }
            return temporal_batchTable;
        } else if (context instanceof BoundingVolume) {
            return new TemporalExtension_BoundingVolume(json);
        } else {
            return undefined;
        }
    }

    // TODO: si on avait une 3DTilesbaseclass on pourrait mettre une
    //  fonction hasExtension dedans qui ferait le check si un obj a
    //  extensions et si il a l'extension courante et qui retourne l'ext de
    //  l'obj
    // eslint-disable-next-line class-methods-use-this
    culling(layer, node) {
        // TODO: la displaydate pourrait plutot etre stockée dans l'extension
        //  temporelle ?
        if (!('displayDate' in layer)) {
            throw new Error(`You must define a property named 
            displayDate in the 3D Tiles layer with time_evolving_cities 
            extension to use this extension. To do so, use 
            layer.defineProperty(). displayDate must store the current date of 
            display of the scene.`);
        }
        // TODO: Quand on parse les oldFeatureTransactions, on pourrait
        //  aller changer les dates dans le bounding volume temporel de la
        //  tuile si on trouve des oldFeatureTransactions
        /*
        if (node.boundingVolume && node.boundingVolume.extensions && node.boundingVolume.extensions['3DTILES_temporal']) {
            console.log('Temporal bounding volume culling for node :');
            console.log(node);
            const BV_ext = node.boundingVolume.extensions['3DTILES_temporal'];
            if (BV_ext.culling(layer.displayDate)) {
                // if the display date is outside the temporal bounding volume
                // of the tile; we don't cull the tile directly. This is
                // because we need to display the features of the tile that
                // have a transaction with other features from the next
                // timestamp in time. Hence, we need to verify the dates of
                // each object of the tile first
                console.log('Bounding volume culling = true');
                return true;
            }
            console.log('Bounding volume culling = false');
        }
        */
        if (node.batchTable && node.batchTable.extensions && node.batchTable.extensions['3DTILES_temporal']) {
            // console.log('Temporal batch table culling for node :');
            // console.log(node);
            const BT_ext = node.batchTable.extensions['3DTILES_temporal'];
            const featuresDisplayInfo = BT_ext.culling(layer.displayDate);

            // Update the uniforms of the material
            // TODO: dans l'idéal, le node devrait avoir une
            //  fonction "updateMaterialUniforms"
            // TODO 2: On pourrait aussi faire un scene.traverse qui serait
            //  plus propre qu'un accès à la main au matériau
            // access the material of the node (this access is dependent of
            // the structure of the data representation in itowns)
            const nodeMaterial = node.children[0].children[0].material;

            if (!nodeMaterial.uniforms.featuresCulling ||
                !nodeMaterial.uniforms.featuresColors) {
                console.warn('Uniforms are not correctly set in' +
                    ' temporal extension ShaderMaterial');
                return;
            }

            nodeMaterial.uniforms.featuresCulling.value = featuresDisplayInfo.culling;
            nodeMaterial.uniforms.featuresColors.value = featuresDisplayInfo.colors;

            // console.log('Temporal batch table culling result : ');
            // console.log(featuresDisplayInfo.culling);
            // console.log('Temporal batch table colors : ');
            // console.log(featuresDisplayInfo.colors);

            return false;
        }
        return false;
    }

    // TODO: plutôt passer la batch table (faire comme dans culling de
    //  temporalextension)
    // eslint-disable-next-line class-methods-use-this
    getPickingInfo(extObject, featureId) {
        if (extObject instanceof TemporalExtension_BatchTable) {
            return extObject.getPickingInfo(featureId);
        } else {
            return {};
        }
    }
}
