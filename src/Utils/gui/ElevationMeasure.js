import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'ThreeExtended/renderers/CSS2DRenderer';
import LabelLayer from 'Layer/LabelLayer';
import Style from 'Core/Style';
import { FeatureCollection, FEATURE_TYPES } from 'Core/Feature';
import FileSource from 'Source/FileSource';
import { MAIN_LOOP_EVENTS } from 'Core/MainLoop';
import DEMUtils from '../DEMUtils';
import Widget from './Widget';

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
    #labelRenderer;
    #labelObj;

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

        // Setup threejs label2D renderer
        this.initLabel();
    }

    deactivateTool() {
        // remove event
        // remove points
        // remove label stuff
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
        this.updateLabel(elevationText, worldCoordinates.toVector3());
    }

    initLabel() {
        this.#labelRenderer = new CSS2DRenderer();
        this.#labelRenderer.setSize(window.innerWidth, window.innerHeight);
        this.#labelRenderer.domElement.style.position = 'absolute';
        this.#labelRenderer.domElement.style.top = '0px';
        document.body.appendChild(this.#labelRenderer.domElement);

        function renderLabel() {
            this.#labelRenderer.render(this.#view.scene, this.#view.camera.camera3D);
        }
        this.#view.addFrameRequester(MAIN_LOOP_EVENTS.AFTER_RENDER, renderLabel.bind(this));

        const labelDiv = document.createElement('div');
        labelDiv.classList.add('label'); // TODO: make it parametrable
        this.#labelObj = new CSS2DObject(labelDiv);
        this.#view.scene.add(this.#labelObj);
    }

    updateLabel(textContent, position) {
        this.#labelObj.element.textContent = textContent;
        this.#labelObj.position.copy(position);
        this.#labelObj.translateZ(30); // TODO: depends from point size and crs and zoom? : à faire en css plutot? -addLabel> translate en pixels en fonction size point?
        this.#labelObj.updateMatrixWorld();
    }
}

export default ElevationMeasure;
