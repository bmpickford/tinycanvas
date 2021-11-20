/**
 * @param {*} superclass this is the class you want to mix in to
 * @returns {*} the class with the mixin
 * @example const classWithListener = mix(MyClass).with(myListenerMixin); const item = new classWithListener();
 */
 export const mix = (superclass) => new MixinBuilder(superclass);
 class MixinBuilder {
   constructor(superclass) {
     this.superclass = superclass;
   }
 
   with(...mixins) { 
     const _withMixins = mixins.reduce((c, mixin) => mixin(c), this.superclass);
     return _withMixins;
   }
 }
 
 export { WASDMovementMixin, ArrowMovementMixin } from './mixins/movement';
 export { OnClickMixin } from './mixins/mouse';