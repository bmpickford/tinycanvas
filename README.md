## Game Starter
![Size](https://img.badgesize.io/https:/www.game.benpickford.me/index.zip)
![CI](https://github.com/bmpickford/canvas-little-helper/actions/workflows/main.yml/badge.svg)

Template for jsk13 games, or any canvas application designed to be small

## [Demo](https://www.game.benpickford.me/)

#### What's Included
 - &#10004; WASD / Arrow key / Mouse click / Enter key object listener
 - &#10004; Collision detection
 - &#10004; Global game and canvas access
 - &#10004; Out of the box build tooling, CI and testing. See below for list of build tools
 - &#10004; Easy object creation API
 - &#10004; Levels
 - &#10060; Spritesheet
 - &#10004; Animations
 - &#10060; Text

## Running
`npm run start`

## Building
`npm run build`

## Testing
`npm run test`

## Tooling
 * [web-dev-server](https://modern-web.dev/docs/dev-server/overview/) as a dev server.
 * [web-test-runner](https://modern-web.dev/docs/test-runner/overview/) as a testing configuration helper.
    * [playwright](https://modern-web.dev/docs/test-runner/browser-launchers/playwright/) as the browser launcher
    * [mocha](https://mochajs.org/) as the test runner and testing syntax.
 * github actions for CI
 * [size-limit](https://github.com/ai/size-limit) for tracking bundle size
 * [rollup](https://rollupjs.org/guide/en/) for building and minification
 * [eslint](https://eslint.org/) for linting
 * [husky](https://github.com/typicode/husky) for pre-commit hooks
 * [jsdoc](https://jsdoc.app/) for documentation

## Development
Using vanilla JS and the canvas API to create objects and binding events using the native DOM API

**note** only modern browsers are being targeted to avoid polyfills

### Structure
```bash
 |-lib/
   # This is where the interaction mixins live. Can bind listeners for keyboard events to objects with these.
   |-interaction/
   # Base game objects
   |-objects/
   # Animation functions and class
   |-animations/
   # Util functions
   |-utils/
   # Global constant for canvas and context as these are needed throughout. This should not import anything else to avoid cyclic dependencies.
   |--canvas.js
   # Game creation class and main loop
   |--game.js
   # Single entrypoint for objects, animations, utils and interaction
   |--index.js
 |-src/
   # Static assets
   |-assets/
   # In game objects and sprites
   |-objects/
   # Where the puzzles live
   |-puzzles/
   # Game entrypoint
   |--index.(js|html)
 |-test/
```
