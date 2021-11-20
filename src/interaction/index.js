import { arrowKeyListenerMixin } from "./mixins/arrowKeyListener";
import { wasdKeyListenerMixin } from "./mixins/wasdKeyListener";
import { movementMixin } from "./mixins/movement";
import { clickListenerMixin } from "./mixins/clickListener";

export const withArrowMovement = (obj) => {
    const _obj = withMixin(arrowKeyListenerMixin, obj);
    _obj.init();
    return _obj;
};

export const withWASDMovement = (obj) => {
    const _obj = withMixin(wasdKeyListenerMixin, obj);
    _obj.init();
    return _obj;
};

export const withMouseClickEvent = (obj) => {
    const _obj = obj.clone();
    Object.assign(_obj, clickListenerMixin);
    _obj.init();
    return _obj;
}

const withMixin = (mixin, obj) => {
    const _o = obj.clone();
    Object.assign(_o.__proto__ || {}, mixin);
    Object.assign(_o.__proto__, movementMixin);

    return _o;
}
