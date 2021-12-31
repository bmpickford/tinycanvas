## Modules

<dl>
<dt><a href="#module_@tinycanvas/animations">@tinycanvas/animations</a></dt>
<dd></dd>
<dt><a href="#module_@tinycanvas/core">@tinycanvas/core</a></dt>
<dd></dd>
<dt><a href="#module_@tinycanvas/core">@tinycanvas/core</a></dt>
<dd></dd>
<dt><a href="#module_@tinycanvas/interactions">@tinycanvas/interactions</a></dt>
<dd></dd>
<dt><a href="#module_@tinycanvas/animations">@tinycanvas/animations</a></dt>
<dd></dd>
<dt><a href="#module_@tinycanvas/core">@tinycanvas/core</a></dt>
<dd></dd>
<dt><a href="#module_@tinycanvas/core">@tinycanvas/core</a></dt>
<dd></dd>
<dt><a href="#module_@tinycanvas/interactions">@tinycanvas/interactions</a></dt>
<dd></dd>
</dl>

<a name="module_@tinycanvas/animations"></a>

## @tinycanvas/animations

* [@tinycanvas/animations](#module_@tinycanvas/animations)
    * _static_
        * [.add(o, config, [ease], [onComplete])](#module_@tinycanvas/animations.add)
        * [.add(o, config, [ease], [onComplete])](#module_@tinycanvas/animations.add)
    * _inner_
        * [~GameObject](#module_@tinycanvas/animations..GameObject) : <code>Object</code>
        * [~AnimationConfig](#module_@tinycanvas/animations..AnimationConfig) : <code>Object</code>
        * [~GameObject](#module_@tinycanvas/animations..GameObject) : <code>Object</code>
        * [~AnimationConfig](#module_@tinycanvas/animations..AnimationConfig) : <code>Object</code>

<a name="module_@tinycanvas/animations.add"></a>

### @tinycanvas/animations.add(o, config, [ease], [onComplete])
**Kind**: static method of [<code>@tinycanvas/animations</code>](#module_@tinycanvas/animations)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| o | <code>GameObject</code> |  | Object to animate |
| config | <code>AnimationConfig</code> |  | Config for animation. Should include any of x, y, h, w, r in an object. Can also specify frames and start frame |
| [ease] | <code>string</code> | <code>&quot;\&quot;linear\&quot;&quot;</code> | Ease string to use. Options are: linear | exp | quint | quad | sine |
| [onComplete] | <code>function</code> |  | onComplete callback |

<a name="module_@tinycanvas/animations.add"></a>

### @tinycanvas/animations.add(o, config, [ease], [onComplete])
**Kind**: static method of [<code>@tinycanvas/animations</code>](#module_@tinycanvas/animations)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| o | <code>GameObject</code> |  | Object to animate |
| config | <code>AnimationConfig</code> |  | Config for animation. Should include any of x, y, h, w, r in an object. Can also specify frames and start frame |
| [ease] | <code>string</code> | <code>&quot;\&quot;linear\&quot;&quot;</code> | Ease string to use. Options are: linear | exp | quint | quad | sine |
| [onComplete] | <code>function</code> |  | onComplete callback |

<a name="module_@tinycanvas/animations..GameObject"></a>

### @tinycanvas/animations~GameObject : <code>Object</code>
**Kind**: inner typedef of [<code>@tinycanvas/animations</code>](#module_@tinycanvas/animations)  
<a name="module_@tinycanvas/animations..AnimationConfig"></a>

### @tinycanvas/animations~AnimationConfig : <code>Object</code>
Animation config

**Kind**: inner typedef of [<code>@tinycanvas/animations</code>](#module_@tinycanvas/animations)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [frames] | <code>number</code> | <code>100</code> | Total number of frames the duration takes |
| [frame] | <code>number</code> | <code>0</code> | Frame to start at |
| x | <code>number</code> |  | X position to animate to |
| y | <code>number</code> |  | Y position to animate to |
| w | <code>number</code> |  | width to animate to |
| h | <code>number</code> |  | height to animate to |
| r | <code>number</code> |  | radius to animate to |

<a name="module_@tinycanvas/animations..GameObject"></a>

### @tinycanvas/animations~GameObject : <code>Object</code>
**Kind**: inner typedef of [<code>@tinycanvas/animations</code>](#module_@tinycanvas/animations)  
<a name="module_@tinycanvas/animations..AnimationConfig"></a>

### @tinycanvas/animations~AnimationConfig : <code>Object</code>
Animation config

**Kind**: inner typedef of [<code>@tinycanvas/animations</code>](#module_@tinycanvas/animations)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [frames] | <code>number</code> | <code>100</code> | Total number of frames the duration takes |
| [frame] | <code>number</code> | <code>0</code> | Frame to start at |
| x | <code>number</code> |  | X position to animate to |
| y | <code>number</code> |  | Y position to animate to |
| w | <code>number</code> |  | width to animate to |
| h | <code>number</code> |  | height to animate to |
| r | <code>number</code> |  | radius to animate to |

<a name="module_@tinycanvas/core"></a>

## @tinycanvas/core

* [@tinycanvas/core](#module_@tinycanvas/core)
    * [~create()](#module_@tinycanvas/core..create)
    * [~create()](#module_@tinycanvas/core..create)

<a name="module_@tinycanvas/core..create"></a>

### @tinycanvas/core~create()
Creates a game

**Kind**: inner method of [<code>@tinycanvas/core</code>](#module_@tinycanvas/core)  
**Properties**

| Name | Type |
| --- | --- |
| opts | <code>GameOptions</code> | 

<a name="module_@tinycanvas/core..create"></a>

### @tinycanvas/core~create()
Creates a game

**Kind**: inner method of [<code>@tinycanvas/core</code>](#module_@tinycanvas/core)  
**Properties**

| Name | Type |
| --- | --- |
| opts | <code>GameOptions</code> | 

<a name="module_@tinycanvas/core"></a>

## @tinycanvas/core
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| create | <code>create</code> | Creates a game |


* [@tinycanvas/core](#module_@tinycanvas/core)
    * [~create()](#module_@tinycanvas/core..create)
    * [~create()](#module_@tinycanvas/core..create)

<a name="module_@tinycanvas/core..create"></a>

### @tinycanvas/core~create()
Creates a game

**Kind**: inner method of [<code>@tinycanvas/core</code>](#module_@tinycanvas/core)  
**Properties**

| Name | Type |
| --- | --- |
| opts | <code>GameOptions</code> | 

<a name="module_@tinycanvas/core..create"></a>

### @tinycanvas/core~create()
Creates a game

**Kind**: inner method of [<code>@tinycanvas/core</code>](#module_@tinycanvas/core)  
**Properties**

| Name | Type |
| --- | --- |
| opts | <code>GameOptions</code> | 

<a name="module_@tinycanvas/interactions"></a>

## @tinycanvas/interactions

* [@tinycanvas/interactions](#module_@tinycanvas/interactions)
    * [~Interaction](#module_@tinycanvas/interactions..Interaction)
        * [._onKeyDown(e, l, u, r, d)](#module_@tinycanvas/interactions..Interaction+_onKeyDown) ⇒ <code>void</code>
        * [._onKeyDown(e, l, u, r, d)](#module_@tinycanvas/interactions..Interaction+_onKeyDown) ⇒ <code>void</code>
    * [~Interaction](#module_@tinycanvas/interactions..Interaction)
        * [._onKeyDown(e, l, u, r, d)](#module_@tinycanvas/interactions..Interaction+_onKeyDown) ⇒ <code>void</code>
        * [._onKeyDown(e, l, u, r, d)](#module_@tinycanvas/interactions..Interaction+_onKeyDown) ⇒ <code>void</code>

<a name="module_@tinycanvas/interactions..Interaction"></a>

### @tinycanvas/interactions~Interaction
**Kind**: inner typedef of [<code>@tinycanvas/interactions</code>](#module_@tinycanvas/interactions)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| init | <code>function</code> | init function |
| destroy | <code>function</code> | destroy function |


* [~Interaction](#module_@tinycanvas/interactions..Interaction)
    * [._onKeyDown(e, l, u, r, d)](#module_@tinycanvas/interactions..Interaction+_onKeyDown) ⇒ <code>void</code>
    * [._onKeyDown(e, l, u, r, d)](#module_@tinycanvas/interactions..Interaction+_onKeyDown) ⇒ <code>void</code>

<a name="module_@tinycanvas/interactions..Interaction+_onKeyDown"></a>

#### interaction.\_onKeyDown(e, l, u, r, d) ⇒ <code>void</code>
**Kind**: instance method of [<code>Interaction</code>](#module_@tinycanvas/interactions..Interaction)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>\*</code> | Event |
| l | <code>string</code> | Left |
| u | <code>string</code> | Up |
| r | <code>string</code> | Right |
| d | <code>string</code> | Down |

<a name="module_@tinycanvas/interactions..Interaction+_onKeyDown"></a>

#### interaction.\_onKeyDown(e, l, u, r, d) ⇒ <code>void</code>
**Kind**: instance method of [<code>Interaction</code>](#module_@tinycanvas/interactions..Interaction)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>\*</code> | Event |
| l | <code>string</code> | Left |
| u | <code>string</code> | Up |
| r | <code>string</code> | Right |
| d | <code>string</code> | Down |

<a name="module_@tinycanvas/interactions..Interaction"></a>

### @tinycanvas/interactions~Interaction
**Kind**: inner typedef of [<code>@tinycanvas/interactions</code>](#module_@tinycanvas/interactions)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| init | <code>function</code> | init function |
| destroy | <code>function</code> | destroy function |


* [~Interaction](#module_@tinycanvas/interactions..Interaction)
    * [._onKeyDown(e, l, u, r, d)](#module_@tinycanvas/interactions..Interaction+_onKeyDown) ⇒ <code>void</code>
    * [._onKeyDown(e, l, u, r, d)](#module_@tinycanvas/interactions..Interaction+_onKeyDown) ⇒ <code>void</code>

<a name="module_@tinycanvas/interactions..Interaction+_onKeyDown"></a>

#### interaction.\_onKeyDown(e, l, u, r, d) ⇒ <code>void</code>
**Kind**: instance method of [<code>Interaction</code>](#module_@tinycanvas/interactions..Interaction)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>\*</code> | Event |
| l | <code>string</code> | Left |
| u | <code>string</code> | Up |
| r | <code>string</code> | Right |
| d | <code>string</code> | Down |

<a name="module_@tinycanvas/interactions..Interaction+_onKeyDown"></a>

#### interaction.\_onKeyDown(e, l, u, r, d) ⇒ <code>void</code>
**Kind**: instance method of [<code>Interaction</code>](#module_@tinycanvas/interactions..Interaction)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>\*</code> | Event |
| l | <code>string</code> | Left |
| u | <code>string</code> | Up |
| r | <code>string</code> | Right |
| d | <code>string</code> | Down |

<a name="module_@tinycanvas/animations"></a>

## @tinycanvas/animations

* [@tinycanvas/animations](#module_@tinycanvas/animations)
    * _static_
        * [.add(o, config, [ease], [onComplete])](#module_@tinycanvas/animations.add)
        * [.add(o, config, [ease], [onComplete])](#module_@tinycanvas/animations.add)
    * _inner_
        * [~GameObject](#module_@tinycanvas/animations..GameObject) : <code>Object</code>
        * [~AnimationConfig](#module_@tinycanvas/animations..AnimationConfig) : <code>Object</code>
        * [~GameObject](#module_@tinycanvas/animations..GameObject) : <code>Object</code>
        * [~AnimationConfig](#module_@tinycanvas/animations..AnimationConfig) : <code>Object</code>

<a name="module_@tinycanvas/animations.add"></a>

### @tinycanvas/animations.add(o, config, [ease], [onComplete])
**Kind**: static method of [<code>@tinycanvas/animations</code>](#module_@tinycanvas/animations)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| o | <code>GameObject</code> |  | Object to animate |
| config | <code>AnimationConfig</code> |  | Config for animation. Should include any of x, y, h, w, r in an object. Can also specify frames and start frame |
| [ease] | <code>string</code> | <code>&quot;\&quot;linear\&quot;&quot;</code> | Ease string to use. Options are: linear | exp | quint | quad | sine |
| [onComplete] | <code>function</code> |  | onComplete callback |

<a name="module_@tinycanvas/animations.add"></a>

### @tinycanvas/animations.add(o, config, [ease], [onComplete])
**Kind**: static method of [<code>@tinycanvas/animations</code>](#module_@tinycanvas/animations)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| o | <code>GameObject</code> |  | Object to animate |
| config | <code>AnimationConfig</code> |  | Config for animation. Should include any of x, y, h, w, r in an object. Can also specify frames and start frame |
| [ease] | <code>string</code> | <code>&quot;\&quot;linear\&quot;&quot;</code> | Ease string to use. Options are: linear | exp | quint | quad | sine |
| [onComplete] | <code>function</code> |  | onComplete callback |

<a name="module_@tinycanvas/animations..GameObject"></a>

### @tinycanvas/animations~GameObject : <code>Object</code>
**Kind**: inner typedef of [<code>@tinycanvas/animations</code>](#module_@tinycanvas/animations)  
<a name="module_@tinycanvas/animations..AnimationConfig"></a>

### @tinycanvas/animations~AnimationConfig : <code>Object</code>
Animation config

**Kind**: inner typedef of [<code>@tinycanvas/animations</code>](#module_@tinycanvas/animations)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [frames] | <code>number</code> | <code>100</code> | Total number of frames the duration takes |
| [frame] | <code>number</code> | <code>0</code> | Frame to start at |
| x | <code>number</code> |  | X position to animate to |
| y | <code>number</code> |  | Y position to animate to |
| w | <code>number</code> |  | width to animate to |
| h | <code>number</code> |  | height to animate to |
| r | <code>number</code> |  | radius to animate to |

<a name="module_@tinycanvas/animations..GameObject"></a>

### @tinycanvas/animations~GameObject : <code>Object</code>
**Kind**: inner typedef of [<code>@tinycanvas/animations</code>](#module_@tinycanvas/animations)  
<a name="module_@tinycanvas/animations..AnimationConfig"></a>

### @tinycanvas/animations~AnimationConfig : <code>Object</code>
Animation config

**Kind**: inner typedef of [<code>@tinycanvas/animations</code>](#module_@tinycanvas/animations)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [frames] | <code>number</code> | <code>100</code> | Total number of frames the duration takes |
| [frame] | <code>number</code> | <code>0</code> | Frame to start at |
| x | <code>number</code> |  | X position to animate to |
| y | <code>number</code> |  | Y position to animate to |
| w | <code>number</code> |  | width to animate to |
| h | <code>number</code> |  | height to animate to |
| r | <code>number</code> |  | radius to animate to |

<a name="module_@tinycanvas/core"></a>

## @tinycanvas/core

* [@tinycanvas/core](#module_@tinycanvas/core)
    * [~create()](#module_@tinycanvas/core..create)
    * [~create()](#module_@tinycanvas/core..create)

<a name="module_@tinycanvas/core..create"></a>

### @tinycanvas/core~create()
Creates a game

**Kind**: inner method of [<code>@tinycanvas/core</code>](#module_@tinycanvas/core)  
**Properties**

| Name | Type |
| --- | --- |
| opts | <code>GameOptions</code> | 

<a name="module_@tinycanvas/core..create"></a>

### @tinycanvas/core~create()
Creates a game

**Kind**: inner method of [<code>@tinycanvas/core</code>](#module_@tinycanvas/core)  
**Properties**

| Name | Type |
| --- | --- |
| opts | <code>GameOptions</code> | 

<a name="module_@tinycanvas/core"></a>

## @tinycanvas/core
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| create | <code>create</code> | Creates a game |


* [@tinycanvas/core](#module_@tinycanvas/core)
    * [~create()](#module_@tinycanvas/core..create)
    * [~create()](#module_@tinycanvas/core..create)

<a name="module_@tinycanvas/core..create"></a>

### @tinycanvas/core~create()
Creates a game

**Kind**: inner method of [<code>@tinycanvas/core</code>](#module_@tinycanvas/core)  
**Properties**

| Name | Type |
| --- | --- |
| opts | <code>GameOptions</code> | 

<a name="module_@tinycanvas/core..create"></a>

### @tinycanvas/core~create()
Creates a game

**Kind**: inner method of [<code>@tinycanvas/core</code>](#module_@tinycanvas/core)  
**Properties**

| Name | Type |
| --- | --- |
| opts | <code>GameOptions</code> | 

<a name="module_@tinycanvas/interactions"></a>

## @tinycanvas/interactions

* [@tinycanvas/interactions](#module_@tinycanvas/interactions)
    * [~Interaction](#module_@tinycanvas/interactions..Interaction)
        * [._onKeyDown(e, l, u, r, d)](#module_@tinycanvas/interactions..Interaction+_onKeyDown) ⇒ <code>void</code>
        * [._onKeyDown(e, l, u, r, d)](#module_@tinycanvas/interactions..Interaction+_onKeyDown) ⇒ <code>void</code>
    * [~Interaction](#module_@tinycanvas/interactions..Interaction)
        * [._onKeyDown(e, l, u, r, d)](#module_@tinycanvas/interactions..Interaction+_onKeyDown) ⇒ <code>void</code>
        * [._onKeyDown(e, l, u, r, d)](#module_@tinycanvas/interactions..Interaction+_onKeyDown) ⇒ <code>void</code>

<a name="module_@tinycanvas/interactions..Interaction"></a>

### @tinycanvas/interactions~Interaction
**Kind**: inner typedef of [<code>@tinycanvas/interactions</code>](#module_@tinycanvas/interactions)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| init | <code>function</code> | init function |
| destroy | <code>function</code> | destroy function |


* [~Interaction](#module_@tinycanvas/interactions..Interaction)
    * [._onKeyDown(e, l, u, r, d)](#module_@tinycanvas/interactions..Interaction+_onKeyDown) ⇒ <code>void</code>
    * [._onKeyDown(e, l, u, r, d)](#module_@tinycanvas/interactions..Interaction+_onKeyDown) ⇒ <code>void</code>

<a name="module_@tinycanvas/interactions..Interaction+_onKeyDown"></a>

#### interaction.\_onKeyDown(e, l, u, r, d) ⇒ <code>void</code>
**Kind**: instance method of [<code>Interaction</code>](#module_@tinycanvas/interactions..Interaction)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>\*</code> | Event |
| l | <code>string</code> | Left |
| u | <code>string</code> | Up |
| r | <code>string</code> | Right |
| d | <code>string</code> | Down |

<a name="module_@tinycanvas/interactions..Interaction+_onKeyDown"></a>

#### interaction.\_onKeyDown(e, l, u, r, d) ⇒ <code>void</code>
**Kind**: instance method of [<code>Interaction</code>](#module_@tinycanvas/interactions..Interaction)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>\*</code> | Event |
| l | <code>string</code> | Left |
| u | <code>string</code> | Up |
| r | <code>string</code> | Right |
| d | <code>string</code> | Down |

<a name="module_@tinycanvas/interactions..Interaction"></a>

### @tinycanvas/interactions~Interaction
**Kind**: inner typedef of [<code>@tinycanvas/interactions</code>](#module_@tinycanvas/interactions)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| init | <code>function</code> | init function |
| destroy | <code>function</code> | destroy function |


* [~Interaction](#module_@tinycanvas/interactions..Interaction)
    * [._onKeyDown(e, l, u, r, d)](#module_@tinycanvas/interactions..Interaction+_onKeyDown) ⇒ <code>void</code>
    * [._onKeyDown(e, l, u, r, d)](#module_@tinycanvas/interactions..Interaction+_onKeyDown) ⇒ <code>void</code>

<a name="module_@tinycanvas/interactions..Interaction+_onKeyDown"></a>

#### interaction.\_onKeyDown(e, l, u, r, d) ⇒ <code>void</code>
**Kind**: instance method of [<code>Interaction</code>](#module_@tinycanvas/interactions..Interaction)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>\*</code> | Event |
| l | <code>string</code> | Left |
| u | <code>string</code> | Up |
| r | <code>string</code> | Right |
| d | <code>string</code> | Down |

<a name="module_@tinycanvas/interactions..Interaction+_onKeyDown"></a>

#### interaction.\_onKeyDown(e, l, u, r, d) ⇒ <code>void</code>
**Kind**: instance method of [<code>Interaction</code>](#module_@tinycanvas/interactions..Interaction)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>\*</code> | Event |
| l | <code>string</code> | Left |
| u | <code>string</code> | Up |
| r | <code>string</code> | Right |
| d | <code>string</code> | Down |

