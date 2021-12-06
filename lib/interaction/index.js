/** @module Lib/interaction */

/**
 * @param {GameObject} superclass - this is the class you want to mix in to
 * @returns {GameObject} - the class with the mixin
 * @example const classWithListener = mix(MyClass).with(myListenerMixin); const item = new classWithListener();
 */
 export const mix = (superclass) => new MixinBuilder(superclass);
 class MixinBuilder {
   /**
    * @param {GameObject} superclass 
    */
   constructor(superclass) {
     this.superclass = superclass;
   }
   /**
    * 
    * @param  {...GameObject} mixins 
    * @returns {GameObject}
    */
 
   with(...mixins) {
     if (!mixins) return this.superclass;
     const _withMixins = mixins.reduce((c, mixin) => mixin(c), this.superclass);
     return _withMixins;
   }
 }
 
 export { WASDMovementMixin, ArrowMovementMixin } from './mixins/movement';
 export { OnClickMixin } from './mixins/mouse';
 export { EnterKeyMixin } from './mixins/keyboard';