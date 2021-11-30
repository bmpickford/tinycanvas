export class GameObject {
    o = {
        h: 100,
        w: 100,
        deltaX: 100,
        deltaY: 100,
        x: 0,
        y: 0,
    };

    constructor(o) {
        this.o = {...this.o, ...o};
    }
}