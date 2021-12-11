import { checkCollision } from './utils/collision';
import * as Animations from './animation/index';
import * as Interactions from './interaction/movement';

/** @module CLH */

export const events = {
    START: 'START',
}

export const gameobjectevents = {
    COLLISION: 'COLLISION',
}

class Listener {
    constructor (type, callback) {
        this.type = type;
        this.callback = callback;
    }
}

class GameObject {
    x = 0;
    y = 0;
    delta = 0;
    h = 0;
    w = 0;
    r = 0;
    collision = false;
    _prevX = 0;
    _prevY = 0;
    constructor(game, opts) {
        this.game = game;
        this.opts = opts;
        this.id = `${opts?.name || ''}_${Math.floor(Math.random() * 1000000)}`

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
        this.opts.render.call(this);
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
        this._sendEvent(events.START);
        this._loop();
    }
    on(key, callback) {
        this._listeners.push(new Listener(key, callback));
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
 * 
 * @param {*} opts 
 * @returns {Game}
 */
function create(opts) {
    return new Game(opts);
}

function Circle() {
    this.game.context.beginPath();
    this.game.context.arc(this.x + (this.r / 2), this.y + (this.r / 2), this.r / 2, 0, Math.PI * 2);
    this.game.context.stroke();
}

function Rectangle() {
    this.game.context.strokeRect(this.x, this.y, this.w, this.h);
}

export default {
    create,
    events,
    Renderers: {
        Circle,
        Rectangle,
    },
    Interactions,
    Animations,
};
