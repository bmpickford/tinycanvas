# @tinycanvas WIP
![CI](https://github.com/bmpickford/canvas-little-helper/actions/workflows/main.yml/badge.svg)

> Minimal 2D library for helping with working with the canvas

#### [Example](https://www.game.benpickford.me/) - [Docs](https://www.tinycanvas.benpickford.me/)

## Installation
```bash
npm install @tinycanvas/core
```

#### What's Included
 - &#10004; Collision detection
 - &#10004; Easy object creation API
 - &#10004; Levels
 - &#10060; Spritesheet
 - &#10060; Text
 - &#10004; Animations (with `@tinycanvas/animations`)
 - &#10004; WASD / Arrow key / Mouse click / Enter key object listener (with `@tinycanvas/interactions`)

## Running
`npm run start`

## Building
`npm run build`

## Testing
`npm run test`

## Tooling
 * [web-test-runner](https://modern-web.dev/docs/test-runner/overview/) as a testing configuration helper.
    * [playwright](https://modern-web.dev/docs/test-runner/browser-launchers/playwright/) as the browser launcher
    * [mocha](https://mochajs.org/) as the test runner and testing syntax.
 * github actions for CI
 * [size-limit](https://github.com/ai/size-limit) for tracking bundle size
 * [eslint](https://eslint.org/) for linting
 * [husky](https://github.com/typicode/husky) for pre-commit hooks
 * [jsdoc](https://jsdoc.app/) for documentation

## Development
Using vanilla JS and the canvas API to create objects and binding events using the native DOM API

### API

#### Create game
```javascript
import TC from '@tinycanvas/core';

const game = TC.create();
```

#### Draw a square
```javascript
import TC from '@tinycanvas/core';

const game = TC.create();
const square = game.add.object({
  name: 'square',
  init: (self) => {
    self.x = 100;
    self.y = 100;
    self.width = 50;
    self.height = 50;
  },
  render: (self) => self.context.drawRect(self.x / 2, self.y / 2, self.width, self.height),
});

game.start();
```

#### Movable square
```javascript
import TC from '@tinycanvas/core';
import { ArrowKeys } from '@tinycanvas/interaction';

const game = TC.create();
const square = game.add.object({
  name: 'square',
  init: (self) => {
    self.x = 100;
    self.y = 100;
    self.width = 50;
    self.height = 50;
    // delta defines how far to move
    self.delta = 50;
  },
  render: (self) => {
    self.context.drawRect(self.x / 2, self.y / 2, self.width, self.height);
  },
  interactions: [ArrowKeys],
});

game.start();
```

#### Movable square with custom movement
```javascript
import TC from '@tinycanvas/core';
import { ArrowKeys } from '@tinycanvas/interaction';

const game = TC.create();
const square = game.add.object({
  name: 'square',
  init: (self) => {
    self.x = 100;
    self.y = 100;
    self.width = 50;
    self.height = 50;
    // delta defines how far to move
    self.delta = 50;
  },
  render: (self) => self.context.drawRect(self.x / 2, self.y / 2, self.width, self.height),
  interactions: [ArrowKeys],
  create: (self) => {
    // You can add multiple of for a single event, but adding one will remove the default behaviour
    self.on(ArrowKeys.LEFT, self.moveLeft);
  },
  moveLeft: (self) => {
    self.x =- self.delta / 2;
  }
});

game.start();
```