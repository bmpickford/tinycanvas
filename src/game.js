import { canvas, context } from "./canvas";

export class Game {
    objects;
    puzzles;
    currentPuzzle;
    _puzzleIndex = 0;
    constructor(o) {
        this.initLevel = o.initLevel; 
        this.puzzles = o.puzzles;
        this.currentPuzzle = o.puzzles[0];
        this.init();
        this.loop();

        // Shortcut to next level
        document.addEventListener('keydown', (e) => e.key === 'n' && this.nextLevel());
    }
    init() {
        this.objects = this.initLevel(this);
        this.objects.forEach((o) => o && o.init && o.init());
        this._printSummary();
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
    nextLevel() {
        this._puzzleIndex++;
        this.currentPuzzle = this.puzzles[this._puzzleIndex];
        this.destroyObjects();
        if (this.currentPuzzle) {
            this.init();
        }
    }
    destroyObjects() {
        for (let o of this.objects) {
            o.destroy();
        }
    }
    _printSummary() {
        console.table({
            'canvas': `${canvas.width}x${canvas.height}`,
            'grid': `${this.currentPuzzle.board.length}x${this.currentPuzzle.board[0].length}`,
            'block': `${canvas.width / this.currentPuzzle.board.length}x${canvas.height / this.currentPuzzle.board[0].length}`,
        });
    }
}