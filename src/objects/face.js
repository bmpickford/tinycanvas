import { context } from '../canvas';
import { GameObject } from './object';

/**
 * @class Face
 * @param {Object} options
 */
export class Face extends GameObject {

    draw() {
        const { x, y, delta, radius } = this.options;
        context.beginPath();
        context.arc(x + (delta / 2), y + (delta / 2), radius / 2, 0, Math.PI * 2);
        context.stroke();
    }

    clone() {
        return new Face(this.options);
    }
}