# @tinycanvas/interactions

Helpers to easily add interactivity to GameObjects.

### Move object with arrow keys

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
    // self defines how far to move
    self.delta = 50;
  },
  render: (self) => self.context.drawRect(self.x / 2, self.y / 2, self.width, self.height),
  interactions: [ArrowKeys],
});
```


### Available Ineractions
```javascript
ArrowKeys // Arrow key interaction for 2d movement
WASD // WASD key interaction for 2d movement
```