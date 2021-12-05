/** @module Lib/animation */

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


/**
 * 
 * @param {GameObject} o Object to animate
 * @param {AnimationConfig} config Config for animation. Should include any of x, y, h, w, r in an object. Can also specify frames and start frame
 * @param {(linear|easeInOut)} [ease=linear] Ease string to use.
 */
export function animate(o, config, ease) {
    const _config = {...config};
    if(!_config.frames) _config.frames = 100;
    if(!_config.frame) _config.frame = 0;
    _config.xFrom = o.o.x;
    _config.yFrom = o.o.y;
    _config.wFrom = o.o.w;
    _config.hFrom = o.o.h;
    _config.rFrom = o.o.r;

    let fn;
    switch (ease) {
        case 'exp':
            fn = expEaseInOut;
            break;
        case 'quint':
            fn = quinticEase;
            break;
        case 'quad':
            fn = quadraticEase;
            break;
        case 'sine':
            fn = sineEaseInOut;
            break;
        default:
            fn = linear;
            break;
    }
    animateWithFunction(o, _config, fn);
}

function animateWithFunction(o, config, fn) {
    if (config.frame >= config.frames) return;
    config.frame = config.frame + 1;
    const progress = config.frame;
    const steps = config.frames;
    if (config.x !== undefined) {
        const xDistance = config.x - config.xFrom;
        o.o.x = fn(progress, config.xFrom, xDistance, steps);
    }
    if (config.y !== undefined) {
        const yDistance = config.y - config.yFrom;
        o.o.y = fn(progress, config.yFrom, yDistance, steps);
    }
    if (config.w !== undefined) {
        const wDistance = config.w - config.wFrom;
        o.o.w = fn(progress, config.wFrom, wDistance, steps);
    }
    if (config.h !== undefined) {
        const hDistance = config.h - config.hFrom;
        o.o.h = fn(progress, config.hFrom, hDistance, steps);
    }
    if (config.r !== undefined) {
        const rDistance = config.r - config.rFrom;
        o.o.r = fn(progress, config.rFrom, rDistance, steps);
    }
    window.requestAnimationFrame(animateWithFunction.bind(null, o, config, fn));
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
  