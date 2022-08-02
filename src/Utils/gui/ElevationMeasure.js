import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'ThreeExtended/renderers/CSS2DRenderer';
import { MAIN_LOOP_EVENTS } from 'Core/MainLoop';
import DEMUtils from '../DEMUtils';
import Widget from './Widget';

const DEFAULT_OPTIONS = {
    position: 'top',
    width: 50,
    height: 50,
    placeholder: 'Measure elevation',
};

const loader = new THREE.TextureLoader();
const POINT_TEXTURE = loader.load('sprites/circle.png'); // TODO: make it configurable and put it on the itowns sample data for the example (+ possibilité d'avoir une texture différente pour chaque point)

// TODO: make it configurable: allow to pass in options for the material or directly a PointsMaterial
const MOVE_POINT_MATERIAL = new THREE.PointsMaterial({
    color: 0xff0000,
    size: 10.0,
    map: POINT_TEXTURE,
    alphaTest: 0.5,
    sizeAttenuation: false,
    depthTest: false }); // TODO: For rendering the point above terrain -> useful ?

const CLICK_POINT_MATERIAL = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 10.0,
    map: POINT_TEXTURE,
    alphaTest: 0.5,
    sizeAttenuation: false,
    depthTest: false }); // TODO: For rendering the point above terrain -> useful ?

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
    // Internal fields
    #active;
    #view;
    #movePoint;
    #clickPoint;
    #labelRenderer;
    #labelObj;

    // Config options
    decimals = 2;

    /**
     *
     * @param {*} view the iTowns view in which the tool will measure elevation
     * @param {*} options The elevation measurement tool optional configuration
     * @param {HTMLElement} [options.parentElement=view.domElement] The parent HTML container of the div which
     *                                                              contains searchbar widgets.
     * @param {String} [options.position='top'] Defines which position within the
     *                                          `parentElement` the searchbar should be
                                                                        * displayed to. Possible values are `top`,
                                                                        * `bottom`, `left`, `right`, `top-left`,
                                                                        * `top-right`, `bottom-left` and `bottom-right`.
                                                                        * If the input value does not match one of
                                                                        * these, it will be defaulted to `top`.
    * @param {Number} [options.decimals=2] The number of decimals of the measured elevation
    */
    constructor(view, options = {}) {
        super(view, options, DEFAULT_OPTIONS);

        if (options.decimals !== null && options.decimals !== undefined && !isNaN(options.decimals) &&
            options.decimals >= 0) {
            this.decimals = options.decimals;
        }

        this.#view = view;
        this.#active = false;
        this.domElement.id = 'widgets-elevation';

        const activationButton = document.createElement('button');
        activationButton.id = 'widgets-elevation-activation-button';
        activationButton.classList.add('widget-button');
        activationButton.addEventListener('mousedown', this.onButtonClick.bind(this));
        this.domElement.appendChild(activationButton);
    }

    /**
     * Activate or deactivate tool
     */
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

    /**
     * Bind events of the tool and init labels stuff to display the elevation value
     */
    activateTool() {
        // Save function signatures with binding to be able to remove the eventListener in deactivateTool
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseLeftClick = this.onMouseLeftClick.bind(this);
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('mousedown', this.onMouseLeftClick);

        this.initLabel();
    }

    /**
     * Go back to a state before the tool has been activated: remove event listeners, points and labels
     */
    deactivateTool() {
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mousedown', this.onMouseLeftClick);

        this.removePoints();
        this.removeLabel();
    }

    /**
     * Create or update a point in the 3D scene that follows the mouse cursor
     * @param {Event} event mouse event
     */
    onMouseMove(event) {
        const worldCoordinates = this.#view.pickCoordinates(event);
        const pointVec3 = worldCoordinates.toVector3();
        const pointTypedArr = new Float32Array(pointVec3.toArray());

        if (!this.#movePoint) {
            const pointGeom = new THREE.BufferGeometry();
            pointGeom.setAttribute('position', new THREE.BufferAttribute(pointTypedArr, 3));
            this.#movePoint = new THREE.Points(pointGeom, MOVE_POINT_MATERIAL);
            this.#movePoint.renderOrder = 1; // TODO: For rendering the point above terrain -> useful ?
            this.#view.scene.add(this.#movePoint);
        } else {
            const pos = this.#movePoint.geometry.attributes.position;
            pos.array = pointTypedArr;
            pos.needsUpdate = true;
        }
        this.#view.notifyChange();
    }

    /**
     * Create or update a point where the user chose to display the elevation.
     * @param {Event} event mouse event
     */
    onMouseLeftClick(event) {
        // Verify it's a left click
        if (event.button !== 0) {
            return;
        }

        const worldCoordinates = this.#view.pickCoordinates(event);
        const pointVec3 = worldCoordinates.toVector3();
        const pointTypedArr = new Float32Array(pointVec3.toArray());

        if (!this.#clickPoint) {
            const pointGeom = new THREE.BufferGeometry();
            pointGeom.setAttribute('position', new THREE.BufferAttribute(pointTypedArr, 3));
            this.#clickPoint = new THREE.Points(pointGeom, CLICK_POINT_MATERIAL);
            this.#clickPoint.updateMatrixWorld();
            this.#clickPoint.renderOrder = 1; // TODO: For rendering the point above terrain -> useful ?
            this.#view.scene.add(this.#clickPoint);
        } else {
            const pos = this.#clickPoint.geometry.attributes.position;
            pos.array = pointTypedArr;
            pos.needsUpdate = true;
            this.#clickPoint.updateMatrixWorld();
        }

        this.#view.notifyChange(true);

        const elevation = DEMUtils.getElevationValueAt(this.#view.tileLayer, worldCoordinates);
        const elevationText = `${elevation.toFixed(this.decimals)} m`;
        this.updateLabel(elevationText, pointVec3);
    }

    /**
     * Initialize all elements to display the measured elevation as a label with threejs: a threejs css 2D renderer,
     * a callback to render the label at each frame, the div holding the label and a threejs label object.
     */
    initLabel() {
        this.#labelRenderer = new CSS2DRenderer();
        this.#labelRenderer.setSize(window.innerWidth, window.innerHeight);
        this.#labelRenderer.domElement.style.position = 'absolute';
        this.#labelRenderer.domElement.style.top = '0px';
        document.body.appendChild(this.#labelRenderer.domElement);

        // Store function signature with binding to this to be able to remove the frame requester when the tool is
        // disabled
        this.renderLabel = this.renderLabel.bind(this);
        this.#view.addFrameRequester(MAIN_LOOP_EVENTS.AFTER_RENDER, this.renderLabel);

        const labelDiv = document.createElement('div');
        labelDiv.classList.add('label'); // TODO: make it parametrable
        this.#labelObj = new CSS2DObject(labelDiv);
        this.#view.scene.add(this.#labelObj);

        this.onWindowResize = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.onWindowResize);
    }


    /**
     * Callback to render label (called at each frame)
     */
    renderLabel() {
        this.#labelRenderer.render(this.#view.scene, this.#view.camera.camera3D);
    }

    /**
     * Update label content and position
     * @param {String} textContent the new text of the label
     * @param {Vector3} position the new position of the label
     */
    updateLabel(textContent, position) {
        this.#labelObj.element.textContent = textContent;
        this.#labelObj.position.copy(position);
        this.#labelObj.translateZ(30); // TODO: depends from point size and crs and zoom? : à faire en css plutot? -addLabel> translate en pixels en fonction size point?
        this.#labelObj.updateMatrixWorld();
    }

    /**
     * Remove label stuff: Div holding the labels, the render label function callback and the threejs label object.
     * Also initialize label related class properties to null.
     */
    removeLabel() {
        document.body.removeChild(this.#labelRenderer.domElement);
        this.#labelRenderer = null;
        this.#view.removeFrameRequester(MAIN_LOOP_EVENTS.AFTER_RENDER, this.renderLabel);
        this.#view.scene.remove(this.#labelObj);
        this.#labelObj = null;

        this.#view.notifyChange();
    }

    /**
     * Resize label renderer size
     */
    onWindowResize() {
        this.#labelRenderer.setSize(window.innerWidth, window.innerHeight);
    }

    /**
     * Remove points objects, geometries, materials and textures and reinitialize points.
     */
    removePoints() {
        const movePointGeom = this.#movePoint.geometry;
        const clickPointGeom = this.#clickPoint.geometry;
        this.#view.scene.remove(this.#movePoint);
        this.#view.scene.remove(this.#clickPoint);
        this.#movePoint = null;
        this.#clickPoint = null;
        movePointGeom.dispose();
        clickPointGeom.dispose();
        MOVE_POINT_MATERIAL.dispose();
        CLICK_POINT_MATERIAL.dispose();
        POINT_TEXTURE.dispose();
    }
}

export default ElevationMeasure;
