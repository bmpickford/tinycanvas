import { context } from "../canvas";
import { GameObject } from "./object";
import { mix, OnClickMixin } from '../interaction/index';

export class GridItem extends mix(GameObject).with(OnClickMixin) {
    name = "griditem"
    draw() {
        const { type, x, y, w, h } = this.o;
        if (this.color) {
            const _originalFillStyle = context.fillStyle;
            context.fillStyle = this.color;
            context.fillRect(x, y, w, h);
            context.fillStyle = _originalFillStyle;
            return;
        }
        if (type === 0) {
            context.strokeRect(x, y, w, h);
        } else {
            context.fillRect(x, y, w, h);
        }
    }
    _onClick() {
        this.color = '#ff0000';
    }
}