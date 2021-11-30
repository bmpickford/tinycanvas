export class GameObject {
    o = {
        h: 0,
        w: 0,
        x: 0,
        y: 0,
    };

    constructor(game, o) {
        this.game = game;
        this.o = {...this.o, ...o};
    }
}