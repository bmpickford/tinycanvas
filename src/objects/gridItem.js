import { context } from "../canvas";
import { GameObject } from "./object";

export class GridItem extends GameObject {
    color;
    draw() {
        const { type, x, y, width, height } = this.options;
        if (this.color) {
            const _originalFillStyle = context.fillStyle;
            context.fillStyle = this.color;
            context.fillRect(x, y, width, height);
            context.fillStyle = _originalFillStyle;
            return;
        }
        if (type === 0) {
            context.strokeRect(x, y, width, height);
        } else {
            context.fillRect(x, y, width, height);
        }
    }
    clone() {
        return new GridItem(this.options);
    }
    onClick() {
        this.color = '#ff0000';
    }
}