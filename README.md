## Game Starter
Template for jsk13 games, or any canvas application designed to be small

#### What's Included
 - ✅ WASD / Arrow key / Mouse click listener
 - ✅ Collision detection
 - ✅ Global game and canvas access
 - ✅ Out of the box build tooling, CI and testing. See below for list of build tools
 - ❌ Easy object creation API
 - ❌ Levels
 - ❌ Spritesheet
 - ❌ Animations
 - ❌ Text

## Running
`npm run start`

## Building
`npm run build`

## Testing
`npm run test`

## Tech
 * [web-dev-server](https://modern-web.dev/docs/dev-server/overview/) as a dev server.
 * [web-test-runner](https://modern-web.dev/docs/test-runner/overview/) as a testing configuration helper.
    * [playwright](https://modern-web.dev/docs/test-runner/browser-launchers/playwright/) as the browser launcher
    * [mocha](https://mochajs.org/) as the test runner and testing syntax.
 * github actions for CI
 * [size-limit](https://github.com/ai/size-limit) for tracking bundle size
 * [rollup](https://rollupjs.org/guide/en/) for building and minification
 * [eslint](https://eslint.org/) for linting
 * [husky](https://github.com/typicode/husky) for pre-commit hooks

## Development
Using vanilla JS and the canvas API to create objects and binding events using the native DOM API

**note** only modern browsers are being targeted to avoid polyfills

### Structure
```bash
 |-src/
   # This is where the interaction mixins live. Can bind listeners for keyboard events to objects with these.
   |-interaction/
   # In game objects and sprites
   |-objects/
   # Where the puzzles live
   |-puzzles/
   # Global constant for canvas and context as these are needed throughout. This should not import anything else to avoid cyclic dependencies.
   |--canvas.js
 |-test/
 # Entrypoint and game loop logic
 |--index.js
```
