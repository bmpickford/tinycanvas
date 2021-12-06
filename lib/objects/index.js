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
    constructor(game, o, name, args) {
        this.game = game;
        this.o = o;
        this.name = name;
        this.args = args;
        this.id = this.name + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    }
}
