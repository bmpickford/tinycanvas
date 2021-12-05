import { context } from "../../lib/canvas";
import Lib from '../../lib/index';

export class GridItem extends Lib.mix(Lib.GameObject).with(Lib.OnClickMixin) {
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
    destroy() {
        Lib.animate(this, {
            h: 0,
            w: 0,
            x: 0,
            frames: 50,
        }, 'sine');
    }
    _onClick() {
        this.color = '#ff0000';
    }
}