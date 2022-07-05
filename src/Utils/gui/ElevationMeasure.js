import * as THREE from 'three';
import Widget from './Widget';

const DEFAULT_OPTIONS = {
    position: 'top',
    width: 50,
    height: 50,
    placeholder: 'Measure elevation',
};

// TODO: make this configurable
const MOVE_POINT_MATERIAL = new THREE.PointsMaterial({ color: 0xff0000 });
const CLICK_POINT_MATERIAL = new THREE.PointsMaterial({ color: 0xffffff });

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
            // this.activateTool();
        } else {
            document.getElementById('widgets-elevation-activation-button').classList.remove('widget-button-active');
            // this.deactivateTool();
        }
    }

    activateTool() {
        // Create points
        this.#movePoint = new THREE.Points(null, MOVE_POINT_MATERIAL);
        this.#clickPoint = new THREE.Points(null, CLICK_POINT_MATERIAL);

        // Setup events
        this.domElement.addEventListener('mousedown', this.onMouseLeftClick);
        this.domElement.addEventListener('mousemove', this.onMouseMove);
    }

    deactivateTool() {
        // remove events
        // remove points
    }

    onMouseLeftClick(event) {
        // Verify it's a left click
        if (event.button !== 0) {
            return;
        }

        const picked = this.#view.pickObjectsAt(event);
        if (picked.length === 0) {
            console.warn('[[Elevation Measure Widget] No objects found under cursor. Are you trying to measure the sky?');
            return;
        }

        console.log('tmp');

        // conversion 4978
        // Set position point
        // display label
    }

    onMouseMove(event) {
        // raycast nécessaire ? OU on peut afficher le point direct sur l'écran en supperposition à partir des coordonnées screen?
    }
}

export default ElevationMeasure;
