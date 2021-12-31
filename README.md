## @tinycanvas WIP
![CI](https://github.com/bmpickford/canvas-little-helper/actions/workflows/main.yml/badge.svg)

> Minimal 2D library for helping with working with the canvas

## [Demo](https://www.game.benpickford.me/)

## Installation
```bash
npm install @tinycanvas/core
```

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
 - &#10060; Documentation

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

### API

#### Create game
```
import TC from '@tinycanvas/core';

const game = TC.create();
```

#### Draw a square
```
const square - game.add.object({
  name: 'square',
  init: (self) => {
    self.x = 100;
    self.y = 100;
    self.width = 50;
    self.height = 50;
  },
  render: (self) => self.context.drawRect(self.x / 2, self.y / 2, self.width, self.height),
});
```

#### Movable square
```
const square - game.add.object({
  name: 'square',
  init: (self) => {
    self.x = 100;
    self.y = 100;
    self.width = 50;
    self.height = 50;
    // self defines how far to move
    self.delta = 50;
  },
  render: (self) => self.context.drawRect(self.x / 2, self.y / 2, self.width, self.height),
  interactions: [CLH.Interactions.ArrowKeys],
});
```

#### Movable square with custom movement
```
const square - game.add.object({
  name: 'square',
  init: (self) => {
    self.x = 100;
    self.y = 100;
    self.width = 50;
    self.height = 50;
    // self defines how far to move
    self.delta = 50;
  },
  render: (self) => self.context.drawRect(self.x / 2, self.y / 2, self.width, self.height),
  interactions: [CLH.Interactions.ArrowKeys],
  create: (self) => {
    // You can add multiple of for a single event, but adding one will remove the default behaviour
    self.on(CLH.Interactions.ArrowKeys.LEFT, self.moveLeft);
  },
  moveLeft: (self) => {
    self.x =- self.delta / 2;
  }
});
```