---
title: Animations
description: Animations API Doc
layout: ../../layouts/MainLayout.astro
---

## Exports

### Animation
**Kind**: static class of [<code>animations</code>](#module_animations)  

#### add(o, config, [ease], [onComplete])
**Kind**: static method of [<code>animations</code>](#module_animations)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| o | <code>module:core~GameObject</code> |  | Object to animate |
| config | <a href="#animationconfig"><code>AnimationConfig</code></a> |  | Config for animation |
| [ease] | <code>string</code> | <code>linear</code> | Ease string to use. Options are: linear | exp | quint | quad | sine |
| [onComplete] | <code>function</code> |  | onComplete callback |

<a name="module_animations.remove"></a>

#### remove(o) ⇒ <code>void</code>
Remove an animation from the current animation list

**Kind**: static method of [<code>animations</code>](#module_animations)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>module:core~GameObject</code> | Object to animate |

<a name="module_animations..AnimationConfig"></a>

## Types

### AnimationConfig
Animation config

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [frames] | <code>number</code> | <code>100</code> | Total number of frames the duration takes |
| [frame] | <code>number</code> | <code>0</code> | Frame to start at |
| [x] | <code>number</code> |  | X position to animate to |
| [y] | <code>number</code> |  | Y position to animate to |
| [w] | <code>number</code> |  | width to animate to |
| [h] | <code>number</code> |  | height to animate to |
| [r] | <code>number</code> |  | radius to animate to |

