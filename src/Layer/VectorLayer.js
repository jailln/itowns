import * as THREE from 'three';
import GeometryLayer from 'Layer/GeometryLayer';
import { InfoTiledGeometryLayer } from 'Layer/InfoLayer';
import Picking from 'Core/Picking';
import convertToTile from 'Converter/convertToTile';
import ObjectRemovalHelper from 'Process/ObjectRemovalHelper';
import { SIZE_DIAGONAL_TEXTURE } from 'Process/LayeredMaterialNodeProcessing';
import { ImageryLayers } from 'Layer/Layer';
import { CACHE_POLICIES } from 'Core/Scheduler/Cache';

/** */
class VectorLayer extends GeometryLayer {
    /** */


    constructor(id, object3d, config = {} ){
        /** */
        config.cacheLifeTime = config.cacheLifeTime == undefined ? CACHE_POLICIES.GEOMETRY : config.cacheLifeTime;
        super(id, object3d, config);
        this.isVectorLayer = true;
        
    }

}

export default VectorLayer;