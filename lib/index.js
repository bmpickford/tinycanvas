/** @module Lib */

import * as animation from './animation/index';
import * as interaction from './interaction/index';
import * as objects  from './objects/index';
import * as utils from './utils/index';
export default {
    ...objects,
    ...animation,
    ...interaction,
    ...utils,
};