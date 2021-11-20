import { context } from "../canvas";
import { GameObject } from "./object";

export class GridItem extends GameObject {
    type = 0;

    constructor(options) {
        super(options);
        if (options && options.type) {
            this.type = options.type;
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