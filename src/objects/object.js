export class GameObject {
    options = {
        height: 100,
        width: 100,
        radius: 75,
        delta: 100,
    };

    constructor(options) {
        this.options = {...this.options, ...options};
    }
}