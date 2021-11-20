import { context } from "../canvas";

export class GridItem {
    width = 100;
    height = 100;
    x = 0;
    y = 0;
    type = 0;

    constructor(options) {
        if (options) {
            const { x, y, size, type } = options;
            if (x) this.x = x;
            if (y) this.y = y;
            if (size) this.size = size;
            if (type) this.type = type;
        }
    }
    draw() {
        if (this.type === 0) {
            context.strokeRect(this.x, this.y, this.width, this.height);
        } else {
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}