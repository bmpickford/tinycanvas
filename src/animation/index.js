/**
 * 
 * @param {*} o Object to animate
 * @param {*} config Config for animation. Should include any of x, y, h, w, r in an object. Can also specify frames and start frame
 */
export function animateObject(o, config, ease) {
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
        case 'easeInOut':
            fn = expEaseInOut;
            break;
        default:
            fn = linear;
            break;
    }
    animate(o, _config, fn);
}

function animate(o, config, fn) {
    if (config.frame >= config.frames) return;
    config.frame = config.frame + 1;
    const progress = config.frame;
    const steps = config.frames;
    if (config.x) {
        const xDistance = config.x - config.xFrom;
        o.o.x = fn(progress, config.xFrom, xDistance, steps);
    }
    if (config.y) {
        const yDistance = config.y - config.yFrom;
        o.o.y = fn(progress, config.yFrom, yDistance, steps);
    }
    if (config.w) {
        const wDistance = config.w - config.wFrom;
        o.o.w = fn(progress, config.wFrom, wDistance, steps);
    }
    if (config.h) {
        const hDistance = config.h - config.hFrom;
        o.o.h = fn(progress, config.hFrom, hDistance, steps);
    }
    if (config.r) {
        const rDistance = config.r - config.rFrom;
        o.o.r = fn(progress, config.rFrom, rDistance, steps);
    }
    window.requestAnimationFrame(animate.bind(null, o, config, fn));
}

function expEaseInOut(currentProgress, start, distance, steps) {
    currentProgress /= steps / 2;
    if (currentProgress < 1) return distance / 2 * Math.pow( 2, 10 * (currentProgress - 1) ) + start;
    currentProgress--;
    return distance / 2 * ( -Math.pow( 2, -10 * currentProgress) + 2 ) + start;
}

function linear(currentProgress, start, distance, steps) {
    currentProgress--;
    return distance / steps * currentProgress + start;
}