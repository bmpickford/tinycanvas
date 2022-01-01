import { Game } from './src/game';

/**
 * Creates a game
 *
 * @function create
 * @alias core:create
 * @property {GameOptions} opts - Game options
 * @returns {Game}
 */
function create(opts) {
    return new Game(opts);
}

/**
 * @module core
 */
export default {
    /**
     * @see create
     */
    create,
};
