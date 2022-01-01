import { checkCollision } from './collision.js';
/**
 * GameObject options
 * 
 * @public
 * @alias module:core~GameObject
 * @typedef {Object} GameObjectOptions
 * @property {*} init Function called on initilisation
 * @property {*} render Function called on every frame
 * @property {boolean | GameObject[]} collision true if callback regardless of GameObject, or an array of GameObjects to specifically collide with
 * @property {*} onCollision collision callback
 * @property {Array} interactions array of interaction functions to initilise. See CLH.Interactions for defaults
 */

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
    _x0 = 0;
    _y0 = 0;

    /**
     * 
     * @param {Game} game - Game object
     * @param {GameObjectOptions} opts - Options
     */
    constructor(game, opts) {
        this.game = game;
        this.opts = opts;
        this.id = `${opts?.name || ''}_${Math.floor(Math.random() * 100)}`

        if (opts?.collision) {
            this.collision =  true;
            if (Array.isArray(opts.collision)) this._collisionObjects = opts.collision;
        }
        if (this.opts?.init) this.opts.init(this, this.game.getLevel());
        if (this.opts?.interactions) this.opts.interactions.forEach((i => i.init(this)));
    }
    render() {
        if (this.collision && (this.x !== this._x0 || this.y !== this._y0)) {
            const collision = this._checkCollisions();
            if (collision && this.opts.onCollision) {
                this.opts?.onCollision(this, collision);
            } else if (collision) {
                this.x = this._x0;
                this.y = this._y0;
                return;
            }
            this._x0 = this.x;
            this._y0 = this.y;
        }
        this.opts?.render(this);
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