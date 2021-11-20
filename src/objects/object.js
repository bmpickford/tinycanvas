export class GameObject {
    options = {
        h: 100,
        w: 100,
        deltaX: 100,
        deltaY: 100,
        x: 0,
        y: 0,
    };

    constructor(options) {
        this.options = {...this.options, ...options};
    }
}