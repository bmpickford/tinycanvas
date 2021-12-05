/** @module Lib/objects */

/**
 * @typedef {Object} GameObjectOptions
 * @property {number} h - Height
 * @property {number} w - Width
 * @property {number} x - X Coordinate
 * @property {number} y - Y Coordinate
 */

/**
 * Default GameObject class
 */
export class GameObject {
    /**
     * 
     * @param {Game} game 
     * @param {Options} o 
     */
    constructor(game, o) {
        this.game = game;
        this.o = o;
    }
}
