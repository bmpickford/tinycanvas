export class GameObject {
    x = 0;
    y = 0;
    height = 100;
    width = 100;
    radius = 100;

    constructor(options) {
        if (options) {
            const { x, y, height, width, radius } = options;
            if (x) this.x = x;
            if (y) this.y = y;
            if (height) this.height = height;
            if (width) this.width = width;
            if (radius) this.radius = radius;
        }
    }
}