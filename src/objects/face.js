import { context } from '../canvas';

/**
 * @class Face
 * @param {Object} options
 */
export class Face {
    x = 100;
    y = 100;
    size = 75;
    delta = 100;

    constructor(options) {
        if (options) {
            const { x, y, size, delta } = options;
            if (x) this.x = x;
            if (y) this.y = y;
            if (size) this.size = size;
            if (delta) this.delta = delta;
        }
    }

    draw() {
        context.beginPath();
        context.arc(this.x + (this.delta / 2), this.y + (this.delta / 2), this.size / 2, 0, Math.PI * 2);
        context.stroke();
    }

    clone() {
        return new Face({
            x: this.x,
            y: this.y,
            size: this.size,
            delta: this.delta
        });
    }
}