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
    destroy() {
        const m = Math.max(this.o.h, this.o.w);
        if (this.o.w <= 0 && this.o.h <= 0) return;
        if (this.o.w > 0) {
            this.o.w = this.o.w - (2 * (this.o.w / m));
            this.o.x += (this.o.w / m);
        }
        if (this.o.h > 0) {
            this.o.h = this.o.h - (2 * (this.o.h / m));
            this.o.y += (this.o.h / m);
        }
        window.requestAnimationFrame(this.destroy.bind(this))
    }
    _onClick() {
        this.color = '#ff0000';
    }
}