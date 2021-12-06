/** @module Lib/objects */

/**
 * @typedef {Object} GameObjectOptions
 * @property {number} h - Height
 * @property {number} w - Width
 * @property {number} x - X Coordinate
 * @property {number} y - Y Coordinate
 */

/**
 * @typedef {Object} CreateGameObject
 * @property {GameObjectConfig} options
 * @property {any[]} interactions - Array of interaction mixins to attach
 */

/**
 * @class
 * Default GameObject class
 */
export class GameObject {
    /**
     * @constructor
     * @param {import('../game').Game} game
     * @param {GameObjectOptions} o 
     * @param {name} [name]
     */
    constructor(game, o, name) {
        this.game = game;
        this.o = o;
        this.name = name;
        this.id = this.name + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    }
}

/**
 * @class
 * Image GameObject class
 */
export class ImageGameObject extends GameObject {
    image = new Image();
    loaded = false;

    constructor(game, o, name) {
        super(game, o, name);
        this.image.src = this.o.imageUrl;
        this.image.onload = () => {
            this.loaded = true;
        }
    }
}
