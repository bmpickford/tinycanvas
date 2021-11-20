import { context } from '../canvas';
import { GameObject } from './object';

/**
 * @class Face
 * @param {Object} options
 */
export class Face extends GameObject {

    delta = 100;

    constructor(options) {
        super(options);
        if (options && options.delta) {
            this.delta = options.delta;
        }
    }

    draw() {
        context.beginPath();
        context.arc(this.x + (this.delta / 2), this.y + (this.delta / 2), this.radius / 2, 0, Math.PI * 2);
        context.stroke();
    }

    clone() {
        return new Face({
            x: this.x,
            y: this.y,
            radius: this.radius,
            delta: this.delta
        });
    }
}