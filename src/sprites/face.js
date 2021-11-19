import { context } from '../canvas';

/**
 * @class Face
 * @param {Object} options
 */
export class Face {
    x = 0;
    y = 0;
    size = 75;
    delta = 20;

    constructor(options) {
        if (options) {
            const { x, y, size, delta } = options;
            if (x) this.x = x;
            if (y) this.y = y;
            if (size) this.size = size;
            if (delta) this.delta = delta;
        }
        
        this.draw();
    }

    draw() {
        context.beginPath();
        // Face outline
        context.arc(this.x + this.size, this.y + this.size, 50, 0, Math.PI * 2, true);
        
        // Mouth (clockwise)
        context.moveTo(this.x + 110, this.y + this.size);
        context.arc(this.x + this.size, this.y + this.size, 35, 0, Math.PI, false);  
        
        // Left eye
        context.moveTo(this.x + 65, this.y + 65);
        context.arc(this.x + 60, this.y + 65, 5, 0, Math.PI * 2, true);

        // Right eye
        context.moveTo(this.x + 95, this.y + 65);
        context.arc(this.x + 90, this.y + 65, 5, 0, Math.PI * 2, true); 
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