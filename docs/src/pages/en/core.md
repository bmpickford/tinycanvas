---
title: Core
description: Core API doc
layout: ../../layouts/MainLayout.astro
---

## Functions

### create() ⇒ <code>Game</code>
Creates a game

**Kind**: global function  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| opts | <code>GameOptions</code> | Game options |


## Functions

### AddGameObject(opts) ⇒ [<code>GameObject</code>](#GameObject)
Add object to the game

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| opts | [<code>GameObjectOptions</code>](#GameObjectOptions) | Options to pass through to the game object |

<a name="AddImage"></a>

### AddImage(key, src) ⇒ <code>HTMLImageElement</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Image key. Must be unique |
| src | <code>string</code> | Image source |

<a name="AddSound"></a>

### AddSound(key, src) ⇒ <code>HTMLAudioElement</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Sound key. Must be unique |
| src | <code>string</code> | Sound source |

<a name="GameOptions"></a>

## Types

### GameOptions : <code>Object</code>
Game options

**Kind**: global typedef  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [canvasElement] | <code>string</code> | <code>game</code> | ID of custom canvas element |

<a name="Listener"></a>

### Listener : <code>Object</code>
Listener

**Kind**: global typedef  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>START</code> \| <code>END</code> | Listener key |
| callback | <code>function</code> | Callback |

<a name="GameObjectOptions"></a>

### GameObjectOptions : <code>Object</code>
GameObject options

**Kind**: global typedef  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| init | <code>\*</code> | Function called on initilisation |
| render | <code>\*</code> | Function called on every frame |
| collision | <code>boolean</code> \| [<code>Array.&lt;GameObject&gt;</code>](#GameObject) | true if callback regardless of GameObject, or an array of GameObjects to specifically collide with |
| onCollision | <code>\*</code> | collision callback |
| interactions | <code>Array</code> | array of interaction functions to initilise. See CLH.Interactions for defaults |

