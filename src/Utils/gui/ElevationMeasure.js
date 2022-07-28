import * as THREE from 'three';
import LabelLayer from '../../Layer/LabelLayer';
import Style from '../../Core/Style';
import DEMUtils from '../DEMUtils';
import Widget from './Widget';
import { FeatureCollection, FEATURE_TYPES } from '../../Core/Feature';
import Coordinates from '../../Core/Geographic/Coordinates';
import FileSource from '../../Source/FileSource';

const DEFAULT_OPTIONS = {
    position: 'top',
    width: 50,
    height: 50,
    placeholder: 'Measure elevation',
};

// TODO: make this configurable
const loader = new THREE.TextureLoader();
const texture = loader.load('sprites/circle.png'); // TODO: make it configurable and put it on the itowns sample data for the example

// TODO: make it configurable: allow to pass in options for the material or directly a PointsMaterial
const MOVE_POINT_MATERIAL = new THREE.PointsMaterial({
    color: 0xff0000,
    size: 10.0,
    map: texture,
    alphaTest: 0.5,
    sizeAttenuation: false,
    depthTest: false }); // TODO: For rendering the point above terrain -> useful ?

const CLICK_POINT_MATERIAL = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 10.0,
    map: texture,
    alphaTest: 0.5,
    sizeAttenuation: false,
    depthTest: false }); // TODO: For rendering the point above terrain -> useful ?

const labelLayerID = 'elevation-measure';

// TODO: rendre paramétrable ce qui trigger la mesure d'élévation (e.g. touche, click)

/**
 * TODO DESC
 *
 * @extends Widget
 *
 * @property    {HTMLElement}   domElement      An html div containing the searchbar.
 * @property    {HTMLElement}   parentElement   The parent HTML container of `this.domElement`.
 */
class ElevationMeasure extends Widget {
    #active; // TODO: is it mandatory ?
    #view;
    #movePoint;
    #clickPoint;

    /**
     *
     * @param {*} view the iTowns view in which the tool will measure elevation
     * @param {*} options The elevation measurement tool optional configuration
     * @param {HTMLElement} [options.parentElement=view.domElement] The parent HTML container of the div which
     *                                                              contains searchbar widgets.
     * @param {string} [options.position='top'] Defines which position within the
     *                                          `parentElement` the searchbar should be
                                                                        * displayed to. Possible values are `top`,
                                                                        * `bottom`, `left`, `right`, `top-left`,
                                                                        * `top-right`, `bottom-left` and `bottom-right`.
                                                                        * If the input value does not match one of
                                                                        * these, it will be defaulted to `top`.
    */
    constructor(view, options = {}) {
        super(view, options, DEFAULT_OPTIONS);

        this.#view = view;
        this.#active = false;
        this.domElement.id = 'widgets-elevation';

        const activationButton = document.createElement('button');
        activationButton.id = 'widgets-elevation-activation-button';
        activationButton.classList.add('widget-button');
        activationButton.addEventListener('mousedown', this.onButtonClick.bind(this));
        this.domElement.appendChild(activationButton);
    }

    onButtonClick() {
        this.#active = !this.#active;
        if (this.#active) {
            document.getElementById('widgets-elevation-activation-button').classList.add('widget-button-active');
            this.activateTool();
        } else {
            document.getElementById('widgets-elevation-activation-button').classList.remove('widget-button-active');
            this.deactivateTool();
        }
    }

    activateTool() {
        // Setup events
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
        window.addEventListener('mousedown', this.onMouseLeftClick.bind(this));
        
        // TODO: create points with visible = false
    }

    deactivateTool() {
        // remove event
        // remove points
    }

    onMouseMove(event) {
        const worldCoordinates = this.#view.pickCoordinates(event);

        const pointVertices = worldCoordinates.toVector3().toArray();
        const typedPointVertices = new Float32Array(pointVertices);

        if (!this.#movePoint) {
            const pointGeom = new THREE.BufferGeometry();
            pointGeom.setAttribute('position', new THREE.BufferAttribute(typedPointVertices, 3));
            this.#movePoint = new THREE.Points(pointGeom, MOVE_POINT_MATERIAL);
            this.#movePoint.renderOrder = 1; // TODO: For rendering the point above terrain -> useful ?
            this.#view.scene.add(this.#movePoint);
        } else {
            const pos = this.#movePoint.geometry.attributes.position;
            pos.array = typedPointVertices;
            pos.needsUpdate = true;
        }
        this.#view.notifyChange();
    }

    onMouseLeftClick(event) {
        // Verify it's a left click
        if (event.button !== 0) {
            return;
        }

        const worldCoordinates = this.#view.pickCoordinates(event);

        const pointVertices = worldCoordinates.toVector3().toArray();
        const typedPointVertices = new Float32Array(pointVertices);

        if (!this.#clickPoint) {
            const pointGeom = new THREE.BufferGeometry();
            pointGeom.setAttribute('position', new THREE.BufferAttribute(typedPointVertices, 3));
            this.#clickPoint = new THREE.Points(pointGeom, CLICK_POINT_MATERIAL);
            this.#clickPoint.updateMatrixWorld();
            this.#clickPoint.renderOrder = 1; // TODO: For rendering the point above terrain -> useful ?
            this.#view.scene.add(this.#clickPoint);
        } else {
            const pos = this.#clickPoint.geometry.attributes.position;
            pos.array = typedPointVertices;
            pos.needsUpdate = true;
            this.#clickPoint.updateMatrixWorld();
        }

        this.#view.notifyChange(true);

        const elevation = DEMUtils.getElevationValueAt(this.#view.tileLayer, worldCoordinates);
        const elevationText = `${elevation.toFixed(2)} m`; // TODO: make the number of decimals configurable + what about the unit ?
        this.addLabel(elevationText, worldCoordinates);
    }

    // TODO: ongoing: doit on utiliser le label layer ou afficher direct un label ?
    // Doit on créer des helpers pour créer des layers simple ? Quid de la MAJ dess
    // positions des objets du labellayer ?
    addLabel(textContent, position) {
        const labelDiv = document.createElement('div');
        labelDiv.classList.add('label'); // TODO: make it parametrable
        labelDiv.textContent = textContent;

        const features = new FeatureCollection({
            crs: this.#view.tileLayer.extent.crs,
        });

        // create new feature
        const feature = features.requestFeatureByType(FEATURE_TYPES.POINT);

        // add geometries to feature
        const geometry = feature.bindNewGeometry();
        geometry.startSubGeometry(1, feature);
        geometry.pushCoordinates(position, feature);
        geometry.properties.position = position;

        geometry.updateExtent();
        feature.updateExtent(geometry);
        features.updateExtent(feature.extent);

        const source = new FileSource({ features });

        const labelLayer = new LabelLayer('elevation-measure', {
            source,
            domElement: labelDiv,
            style: new Style({
                text: { anchor: [-0.8, -1] },
            }),
        });

        this.#view.addLayer(labelLayer);
    }
}

export default ElevationMeasure;
