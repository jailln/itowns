import * as THREE from 'three';
import Earcut from 'earcut';
import { FEATURE_TYPES } from 'Core/Feature';
import ReferLayerProperties from 'Layer/ReferencingLayerProperties';
import { deprecatedFeature2MeshOptions } from 'Core/Deprecated/Undeprecator';
import { Extent, Coordinates, OrientationUtils } from '@itowns/geographic';
import Style, { StyleContext } from 'Core/Style';
import DEMUtils from 'Utils/DEMUtils';

const coord = new Coordinates('EPSG:4326', 0, 0, 0);
const context = new StyleContext();
const defaultStyle = new Style();
let style;

/*
    key = `z${extent.zoom}r${extent.row}c${extent.col}`
    value = {
        i: int,
        tileMesh: TileMesh,
        FeatureMesh: FeatureMesh
    }
 */
const tileMeshCountMap = new Map();

/**
 * Copy elevation uniforms from a TileMesh's LayeredMaterial to a Feature2Mesh shader.
 * This allows features to use the same elevation data as their parent tile.
 *
 * @param {Object} shader - The compiled shader from onBeforeCompile
 * @param {TileMesh} tileMesh - The parent TileMesh (tileMesh from FeatureProcessing)
 */
function copyElevationUniforms(shader, tileMesh) {
    // Check if tileMesh is a TileMesh with a LayeredMaterial
    if (!tileMesh || !tileMesh.isTileMesh || !tileMesh.material || tileMesh.material.name !== 'LayeredMaterial' || !shader) {
        return;
    }

    const tileMaterial = tileMesh.material;
    const tileUniforms = tileMaterial.uniforms;

    // Copy elevation texture and related uniforms
    if (tileUniforms.elevationTextures && tileUniforms.elevationTextures.value) {
        shader.uniforms.elevationTextures.value = tileUniforms.elevationTextures.value;
        shader.uniforms.elevationTextureCount.value = tileUniforms.elevationTextureCount.value;

        // Copy elevation layers (scale, bias, mode, zmin, zmax)
        if (tileUniforms.elevationLayers && tileUniforms.elevationLayers.value) {
            shader.uniforms.elevationLayers.value = tileUniforms.elevationLayers.value.slice(0, 1);
        }

        // Copy elevation offset scales (UV transformation)
        if (tileUniforms.elevationOffsetScales && tileUniforms.elevationOffsetScales.value) {
            shader.uniforms.elevationOffsetScales.value = tileUniforms.elevationOffsetScales.value.slice(0, 1);
        }

        // Copy geoid height
        if (tileUniforms.geoidHeight) {
            shader.uniforms.geoidHeight.value = tileUniforms.geoidHeight.value;
        }
        // shader.uniforms.offset = { value: 300 };
    }
}

const dim_ref = new THREE.Vector2();
const dim = new THREE.Vector2();
const normal = new THREE.Vector3();
const baseCoord = new THREE.Vector3();
const topCoord = new THREE.Vector3();
const inverseScale = new THREE.Vector3();
const extent = new Extent('EPSG:4326', 0, 0, 0, 0);

const _color = new THREE.Color();
const maxValueUint8 = 2 ** 8 - 1;
const maxValueUint16 = 2 ** 16 - 1;
const maxValueUint32 = 2 ** 32 - 1;
const crsWGS84 = 'EPSG:4326';

class FeatureMesh extends THREE.Group {
    #currentCrs;
    #originalCrs;
    #collection = new THREE.Group();
    #place = new THREE.Group();
    constructor(meshes, collection) {
        super();

        this.meshes = new THREE.Group().add(...meshes);

        this.#collection = new THREE.Group().add(this.meshes);
        this.#collection.quaternion.copy(collection.quaternion);
        this.#collection.position.copy(collection.position);

        this.#collection.scale.copy(collection.scale);
        this.#collection.updateMatrix();

        this.#originalCrs = collection.crs;
        this.#currentCrs = this.#originalCrs;
        this.extent = collection.extent;

        this.add(this.#place.add(this.#collection));
    }

    as(crs) {
        if (this.#currentCrs !== crs) {
            this.#currentCrs = crs;
            if (crs == this.#originalCrs) {
                // reset transformation
                this.place.position.set(0, 0, 0);
                this.position.set(0, 0, 0);
                this.scale.set(1, 1, 1);
                this.quaternion.identity();
            } else {
                // calculate the scale transformation to transform the feature.extent
                // to feature.extent.as(crs)
                coord.crs = this.#originalCrs;
                // TODO: An extent here could be either a geographic extent (for
                // features from WFS) or a tiled extent (for features from MVT).
                // Unify both behavior.
                if (this.extent.isExtent) {
                    extent.copy(this.extent).applyMatrix4(this.#collection.matrix);
                    extent.as(coord.crs, extent);
                } else {
                    this.extent.toExtent(coord.crs, extent);
                }
                extent.spatialEuclideanDimensions(dim_ref);
                extent.planarDimensions(dim);
                if (dim.x && dim.y) {
                    this.scale.copy(dim_ref).divide(dim).setZ(1);
                }

                // Position and orientation
                // remove original position
                this.#place.position.copy(this.#collection.position).negate();

                // get mesh coordinate
                coord.setFromVector3(this.#collection.position);

                // get method to calculate orientation
                const crsInput = this.#originalCrs == 'EPSG:3857' ? crsWGS84 : this.#originalCrs;
                const crs2crs = OrientationUtils.quaternionFromCRSToCRS(crsInput, crs);
                // calculate orientation to crs
                crs2crs(coord.as(crsWGS84), this.quaternion);

                // transform position to crs
                coord.as(crs, coord).toVector3(this.position);
            }
        }

        return this;
    }
}

function toColor(color) {
    if (color) {
        if (color.type == 'Color') {
            return color;
        } else {
            return _color.set(color);
        }
    } else {
        return _color.set(Math.random() * 0xffffff);
    }
}

function getIntArrayFromSize(data, size) {
    if (size <= maxValueUint8) {
        return new Uint8Array(data);
    } else if (size <= maxValueUint16) {
        return new Uint16Array(data);
    } else {
        return new Uint32Array(data);
    }
}

function separateMeshes(object3D) {
    const meshes = [];
    object3D.updateMatrixWorld();
    object3D.traverse((element) => {
        if (element instanceof THREE.Mesh) {
            element.updateMatrixWorld();
            element.geometry.applyMatrix4(element.matrixWorld);
            meshes.push(element);
        }
    });

    return meshes;
}

/**
 * Add indices for the side faces.
 * We loop over the contour and create a side face made of two triangles.
 *
 * For a ring made of (n) coordinates, there are (n*2) vertices.
 * The (n) first vertices are on the roof, the (n) other vertices are on the floor.
 *
 * If index (i) is on the roof, index (i+length) is on the floor.
 *
 * @param {number[]} indices - Array of indices to push to
 * @param {number} length - Total vertices count in the geom (excluding the extrusion ones)
 * @param {number} offset
 * @param {number} count
 * @param {boolean} isClockWise - Wrapping direction
 */
function addExtrudedPolygonSideFaces(indices, length, offset, count, isClockWise) {
    // loop over contour length, and for each point of the contour,
    // add indices to make two triangle, that make the side face
    const startIndice = indices.length;
    indices.length += (count - 1) * 6;
    for (let i = offset, j = startIndice; i < offset + count - 1; ++i, ++j) {
        if (isClockWise) {
            // first triangle indices
            indices[j] = i;
            indices[++j] = i + length;
            indices[++j] = i + 1;
            // second triangle indices
            indices[++j] = i + 1;
            indices[++j] = i + length;
            indices[++j] = i + length + 1;
        } else {
            // first triangle indices
            indices[j] = i + length;
            indices[++j] = i;
            indices[++j] = i + length + 1;
            // second triangle indices
            indices[++j] = i + length + 1;
            indices[++j] = i;
            indices[++j] = i + 1;
        }
    }
}

function featureToPoint(feature, options) {
    const ptsIn = feature.vertices;
    const colors = new Uint8Array(ptsIn.length);
    const batchIds = new Uint32Array(ptsIn.length);
    const batchId = options.batchId || ((p, id) => id);

    let featureId = 0;
    const vertices = new Float32Array(ptsIn);
    inverseScale.setFromMatrixScale(context.collection.matrixWorldInverse);
    normal.set(0, 0, 1).multiply(inverseScale);

    const pointMaterialSize = [];
    context.setFeature(feature);

    for (const geometry of feature.geometries) {
        const start = geometry.indices[0].offset;
        const count = geometry.indices[0].count;
        const end = start + count;
        const id = batchId(geometry.properties, featureId);
        context.setGeometry(geometry);

        for (let v = start * 3, j = start; j < end; v += 3, j += 1) {
            if (feature.normals) {
                normal.fromArray(feature.normals, v).multiply(inverseScale);
            }

            const localCoord = context.setLocalCoordinatesFromArray(feature.vertices, v);
            style.setContext(context);
            const { base_altitude, color, radius } = style.point;

            coord.copy(localCoord)
                .applyMatrix4(context.collection.matrixWorld);
            if (coord.crs == 'EPSG:4978') {
            // altitude convertion from geocentered to elevation (from ground)
                coord.as('EPSG:4326', coord);
            }

            // Calculate the new coordinates using the elevation shift (baseCoord)
            baseCoord.copy(normal)
                .multiplyScalar(base_altitude - coord.z).add(localCoord)
            // and update the geometry buffer (vertices).
                .toArray(vertices, v);

            toColor(color).multiplyScalar(255).toArray(colors, v);

            if (!pointMaterialSize.includes(radius)) {
                pointMaterialSize.push(radius);
            }
            batchIds[j] = id;
        }
        featureId++;
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3, true));
    geom.setAttribute('batchId', new THREE.BufferAttribute(batchIds, 1));

    options.pointMaterial.size = pointMaterialSize[0];
    if (pointMaterialSize.length > 1) {
        // TODO CREATE material for each feature
        console.warn('Too many differents point.radius, only the first one will be used');
    }

    return new THREE.Points(geom, options.pointMaterial);
}

function featureToLine(feature, options) {
    const ptsIn = feature.vertices;
    const colors = new Uint8Array(ptsIn.length);
    const count = ptsIn.length / 3;

    const batchIds = new Uint32Array(count);
    const batchId = options.batchId || ((p, id) => id);
    let featureId = 0;

    const vertices = new Float32Array(ptsIn.length);
    const geom = new THREE.BufferGeometry();

    const lineMaterialWidth = [];
    context.setFeature(feature);

    const countIndices = (count - feature.geometries.length) * 2;
    const indices = getIntArrayFromSize(countIndices, count);

    let i = 0;
    inverseScale.setFromMatrixScale(context.collection.matrixWorldInverse);
    normal.set(0, 0, 1).multiply(inverseScale);
    // Multi line case
    for (const geometry of feature.geometries) {
        context.setGeometry(geometry);
        const id = batchId(geometry.properties, featureId);

        const start = geometry.indices[0].offset;
        // To avoid integer overflow with indice value (16 bits)
        if (start > 0xffff) {
            console.warn('Feature to Line: integer overflow, too many points in lines');
            break;
        }
        const count = geometry.indices[0].count;
        const end = start + count;

        for (let v = start * 3, j = start; j < end; v += 3, j += 1) {
            if (j < end - 1) {
                if (j < 0xffff) {
                    indices[i++] = j;
                    indices[i++] = j + 1;
                } else {
                    break;
                }
            }
            if (feature.normals) {
                normal.fromArray(feature.normals, v).multiply(inverseScale);
            }

            const localCoord = context.setLocalCoordinatesFromArray(feature.vertices, v);
            style.setContext(context);
            const { base_altitude, color, width } = style.stroke;

            coord.copy(localCoord)
                .applyMatrix4(context.collection.matrixWorld);
            if (coord.crs == 'EPSG:4978') {
            // altitude convertion from geocentered to elevation (from ground)
                coord.as('EPSG:4326', coord);
            }

            // Calculate the new coordinates using the elevation shift (baseCoord)
            baseCoord.copy(normal)
                .multiplyScalar(base_altitude - coord.z).add(localCoord)
            // and update the geometry buffer (vertices).
                .toArray(vertices, v);

            toColor(color).multiplyScalar(255).toArray(colors, v);

            if (!lineMaterialWidth.includes(width)) {
                lineMaterialWidth.push(width);
            }
            batchIds[j] = id;
        }
        featureId++;
    }
    options.lineMaterial.linewidth = lineMaterialWidth[0];
    if (lineMaterialWidth.length > 1) {
        // TODO CREATE material for each feature
        console.warn('Too many differents stroke.width, only the first one will be used');
    }
    geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3, true));
    geom.setAttribute('batchId', new THREE.BufferAttribute(batchIds, 1));
    geom.setIndex(new THREE.BufferAttribute(indices, 1));

    return new THREE.LineSegments(geom, options.lineMaterial);
}

function featureToPolygon(feature, options) {
    const vertices = new Float32Array(feature.vertices);
    const colors = new Uint8Array(feature.vertices.length);
    const indices = [];

    const batchIds = new Uint32Array(vertices.length / 3);
    const batchId = options.batchId || ((p, id) => id);
    context.setFeature(feature);

    inverseScale.setFromMatrixScale(context.collection.matrixWorldInverse);
    normal.set(0, 0, 1).multiply(inverseScale);
    let featureId = 0;

    for (const geometry of feature.geometries) {
        const start = geometry.indices[0].offset;
        // To avoid integer overflow with index value (32 bits)
        if (start > maxValueUint32) {
            console.warn('Feature to Polygon: integer overflow, too many points in polygons');
            break;
        }
        context.setGeometry(geometry);

        const lastIndice = geometry.indices.slice(-1)[0];
        const end = lastIndice.offset + lastIndice.count;
        const count = end - start;
        const startIn = start * 3;
        const endIn = startIn + count * 3;
        const id = batchId(geometry.properties, featureId);

        for (let i = startIn, b = start; i < endIn; i += 3, b += 1) {
            if (feature.normals) {
                normal.fromArray(feature.normals, i).multiply(inverseScale);
            }

            const localCoord = context.setLocalCoordinatesFromArray(feature.vertices, i);
            style.setContext(context);
            const { base_altitude, color } = style.fill;

            coord.copy(localCoord)
                .applyMatrix4(context.collection.matrixWorld);
            if (coord.crs == 'EPSG:4978') {
            // altitude convertion from geocentered to elevation (from ground)
                coord.as('EPSG:4326', coord);
            }

            // Calculate the new coordinates using the elevation shift (baseCoord)
            baseCoord.copy(normal)
                .multiplyScalar(base_altitude - coord.z).add(localCoord)
            // and update the geometry buffer (vertices).
                .toArray(vertices, i);

            toColor(color).multiplyScalar(255).toArray(colors, i);
            batchIds[b] = id;
        }
        featureId++;

        const geomVertices = vertices.slice(start * 3, end * 3);
        const holesOffsets = geometry.indices.map(i => i.offset - start).slice(1);
        const triangles = Earcut(geomVertices, holesOffsets, 3);

        const startIndice = indices.length;
        indices.length += triangles.length;

        for (let i = 0; i < triangles.length; i++) {
            indices[startIndice + i] = triangles[i] + start;
        }
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3, true));
    geom.setAttribute('batchId', new THREE.BufferAttribute(batchIds, 1));
    geom.setIndex(new THREE.BufferAttribute(getIntArrayFromSize(indices, vertices.length / 3), 1));

    // Compute vertex normals for elevation displacement in shader
    geom.computeVertexNormals();

    // Generate UVs relative to tile extent for proper elevation sampling
    // Vertices are in local space, so we need to transform them to world space first
    const uvs = new Float32Array(vertices.length / 3 * 2);

    if (options.tileMesh?.extent) {
        // Use tileMesh extent and convert CRS if needed
        const tileExtent = options.tileMesh.extent;
        const worldVertex = new THREE.Vector3();

        // Get tile bounds in the collection's CRS
        let tileMinX; let tileMinY; let tileMaxX; let
            tileMaxY;

        if (tileExtent.crs === 'EPSG:4326') {
            // Convert geographic extent to the collection's projection (usually EPSG:3857)
            const minCoord = new Coordinates(tileExtent.crs, tileExtent.west, tileExtent.south);
            const maxCoord = new Coordinates(tileExtent.crs, tileExtent.east, tileExtent.north);

            minCoord.as(context.collection.crs, minCoord);
            maxCoord.as(context.collection.crs, maxCoord);

            tileMinX = minCoord.x;
            tileMinY = minCoord.y;
            tileMaxX = maxCoord.x;
            tileMaxY = maxCoord.y;
        } else {
            tileMinX = tileExtent.west;
            tileMinY = tileExtent.south;
            tileMaxX = tileExtent.east;
            tileMaxY = tileExtent.north;
        }

        const tileWidth = tileMaxX - tileMinX;
        const tileHeight = tileMaxY - tileMinY;

        // Transform vertices from local space to world space using collection matrix
        for (let i = 0, j = 0; i < vertices.length; i += 3, j += 2) {
            worldVertex.set(vertices[i], vertices[i + 1], vertices[i + 2]);
            worldVertex.applyMatrix4(context.collection.matrixWorld);

            // Compute UVs based on world position within tile extent
            uvs[j] = (worldVertex.x - tileMinX) / tileWidth;
            uvs[j + 1] = (worldVertex.y - tileMinY) / tileHeight;
        }

        // Debug: log UV range (sample 10%)
        if (Math.random() < 0.1) {
            let minU = 1; let maxU = 0; let minV = 1; let
                maxV = 0;
            for (let j = 0; j < uvs.length; j += 2) {
                minU = Math.min(minU, uvs[j]);
                maxU = Math.max(maxU, uvs[j]);
                minV = Math.min(minV, uvs[j + 1]);
                maxV = Math.max(maxV, uvs[j + 1]);
            }
            // console.log('🔍 Polygon UV:', { u: [minU.toFixed(3), maxU.toFixed(3)], v: [minV.toFixed(3), maxV.toFixed(3)] });
        }
    } else {
        // Fallback to local bounding box if no collection context
        geom.computeBoundingBox();
        const bbox = geom.boundingBox;
        for (let i = 0, j = 0; i < vertices.length; i += 3, j += 2) {
            uvs[j] = (vertices[i] - bbox.min.x) / (bbox.max.x - bbox.min.x);
            uvs[j + 1] = (vertices[i + 1] - bbox.min.y) / (bbox.max.y - bbox.min.y);
        }
    }
    geom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

    return new THREE.Mesh(geom, options.polygonMaterial);
}

function area(contour, offset, count) {
    offset *= 3;
    const n = offset + count * 3;
    let a = 0.0;

    for (let p = n - 3, q = offset; q < n; p = q, q += 3) {
        a += contour[p] * contour[q + 1] - contour[q] * contour[p + 1];
    }

    return a * 0.5;
}

function featureToExtrudedPolygon(feature, options) {
    const ptsIn = feature.vertices;
    const vertices = new Float32Array(ptsIn.length * 2);
    const totalVertices = ptsIn.length / 3;

    const colors = new Uint8Array(ptsIn.length * 2);

    const indices = [];

    const batchIds = new Uint32Array(vertices.length / 3);
    const batchId = options.batchId || ((p, id) => id);

    let featureId = 0;

    context.setFeature(feature);
    inverseScale.setFromMatrixScale(context.collection.matrixWorldInverse);
    normal.set(0, 0, 1).multiply(inverseScale);
    coord.setCrs(context.collection.crs);

    for (const geometry of feature.geometries) {
        context.setGeometry(geometry);

        const start = geometry.indices[0].offset;
        const lastIndice = geometry.indices.slice(-1)[0];
        const end = lastIndice.offset + lastIndice.count;
        const count = end - start;
        const isClockWise = geometry.indices[0].ccw ?? (area(ptsIn, start, count) < 0);

        const startIn = start * 3;
        const startTop = start + totalVertices;
        const endIn = startIn + count * 3;
        const id = batchId(geometry.properties, featureId);

        for (let i = startIn, t = startIn + ptsIn.length, b = start; i < endIn; i += 3, t += 3, b += 1) {
            if (feature.normals) {
                normal.fromArray(feature.normals, i).multiply(inverseScale);
            }

            const localCoord = context.setLocalCoordinatesFromArray(ptsIn, i);
            style.setContext(context);
            const { base_altitude, extrusion_height, color } = style.fill;

            /*            if (base_altitude === 'terrain') {
                DEMUtils.getElevationValueAt(context, this.coordinates, DEMUtils.FAST_READ_Z)
            } */

            coord.copy(localCoord)
                .applyMatrix4(context.collection.matrixWorld);
            if (coord.crs == 'EPSG:4978') {
            // altitude convertion from geocentered to elevation (from ground)
                coord.as('EPSG:4326', coord);
            }

            // Calculate the new base coordinates using the elevation shift (baseCoord)
            baseCoord.copy(normal)
                .multiplyScalar(base_altitude - coord.z).add(localCoord)
            // and update the geometry buffer (vertices).
                .toArray(vertices, i);
            batchIds[b] = id;

            // populate top geometry buffers
            topCoord.copy(normal)
                .multiplyScalar(extrusion_height).add(baseCoord)
                .toArray(vertices, t);
            batchIds[b + totalVertices] = id;

            // coloring base and top mesh
            const meshColor = toColor(color).multiplyScalar(255);
            meshColor.toArray(colors, t); // top
            meshColor.multiplyScalar(0.5).toArray(colors, i); // base is half dark
        }

        featureId++;

        const endTop = end + totalVertices;

        const geomVertices = vertices.slice(startTop * 3, endTop * 3);
        const holesOffsets = geometry.indices.map(i => i.offset - start).slice(1);
        const triangles = Earcut(geomVertices, holesOffsets, 3);

        const startIndice = indices.length;
        indices.length += triangles.length;

        for (let i = 0; i < triangles.length; i++) {
            indices[startIndice + i] = triangles[i] + startTop;
        }

        // add extruded contour
        addExtrudedPolygonSideFaces(
            indices,
            totalVertices,
            geometry.indices[0].offset,
            geometry.indices[0].count,
            isClockWise);

        // add extruded holes
        for (let i = 1; i < geometry.indices.length; i++) {
            const indice = geometry.indices[i];
            addExtrudedPolygonSideFaces(
                indices,
                totalVertices,
                indice.offset,
                indice.count,
                !(indice.ccw ?? isClockWise));
        }
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3, true));
    geom.setAttribute('batchId', new THREE.BufferAttribute(batchIds, 1));

    geom.setIndex(new THREE.BufferAttribute(getIntArrayFromSize(indices, vertices.length / 3), 1));

    // Generate UVs relative to tile extent for proper elevation sampling
    // Vertices are in local space, so we need to transform them to world space first
    const uvs = new Float32Array(vertices.length / 3 * 2);

    if (options.tileMesh?.extent) {
        // Use tileMesh extent and convert CRS if needed
        const tileExtent = options.tileMesh.extent;
        const worldVertex = new THREE.Vector3();

        // Get tile bounds in the collection's CRS
        let tileMinX; let tileMinY; let tileMaxX; let
            tileMaxY;

        if (tileExtent.crs === 'EPSG:4326') {
            // Convert geographic extent to the collection's projection (usually EPSG:3857)
            const minCoord = new Coordinates(tileExtent.crs, tileExtent.west, tileExtent.south);
            const maxCoord = new Coordinates(tileExtent.crs, tileExtent.east, tileExtent.north);

            minCoord.as(context.collection.crs, minCoord);
            maxCoord.as(context.collection.crs, maxCoord);

            tileMinX = minCoord.x;
            tileMinY = minCoord.y;
            tileMaxX = maxCoord.x;
            tileMaxY = maxCoord.y;
        } else {
            tileMinX = tileExtent.west;
            tileMinY = tileExtent.south;
            tileMaxX = tileExtent.east;
            tileMaxY = tileExtent.north;
        }

        const tileWidth = tileMaxX - tileMinX;
        const tileHeight = tileMaxY - tileMinY;

        // Transform vertices from local space to world space using collection matrix
        for (let i = 0, j = 0; i < vertices.length; i += 3, j += 2) {
            worldVertex.set(vertices[i], vertices[i + 1], vertices[i + 2]);
            worldVertex.applyMatrix4(context.collection.matrixWorld);

            // Compute UVs based on world position within tile extent
            uvs[j] = (worldVertex.x - tileMinX) / tileWidth;
            uvs[j + 1] = (worldVertex.y - tileMinY) / tileHeight;
        }
    } else {
        // Fallback to local bounding box if no collection context
        geom.computeBoundingBox();
        const bbox = geom.boundingBox;
        for (let i = 0, j = 0; i < vertices.length; i += 3, j += 2) {
            uvs[j] = (vertices[i] - bbox.min.x) / (bbox.max.x - bbox.min.x);
            uvs[j + 1] = (vertices[i + 1] - bbox.min.y) / (bbox.max.y - bbox.min.y);
        }
    }
    geom.setAttribute('featureUv', new THREE.BufferAttribute(uvs, 2));
    return new THREE.Mesh(geom, options.polygonMaterial);
}

/**
 * Created Instanced object from mesh
 *
 * @param {THREE.MESH} mesh Model 3D to instanciate
 * @param {*} count number of instances to create (int)
 * @param {*} ptsIn positions of instanced (array double)
 * @returns {THREE.InstancedMesh} Instanced mesh
 */
function createInstancedMesh(mesh, count, ptsIn) {
    const instancedMesh = new THREE.InstancedMesh(mesh.geometry, mesh.material, count);
    let index = 0;
    for (let i = 0; i < count * 3; i += 3) {
        const mat = new THREE.Matrix4();
        mat.setPosition(ptsIn[i], ptsIn[i + 1], ptsIn[i + 2]);
        instancedMesh.setMatrixAt(index, mat);
        index++;
    }

    instancedMesh.instanceMatrix.needsUpdate = true;

    return instancedMesh;
}

/**
 * Convert a {@link Feature} of type POINT to a Instanced meshes
 *
 * @param {Object} feature
 * @returns {THREE.Mesh} mesh or GROUP of THREE.InstancedMesh
 */
function pointsToInstancedMeshes(feature) {
    const ptsIn = feature.vertices;
    const count = feature.geometries.length;
    const modelObject = style.point.model.object;

    if (modelObject instanceof THREE.Mesh) {
        return createInstancedMesh(modelObject, count, ptsIn);
    } else if (modelObject instanceof THREE.Object3D) {
        const group = new THREE.Group();
        // Get independent meshes from more complexe object
        const meshes = separateMeshes(modelObject);
        meshes.forEach(mesh => group.add(createInstancedMesh(mesh, count, ptsIn)));
        return group;
    } else {
        throw new Error('The format of the model object provided in the style (layer.style.point.model.object) is not supported. Only THREE.Mesh or THREE.Object3D are supported.');
    }
}

/**
 * Convert a {@link Feature} to a Mesh
 * @param {Feature} feature - the feature to convert
 * @param {Object} options - options controlling the conversion
 *
 * @return {THREE.Mesh} mesh or GROUP of THREE.InstancedMesh
 */
function featureToMesh(feature, options) {
    if (!feature.vertices) {
        return;
    }

    let mesh;
    switch (feature.type) {
        case FEATURE_TYPES.POINT:
            if (style.point?.model?.object) {
                try {
                    mesh = pointsToInstancedMeshes(feature);
                    mesh.isInstancedMesh = true;
                } catch (e) {
                    mesh = featureToPoint(feature, options);
                }
            } else {
                mesh = featureToPoint(feature, options);
            }
            break;
        case FEATURE_TYPES.LINE:
            mesh = featureToLine(feature, options);
            break;
        case FEATURE_TYPES.POLYGON: {
            if (style.isExtruded()) {
                mesh = featureToExtrudedPolygon(feature, options);
            } else {
                mesh = featureToPolygon(feature, options);
            }

            // Store tileMesh info for debugging
            mesh.userData.tileMeshId = options.tileMesh?.id;
            mesh.userData.tileMeshLevel = options.tileMesh?.level;

            // No need for onBeforeRender - each tile has its own material with uniforms set in onBeforeCompile
            break;
        }
        default:
    }

    if (!mesh.isInstancedMesh) {
        mesh.material.vertexColors = true;
        mesh.material.color = new THREE.Color(0xffffff);
    }
    mesh.feature = feature;

    return mesh;
}

/**
 * @module Feature2Mesh
 */
export default {
    /**
     * Return a function that converts [Features]{@link module:GeoJsonParser} to Meshes. Feature collection will be converted to a
     * a THREE.Group.
     *
     * @param {Object} options - options controlling the conversion
     * @param {function} [options.batchId] - optional function to create batchId attribute.
     * It is passed the feature property and the feature index. As the batchId is using an unsigned int structure on 32 bits,
     * the batchId could be between 0 and 4,294,967,295.
     * @param {StyleOptions} [options.style] - optional style properties. Only needed if the convert is used without instancing
     * a layer beforehand.
     * @return {function}
     * @example <caption>Example usage of batchId with featureId.</caption>
     * view.addLayer({
     *     id: 'WFS Buildings',
     *     type: 'geometry',
     *     update: itowns.FeatureProcessing.update,
     *     convert: itowns.Feature2Mesh.convert({
     *         batchId: (property, featureId) => featureId,
     *     }),
     *     filter: acceptFeature,
     *     source,
     * });
     *
     * @example <caption>Example usage of batchId with property.</caption>
     * view.addLayer({
     *     id: 'WFS Buildings',
     *     type: 'geometry',
     *     update: itowns.FeatureProcessing.update,
     *     convert: itowns.Feature2Mesh.convert({
     *         batchId: (property, featureId) => property.house ? 10 : featureId,
     *         }),
     *     filter: acceptFeature,
     *     source,
     * });
     */
    convert(options = {}) {
        deprecatedFeature2MeshOptions(options);
        return function _convert(collection, extentDestination, tileMesh) {
            if (!collection) { return; }

            // Create materials once per layer (not per tile)
            if (!options.pointMaterial) {
                options.pointMaterial = ReferLayerProperties(new THREE.PointsMaterial(), this);
                options.lineMaterial = ReferLayerProperties(new THREE.LineBasicMaterial(), this);
            }

            // Create a NEW polygon material for THIS tile so each tile has independent uniforms
            const polygonMaterial = new THREE.MeshBasicMaterial();

            polygonMaterial.onBeforeCompile = (shader) => {
                // Setup elevation uniforms with proper defaults
                shader.uniforms.elevationTextures = { value: null };
                shader.uniforms.elevationOffsetScales = { value: [new THREE.Vector4(0, 0, 1, 1)] };
                shader.uniforms.elevationLayers = { value: [{
                    scale: 1.0,
                    bias: 0.0,
                    mode: 0,
                    zmin: 0.0,
                    zmax: 10000.0,
                }] };
                shader.uniforms.elevationTextureCount = { value: 0 };
                shader.uniforms.geoidHeight = { value: 0 };

                // Add elevation struct and functions to vertex shader
                const elevationPars = `
                        #define ELEVATION_RGBA 0
                        #define ELEVATION_DATA 1
                        #define ELEVATION_COLOR 2

                        struct Layer {
                            float scale;
                            float bias;
                            int mode;
                            float zmin;
                            float zmax;
                        };
                        attribute vec2 featureUv;   // your own UV, not Three.js's

                        uniform Layer elevationLayers[1];
                        uniform sampler2DArray elevationTextures;
                        uniform vec4 elevationOffsetScales[1];
                        uniform int elevationTextureCount;
                        uniform float geoidHeight;
                        uniform float offset;

                        highp float decode32(highp vec4 rgba) {
                            highp float Sign = 1.0 - step(128.0, rgba[0]) * 2.0;
                            highp float Exponent = 2.0 * mod(rgba[0], 128.0) + step(128.0, rgba[1]) - 127.0;
                            highp float Mantissa = mod(rgba[1], 128.0) * 65536.0 + rgba[2] * 256.0 + rgba[3] + float(0x800000);
                            highp float Result = Sign * exp2(Exponent) * (Mantissa * exp2(-23.0));
                            return Result;
                        }

                        float getElevationMode(vec2 uv, sampler2DArray tex, int mode) {
                            if (mode == ELEVATION_RGBA)
                                return decode32(texture(tex, vec3(uv, 0.0)).abgr * 255.0);
                            if (mode == ELEVATION_DATA || mode == ELEVATION_COLOR)
                                return texture(tex, vec3(uv, 0.0)).r;
                            return 0.;
                        }

                        float getElevation(vec2 uv, sampler2DArray tex, vec4 offsetScale, Layer layer) {
                            // Elevation textures are inverted along the y-axis
                            uv = vec2(uv.x, 1.0 - uv.y);
                            uv = uv * offsetScale.zw + offsetScale.xy;
                            float d = clamp(getElevationMode(uv, tex, layer.mode), layer.zmin, layer.zmax);
                            return d * layer.scale + layer.bias;
                        }
                    `;

                // Add elevation displacement to vertex transformation
                const elevationVertex = `
                        // #ifdef USE_UV
                        if (elevationTextureCount > 0) {
                            float elevation = getElevation(featureUv, elevationTextures, elevationOffsetScales[0], elevationLayers[0]);
                            // Use the normal attribute to displace vertices
                            // transformed += elevation * normalize(normal);
                            // transformed += 300.0 * normalize(normal);
                            transformed += elevation * vec3(0.0,0.0,1.0);
                            // transformed += elevation ;
                            // transformed += offset;
                            // transformed += 300.0;

                        }
                                                    // transformed += 300.0;

                        // #endif
                                // transformed += 300.0;

                    `;

                // Inject elevation functions before main()
                shader.vertexShader = shader.vertexShader.replace(
                    'void main() {',
                    `${elevationPars}\nvoid main() {`,
                );

                // Inject elevation displacement AFTER begin_vertex (which creates 'transformed')
                // but BEFORE project_vertex (which uses 'transformed' to calculate gl_Position)
                shader.vertexShader = shader.vertexShader.replace(
                    '#include <begin_vertex>',
                    `#include <begin_vertex>\n${elevationVertex}`,
                );

                polygonMaterial.userData.shader = shader;

                // Copy elevation uniforms from TileMesh material if available
                copyElevationUniforms(shader, tileMesh);

                // Debug logs
/*                if (shader.uniforms.elevationTextureCount.value > 0) {
                    console.log('✅ Tile shader compiled:', {
                        tileId: tileMesh?.id,
                        textureCount: shader.uniforms.elevationTextureCount.value,
                        textureUUID: shader.uniforms.elevationTextures.value?.[0]?.uuid?.slice(0, 8),
                    });
                } */
            };

            // Apply layer properties to this tile's material
            // const tilePolygonMaterial = ReferLayerProperties(polygonMaterial, this);
            options.polygonMaterial = ReferLayerProperties(polygonMaterial, this);

            // In the case we didn't instanciate the layer (this) before the convert, we can pass
            // style properties (@link StyleOptions) using options.style.
            // This is usually done in some tests and if you want to use Feature2Mesh.convert()
            // as in examples/source_file_gpx_3d.html.
            style = this?.style || (options.style ? new Style(options.style) :  defaultStyle);

            context.setCollection(collection);

            const features = collection.features;
            if (!features || features.length == 0) { return; }

            // Pass the tile-specific material and tileMesh to each feature
            // const meshes = features.map((feature) => {
            //     const featureOptions = {
            //         ...options,
            //         // polygonMaterial: tilePolygonMaterial, // Use THIS tile's material
            //         tileMesh
            //     };
            //     const mesh = featureToMesh(feature, featureOptions);
            //     mesh.layer = this;
            //     return mesh;
            // });
            const meshes = features.map((feature) => {
                options.tileMesh = tileMesh;
                const mesh = featureToMesh(feature, options);
                mesh.layer = this;
                return mesh;
            });
            const featureNode = new FeatureMesh(meshes, collection);

            tileMesh.layer.addEventListener('TERRAIN_TILE_LOADED', (tileMesh) => {
                console.log('test');
            });

 /*           const tms = tileMesh._tms.get('EPSG:4326')[0];
            const tileKey = `z${tms.zoom}r${tms.row}c${tms.col}`;
            if (tileMeshCountMap.get(tileKey)) {
                tileMeshCountMap.get(tileKey).i++;
            } else {
                const val = {
                    i: 1,
                    tileMesh,
                    featureMesh: featureNode,
                };
                tileMeshCountMap.set(tileKey, val);
            }
            console.log(tileMeshCountMap); */

            return featureNode;
        };
    },
};
