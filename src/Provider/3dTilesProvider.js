import * as THREE from 'three';
import B3dmParser from 'Parser/B3dmParser';
import PntsParser from 'Parser/PntsParser';
import Fetcher from 'Provider/Fetcher';
import { pre3dTilesUpdate, process3dTilesNode, init3dTilesLayer } from 'Process/3dTilesProcessing';
import utf8Decoder from 'Utils/Utf8Decoder';
import $3DTileset from '../Core/3DTiles/3DTileset';

export function getObjectToUpdateForAttachedLayers(meta) {
    if (meta.content) {
        const result = [];
        meta.content.traverse((obj) => {
            if (obj.isObject3D && obj.material && obj.layer == meta.layer) {
                result.push(obj);
            }
        });
        const p = meta.parent;
        if (p && p.content) {
            return {
                elements: result,
                parent: p.content,
            };
        } else {
            return {
                elements: result,
            };
        }
    }
}

function preprocessDataLayer(layer, view, scheduler) {
    layer.preUpdate = layer.preUpdate || pre3dTilesUpdate;
    layer.update = layer.update || process3dTilesNode();
    layer.sseThreshold = layer.sseThreshold || 16;
    layer.cleanupDelay = layer.cleanupDelay || 1000;
    layer.onTileContentLoaded = layer.onTileContentLoaded || (() => {});
    // override the default method, since updated objects are metadata in this case
    layer.getObjectToUpdateForAttachedLayers = getObjectToUpdateForAttachedLayers;

    layer._cleanableTiles = [];
    return Fetcher.json(layer.url, layer.networkOptions).then((tileset) => {
        layer.tileset = tileset;
        // Verify that extensions of the tileset have been registered in the
        // layer
        if (tileset.extensionsUsed) {
            for (const extensionUsed of tileset.extensionsUsed) {
                // if current extension is not registered
                if (!layer.registeredExtensions || !layer.registeredExtensions.isExtensionRegistered(extensionUsed)) {
                    if (tileset.extensionsRequired &&
                        tileset.extensionsRequired.includes(extensionUsed)) {
                        console.error(
                            `3D Tiles tileset required extension "${extensionUsed}" must be registered to the itowns layer to be parsed and used.`);
                    } else {
                        console.warn(
                            `3D Tiles tileset used extension "${extensionUsed}" must be registered to the itowns layer to be parsed and used.`);
                    }
                }
            }
        }
        const urlPrefix = layer.url.slice(0, layer.url.lastIndexOf('/') + 1);
        layer.tileIndex = new $3DTileset(tileset, urlPrefix, layer.registeredExtensions);
        layer.asset = tileset.asset;
        return init3dTilesLayer(view, scheduler, layer, tileset.root);
    });
}

function b3dmToMesh(data, layer, url) {
    const urlBase = THREE.LoaderUtils.extractUrlBase(url);
    const options = {
        gltfUpAxis: layer.asset.gltfUpAxis,
        urlBase,
        overrideMaterials: layer.overrideMaterials,
        doNotPatchMaterial: layer.doNotPatchMaterial,
        opacity: layer.opacity,
        registeredExtensions: layer.registeredExtensions,
    };
    return B3dmParser.parse(data, options).then((result) => {
        const batchTable = result.batchTable;
        // object3d is actually a THREE.Scene
        const object3d = result.gltf.scene;
        return { batchTable, object3d };
    });
}

function pntsParse(data, layer) {
    return PntsParser.parse(data).then((result) => {
        const material = layer.material ?
            layer.material.clone() :
            new THREE.PointsMaterial({ size: 0.05, vertexColors: THREE.VertexColors });

        // creation points with geometry and material
        const points = new THREE.Points(result.point.geometry, material);

        if (result.point.offset) {
            points.position.copy(result.point.offset);
        }

        return { object3d: points };
    });
}

export function configureTile(tile, layer, metadata, parent) {
    tile.frustumCulled = false;
    tile.layer = layer;

    // parse metadata
    if (metadata.transform) {
        tile.applyMatrix(metadata.transform);
    }
    tile.geometricError = metadata.geometricError;
    tile.tileId = metadata.tileId;
    if (metadata.refine) {
        tile.additiveRefinement = (metadata.refine.toUpperCase() === 'ADD');
    } else {
        tile.additiveRefinement = parent ? (parent.additiveRefinement) : false;
    }
    tile.viewerRequestVolume = metadata.viewerRequestVolume;
    tile.boundingVolume = metadata.boundingVolume;
    if (tile.boundingVolume.region) {
        tile.add(tile.boundingVolume.region);
    }
    tile.updateMatrixWorld();
}

function executeCommand(command) {
    const layer = command.layer;
    const metadata = command.metadata;
    const tile = new THREE.Object3D();
    configureTile(tile, layer, metadata, command.requester);
    // Patch for supporting 3D Tiles pre 1.0 (metadata.content.url) and 1.0
    // (metadata.content.uri)
    const path = metadata.content && (metadata.content.url || metadata.content.uri);

    const setLayer = (obj) => {
        obj.layers.set(layer.threejsLayer);
        obj.userData.metadata = metadata;
        obj.layer = layer;
        if (obj.material) {
            obj.material.transparent = layer.opacity < 1.0;
            obj.material.opacity = layer.opacity;
            obj.material.wireframe = layer.wireframe;
        }
    };
    if (path) {
        // Check if we have relative or absolute url (with tileset's lopocs for example)
        const url = path.startsWith('http') ? path : metadata.baseURL + path;
        const supportedFormats = {
            b3dm: b3dmToMesh,
            pnts: pntsParse,
        };
        return Fetcher.arrayBuffer(url, layer.networkOptions).then((result) => {
            if (result !== undefined) {
                let func;
                const magic = utf8Decoder.decode(new Uint8Array(result, 0, 4));
                if (magic[0] === '{') {
                    result = JSON.parse(utf8Decoder.decode(new Uint8Array(result)));
                    const newPrefix = url.slice(0, url.lastIndexOf('/') + 1);
                    layer.tileIndex.extendTileset(result, metadata.tileId, newPrefix, layer.registeredExtensions);
                } else if (magic == 'b3dm') {
                    func = supportedFormats.b3dm;
                } else if (magic == 'pnts') {
                    func = supportedFormats.pnts;
                } else {
                    return Promise.reject(`Unsupported magic code ${magic}`);
                }
                if (func) {
                    // TODO: request should be delayed if there is a viewerRequestVolume
                    return func(result, layer, url).then((content) => {
                        tile.content = content.object3d;
                        if (content.batchTable) {
                            tile.batchTable = content.batchTable;
                        }
                        tile.add(content.object3d);
                        tile.traverse(setLayer);
                        return tile;
                    });
                }
            }
            tile.traverse(setLayer);
            return tile;
        });
    } else {
        tile.traverse(setLayer);
        return Promise.resolve(tile);
    }
}

export default {
    preprocessDataLayer,
    executeCommand,
};
