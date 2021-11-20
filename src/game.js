import { canvas, context } from "./canvas";

export class Game {
    objects;
    puzzles;
    currentPuzzle;
    constructor(options) {
        if (options.objects) this.objects = options.objects;
        if (options.puzzles) {
            this.puzzles = options.puzzles;
            this.currentPuzzle = options.puzzles[0];
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