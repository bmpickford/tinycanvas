/** @module @tinycanvas/utils */

/**
 * @typedef {import('../index').GameObject} GameObject
 */


/**
 * Checks for collision of two game objects. Assumes rectangular collision
 * @param {GameObject} o1 
 * @param {GameObject} o2 
 * @returns {boolean} whether the objects collide
 */
export function checkCollision(o1, o2) {
    if (
        o1.x < o2.x + o2.w &&
        o1.x + o1.w > o2.x &&
        o1.y < o2.y + o2.h &&
        o1.h + o1.y > o2.y
    ) {
        return true;
    }
    return false;
}