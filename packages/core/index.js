import { Game } from './src/game';

/** @module @tinycanvas/core */

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
 * @property {create} create - Creates a game
 */
export default {
    create,
};
