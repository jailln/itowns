// @ts-nocheck
import { Text } from 'troika-three-text';
import { Coordinates } from '@itowns/geographic';
import Style from 'Core/Style'
import * as THREE from "three";

/* TODO: gérer le sync:
   * faire un sync à chaque appel de méthode de la classe?
   * mettre un param sync dans les méthodes?
   * appeler sync manuellement tout le temps?
   * quid de l'interaction avec view.notifyChange()?
* */
/**
 * A 3D label based on troika-three.
 * Can be customized either by applying an itowns style configuration or directly
 * by updating troika-three Text attributes directly.
 * Note that Text extends THREE.Mesh
 */
export class Label3D extends Text {
    readonly isLabel3D: boolean;

    constructor() {
        super();
        this.isLabel3D = true;
        // Set shared style properties
        // Set position to the middle so label positioning is relative to its center which is commonly used for geospatial
        // labels. This can be changed by the user later on.
        this.anchorX = 'center';
        this.anchorY = 'middle';
        // Deactivate material depthTest so it is always rendered upfront (to avoid terrain collision for instance
        const material = new THREE.MeshBasicMaterial();
        material.depthTest = false;
        this.material = material;
    }

    setContent(content: string) {
        this.text = content;
    }

    /**
     * Applies iTowns Style to this Label. Don't forget to call view.notifyChange to update the view.
     * @param style
     */
    setStyle(style: Style): void {
        this.setContent(style?.text?.field);

        // Rotation: TODO: see if it stays here or not
        // text-rotation-alignment -> style.text.rotation
        // symbol-placement -> style.text.placement
        if (style.text.rotation === 'map') {
            if (style.text.placement === 'point') {
                // text should align east - west
            } else if (style.text.placement === 'line' || style.text.placement === 'line-center') {
                // aligns text x-axes with the line.
            }
        } else if (style.text.rotation === 'viewport') {
            // Produces glyphs whose x-axes are aligned with the x-axis of the viewport, regardless of the value of symbol-placement
        } else if (style.text.rotation === 'auto') {
            // TODO: understand the spec :grin:
        }

        // TODO: temp
        this.fontSize = 50;
        this.color = 0x9966FF;
    }

    /**
     * Places the label at the given position
     * @param position
     * @param viewCrs
     */
    setPosition(position: Coordinates, viewCrs: string): void {
        // TODO: improve perfs by not creating a new Coordinates object each time
        // const viewPos = position.as(viewCrs);
        // this.position.set(viewPos.x, viewPos.y, viewPos.z);
        // this.updateMatrixWorld(); // TODO: ensure mandatory
        // TODO make view crs optional
        this.position.set(position.x, position.y, position.z);
    }
}
