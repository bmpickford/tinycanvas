import { GameObject } from './gameobject';

/**
 * Game options
 * 
 * @public
 * @typedef {Object} GameOptions
 * @property {string} [canvasElement="game"] ID of custom canvas element 
 */

/**
 * Listener
 * 
 * @public
 * @typedef {Object} Listener
 * @property {(START)} type - Listener key
 * @property {*} callback - Callback
 */


export class Game {
    _images = [];

    _sounds = [];

    /**
     * @type {Listener[]}
     */
    _listeners = [];

    _objects = [];
    level = 0;
    _levels = [];
    constructor(opts) {
        this.opts = opts;
        this.canvas = document.getElementById(opts?.canvasElement || 'game');
        this.context = this.canvas.getContext('2d');
        this._levels = opts?.levels || [];
    }

    add = {
        /**
         * 
         * @param {import('./gameobject.js').GameObjectOptions} opts - Options to pass through to the game object
         * @returns {import('./gameobject.js').GameObject}
         */
        object: (opts) => {
            const o = new GameObject(this, opts);
            this._objects.push(o);
            return o;
        },
        /**
         * 
         * @param {string} key - Image key. Must be unique
         * @param {string} src - Image source
         * @returns {HTMLImageElement}
         */
        image: (key, src) => {
            const image = new Image();
            image.id = key;
            image.src = src;
            this._images.push(image);
            return image;
        },
        /**
         * 
         * @param {string} key - Sound key. Must be unique
         * @param {string} src - Sound source
         * @returns {HTMLAudioElement}
         */
        sound: (key, src) => {
            const sound = new Audio();
            sound.id = key;
            sound.src = src;
            this._sounds.push(sound);
            return sound;
        }
    }
    /**
     * Starts the main game loop
     * 
     * @returns {void}
     */
    start() {
        if (this._images.some((i) => !i.complete)) {
            setTimeout(this.start.bind(this), 100);
            return;
        }
        this._sendEvent('START');
        this._loop();
    }
    /**
     * Add listener to events
     * 
     * @param {(START|END)} type 
     * @param {function} callback 
     */
    on(type, callback) {
        this._listeners.push({ type, callback });
    }
    /**
     * Gets the currently registered game objects
     * 
     * @returns {import('./gameobject.js').GameObject[]}
     */
    getObjects() {
        return this._objects;
    }
    /**
     * Gets the levels
     * 
     * @returns {any[]}
     */
    getLevel() {
        return this._levels[this.level];
    }
    /**
     * 
     * @param {string} key - Image key
     * @returns {HTMLImageElement}
     */
    getImage(key) {
        return this._images.find((i) => i.id === key);
    }
    /**
     * Increments the level and calls init on all gameObjects
     * 
     * @returns {void}
     */
    nextLevel() {
        this.level++;
        if (this.level >= this._levels.length) {
            return this._sendEvent('END');
        }
        this._init();
    }
    _init() {
        for (let o of this._objects) {
            o.opts.init(o, this._levels[this.level]);
        }
    }
    _loop() {
        this._clear();
        this._render();
        window.requestAnimationFrame(this._loop.bind(this));
    }
    _clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    _render() {
        for (let o of this._objects) {
            o.render();
        }
    }
    _sendEvent(type) {
        for(let e of this._listeners) {
            if (e.type === type) e.callback();
        }
    }
}