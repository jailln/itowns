import Style from 'Core/Style';
import Widget from './Widget';

const DEFAULT_OPTIONS = {
    width: 200,
    position: 'top-right',
};


/**
 * A widget for dynamic 3DTiles styling
 *
 * To use it, you need to link the widgets' stylesheet to your html webpage. This stylesheet is included in
 * [itowns bundles](https://github.com/iTowns/itowns/releases) if you downloaded them, or it can be found in
 * `node_modules/itowns/examples/css` if you installed iTowns with npm. Otherwise, it can be found at
 * [this link](https://raw.githubusercontent.com/iTowns/itowns/master/examples/css/widgets.css). See
 * [this example](http://www.itowns-project.org/itowns/examples/#widgets_3dtiles_style) for more details.
 *
 * @extends Widget
 *
 * @property    {HTMLElement}   domElement      An html div containing the minimap.
 * @property    {HTMLElement}   parentElement   The parent HTML container of `this.domElement`.
 */
class C3DTilesStyle extends Widget {
/**
   *
   * @param {View} view view
   * @param {*} options options
   */
    constructor(view, options) {
        super(view, options, DEFAULT_OPTIONS);

        this.domElement.onclick = event => event.stopImmediatePropagation();

        // create select of the C3DTilesLayers
        const selectC3DTilesLayer = document.createElement('select');
        this.domElement.appendChild(selectC3DTilesLayer);

        /** @type {Map<HTMLElement, HTMLElement>} */
        const selectOptionLayerContent = new Map();

        const updateSelectedLayer = () => {
            for (const [sO, lC] of selectOptionLayerContent) {
                lC.hidden = sO !== selectC3DTilesLayer.selectedOptions[0];
            }
        };
        selectC3DTilesLayer.onchange = updateSelectedLayer;

        view.getLayers().filter(el => el.isC3DTilesLayer === true).forEach((c3DTilesLayer) => {
            const selectC3DTilesLayerOption = document.createElement('option');
            selectC3DTilesLayerOption.innerText = c3DTilesLayer.name;
            selectC3DTilesLayer.add(selectC3DTilesLayerOption);

            const layerContent = document.createElement('div');
            this.domElement.appendChild(layerContent);

            // link select option to layer content
            selectOptionLayerContent.set(selectC3DTilesLayerOption, layerContent);
        });

        updateSelectedLayer();
    }

    static get MAX_SELECT_VALUE() {
        return 10;
    }
}

export default C3DTilesStyle;
