import { checkCollision } from './utils/collision.js';
import * as Animations from './animation/index.js';
import * as Interactions from './interaction/movement.js';

/** @module CLH */

/**
 * Game options
 * 
 * @public
 * @typedef {Object} GameOptions
 * @property {string} [canvasElement="game"] ID of custom canvas element 
 */

/**
 * GameObject options
 * 
 * @public
 * @typedef {Object} GameObjectOptions
 * @property {*} init Function called on initilisation
 * @property {*} render Function called on every frame
 * @property {boolean | GameObject[]} collision true if callback regardless of GameObject, or an array of GameObjects to specifically collide with
 * @property {*} onCollision collision callback
 * @property {Array} interactions array of interaction functions to initilise. See CLH.Interactions for defaults
 */

/**
 * Listener
 * 
 * @public
 * @typedef {Object} Listener
 * @property {gameevents} type - Listener key
 * @property {*} callback - Callback
 */


/**
 * @readonly
 * @enum {string} 
 */
const gameevents = {
    START: 'START',
}


/**
 * This is the base object.
 * 
 * @public
 */
export class GameObject {
    x = 0;
    y = 0;
    delta = 0;
    h = 0;
    w = 0;
    r = 0;
    collision = false;
    _prevX = 0;
    _prevY = 0;

    /**
     * 
     * @param {Game} game 
     * @param {GameObjectOptions} opts 
     */
    constructor(game, opts) {
        this.game = game;
        this.opts = opts;
        this.id = `${opts?.name || ''}_${Math.floor(Math.random() * 100)}`

        if (opts?.collision) {
            this.collision =  true;
            if (Array.isArray(opts.collision)) this._collisionObjects = opts.collision;
        }

        if (this.opts?.init) this.opts.init(this);
        if (this.opts?.interactions) this.opts.interactions.forEach((i => i.init(this)));
    }
    render() {
        if (this.collision && (this.x !== this._prevX || this.y !== this._prevY)) {
            const collision = this._checkCollisions();
            if (collision && this.opts.onCollision) {
                this.opts?.onCollision(this, collision);
            } else if (collision) {
                this.x = this._prevX;
                this.y = this._prevY;
                return;
            }
            this._prevX = this.x;
            this._prevY = this.y;
        }
        this.opts.render(this);
    }
    _checkCollisions() {
        const objs = this._collisionObjects?.length > 0
            ? this._collisionObjects
            : this.game.getObjects().filter((g) => g.id !== this.id && g.collision);
        for(let o of objs) {
            if (checkCollision(this, o)) {
                return o;
            }
        }
        return false;
    }
}

class Game {
    _images = [];

    _sounds = [];

    /**
     * @type {Listener[]}
     */
    _listeners = [];

    _objects = [];

    constructor(opts) {
        this.opts = opts;
        this.canvas = document.getElementById(opts?.canvasElement || 'game');
        this.context = this.canvas.getContext('2d');
    }

    add = {
        object: (opts) => {
            const o = new GameObject(this, opts);
            this._objects.push(o);
            return o;
        },
        image: (key, src) => {
            const image = new Image();
            image.id = key;
            image.src = src;
            this._images.push(image);
            return image;
        },
        sound: (key, src) => {
            const sound = new Audio();
            sound.id = key;
            sound.src = src;
            this._sounds.push(sound);
            return sound;
        }
    }
    start() {
        if (this._images.some((i) => !i.complete)) {
            setTimeout(this.start.bind(this), 100);
            return;
        }
        this._sendEvent(gameevents.START);
        this._loop();
    }
    on(type, callback) {
        this._listeners.push({ type, callback });
    }
    getObjects() {
        return this._objects;
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

/**
 * Creates a game
 *
 * @function
 * @property {GameOptions} opts 
 */
function create(opts) {
    return new Game(opts);
}

/**
 * @public
 * @module CLH
 * @property {create} create - Creates a game
 * @property {gameevent} gameevent - Game events enum
 * @property {gameevent} gameevent - Game events enum
 * @property {Object} Interactions - Interactions
 * @property {Aniamations} Animations - Animations
 */
 export default {
    create,
    gameevents,
    Interactions,
    Animations,
};
