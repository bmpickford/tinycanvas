import { canvas, context } from "./canvas";
import { GameObject } from "./objects/index";
import { mix } from './interaction/index';

/** @module Game */

/**
 * @typedef {object} GameConfig
 * @property {any} initLevel - Function used to init the level. Called when a new level is requested
 * @property {object[]} puzzles - Array of puzzles to be used
 */

/**
 * @class
 * @constructor
 * @public
 */
export class Game {
    /**
     * @type {GameObject[]}
     * @public
     */
    objects = [];

    /**
     * @type {object[]}
     * @public
     */
    puzzles;

    /**
     * @type {object}
     * @public
     */
    currentPuzzle;

    /**
     * @type {number}
     */
    _puzzleIndex = 0;

    /**
     * @param {GameConfig} o 
     */
    constructor(o) {
        this.puzzles = o.puzzles;
        this.currentPuzzle = o.puzzles[0];
        this._loop();

        // Shortcut to next level
        document.addEventListener('keydown', (e) => e.key === 'n' && this.nextLevel());
    }

    add(config) {
        class _ extends mix(config.impl).with(...config.interactions || []) { };
        const _c = new _(this, config.options, config.name);
        _c.init();
        this.objects.push(_c);
    }

    /**
     * Initialised the game by calling initLevel.
     */
    _init() {
        this.objects.forEach((o) => o && o.init && o.init());
        this._printSummary();
    }

    /**
     * Clears the canvas
     */

    _clear() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    /**
     * Loops over all GameObjects and calls draw()
     */
    
    _draw() {
        for (let o of this.objects) {
            o.draw();
        }
    }

    /**
     * Main game loop
     */
    _loop() {
        this._clear();
        this._draw();
        window.requestAnimationFrame(this._loop.bind(this));
    }

    /**
     * Increments the level and inits with the next set of puzzles. Calls gameOver if no more puzzles are left
     */
    nextLevel() {
        this._puzzleIndex++;
        this.currentPuzzle = this.puzzles[this._puzzleIndex];
        if (this.currentPuzzle) {
            this._init();
        } else {
            this._destroyObjects();
        }
    }

    /**
     * Destroys objects
     */
    _destroyObjects() {
        for (let o of this.objects) {
            o.destroy();
        }
    }

    /**
     * Prints a summary of the level to the console
     */
    _printSummary() {
        console.table({
            'canvas': `${canvas.width}x${canvas.height}`,
            'grid': `${this.currentPuzzle.board.length}x${this.currentPuzzle.board[0].length}`,
            'block': `${canvas.width / this.currentPuzzle.board.length}x${canvas.height / this.currentPuzzle.board[0].length}`,
        });
    }
}