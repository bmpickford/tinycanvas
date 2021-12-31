/** @module @tinycanvas/animations */

/**
 * @typedef {Object} GameObject
 */

/**
 * Animation config
 * @typedef {Object} AnimationConfig
 * @property {number} [frames=100] - Total number of frames the duration takes
 * @property {number} [frame=0] - Frame to start at
 * @property {number} x - X position to animate to
 * @property {number} y - Y position to animate to
 * @property {number} w - width to animate to
 * @property {number} h - height to animate to
 * @property {number} r - radius to animate to
 */


export default class Animations {
    static _animations = [];

    /**
     * @public
     * @param {GameObject} o Object to animate
     * @param {AnimationConfig} config Config for animation. Should include any of x, y, h, w, r in an object. Can also specify frames and start frame
     * @param {string} [ease="linear"] Ease string to use. Options are: linear | exp | quint | quad | sine
     * @param {Function} [onComplete] onComplete callback
     */
    static add(o, config, ease, onComplete = () => {}) {
        if (Animations._animations.findIndex((a) => a.id === o.id) > -1) {
            console.warn('Can only animate one at a time');
            return;
        }
        Animations._animations.push(o);
        const _config = {...config};
        if(!_config.frames) _config.frames = 100;
        if(!_config.frame) _config.frame = 0;
        _config.x0 = o.o.x;
        _config.y0 = o.o.y;
        _config.w0 = o.o.w;
        _config.h0 = o.o.h;
        _config.r0 = o.o.r;
    
        let fn = linear;
        if (ease === 'exp') fn = expEaseInOut;
        else if (ease === 'quint') fn = quinticEase;
        else if (ease === 'quad') fn = quadraticEase;
        else if (ease === 'sine') fn = sineEaseInOut;
        animateWithFunction(o, _config, fn, () => {
            Animations.remove(o);
            onComplete()
        });
    }

    static remove(o) {
        const _a = Animations._animations.findIndex((a) => a.id === o.id);
        if (_a > -1) Animations._animations.splice(_a, 1);
    }
}

function animateWithFunction(o, config, fn, onComplete) {
    if (config.frame >= config.frames) {
        onComplete();
        return;
    }
    config.frame += 1;
    if (config.x !== undefined) o.o.x = fn(config.frame, config.x0, config.x - config.x0, config.frames);
    if (config.y !== undefined) o.o.y = fn(config.frame, config.y0, config.y - config.y0, config.frames);
    if (config.w !== undefined) o.o.w = fn(config.frame, config.w0, config.w - config.w0, config.frames);
    if (config.h !== undefined) o.o.h = fn(config.frame, config.h0, config.h - config.h0, config.frames);
    if (config.r !== undefined) o.o.r = fn(config.frame, config.r0, config.r - config.r0, config.frames);
    window.requestAnimationFrame(animateWithFunction.bind(null, o, config, fn, onComplete));
}

function linear(currentProgress, start, distance, steps) {
    currentProgress--;
    return distance / steps * currentProgress + start;
}

function expEaseInOut(currentProgress, start, distance, steps) {
    currentProgress /= steps / 2;
    if (currentProgress < 1) return distance / 2 * Math.pow( 2, 10 * (currentProgress - 1) ) + start;
    currentProgress--;
    return distance / 2 * ( -Math.pow( 2, -10 * currentProgress) + 2 ) + start;
}


function quinticEase(currentProgress, start, distance, steps) {
    currentProgress /= steps/2;
    if (currentProgress < 1) {
      return (distance/2)*(Math.pow(currentProgress, 5)) + start;
    }
    currentProgress -= 2;
    return distance/2*(Math.pow(currentProgress, 5) + 2) + start;
}


function quadraticEase(currentProgress, start, distance, steps) {
    currentProgress /= steps/2;
    if (currentProgress <= 1) {
      return (distance/2)*currentProgress*currentProgress + start;
    }
    currentProgress--;
    return -1*(distance/2) * (currentProgress*(currentProgress-2) - 1) + start;
}
  
function sineEaseInOut(currentProgress, start, distance, steps) {
    return -distance/2 * (Math.cos(Math.PI*currentProgress/steps) - 1) + start;
}
  