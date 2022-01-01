<a name="module_animations"></a>

## animations

* [animations](#module_animations)
    * _static_
        * [.add(o, config, [ease], [onComplete])](#module_animations.add)
        * [.remove(o)](#module_animations.remove) ⇒ <code>void</code>
    * _inner_
        * [~AnimationConfig](#module_animations..AnimationConfig) : <code>Object</code>

<a name="module_animations.add"></a>

### animations.add(o, config, [ease], [onComplete])
**Kind**: static method of [<code>animations</code>](#module_animations)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| o | <code>module:core~GameObject</code> |  | Object to animate |
| config | <code>AnimationConfig</code> |  | Config for animation. Should include any of x, y, h, w, r in an object. Can also specify frames and start frame |
| [ease] | <code>string</code> | <code>&quot;\&quot;linear\&quot;&quot;</code> | Ease string to use. Options are: linear | exp | quint | quad | sine |
| [onComplete] | <code>function</code> |  | onComplete callback |

<a name="module_animations.remove"></a>

### animations.remove(o) ⇒ <code>void</code>
Remove an animation from the current animation list

**Kind**: static method of [<code>animations</code>](#module_animations)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>module:core~GameObject</code> | Object to animate |

<a name="module_animations..AnimationConfig"></a>

### animations~AnimationConfig : <code>Object</code>
Animation config

**Kind**: inner typedef of [<code>animations</code>](#module_animations)  
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

