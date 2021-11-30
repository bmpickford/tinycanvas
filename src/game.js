import { canvas, context } from "./canvas";

export class Game {
    objects;
    puzzles;
    currentPuzzle;
    constructor(o) {
        if (o.objects) this.objects = o.objects;
        if (o.puzzles) {
            this.puzzles = o.puzzles;
            this.currentPuzzle = o.puzzles[0];
        }
        this.addGameToObjects();
        this.loop();
    }

    clear() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    draw() {
        for (let o of this.objects) {
            o.draw();
        }
    }
    
    loop() {
        this.clear();
        this.draw();
        window.requestAnimationFrame(this.loop.bind(this));
    }
    addGameToObjects() {
        for (let o of this.objects) {
            o.game = this;
        }
    }
}