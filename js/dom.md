---
layout: default
title:  "Dom"
---
##Window

Properties

`window.screen`

`window.document`

`window.navigator`

|__ `window.navigator.appName`

|__ `window.navigator.appVersion`

`window.location`

|__ `.href`

|__ `.hash`

|__ `.host`

|__ `.hostname`

|__ `.pathname`

|__ `.port`

|__ `.protocol`

|__ `.search` -> `window.location.search` = ?blabla&stuff -> `window.location.search.substring(1)`
 
`window.history`

|__ `.back()`

|__ `forward()`

|__ `go(-3)`

`window.innerWidth`

`window.innerHeight`

`window.pageXOffset` ~ `element.scrollLeft`

`window.pageYOffset` ~ `element.scrollTop`

Methods

`scrollBy(x,y)`

`scrollTo()`

`moveTo()`

`moveBy()`

`resizeTo()`

`resizeBy()`

`focus()`

`blur()`

`setInterval(code, delay)`

`setTimeout(code, delay)`

`getComputedStyle(element)`

`open(url, name, feature)`

Events

`onfocus`

`onblur`

`onerror(msg, url, line)`

`onload`

`onresize`

##Document

Properties

`document.documentElement`

`document.forms`

`document.images`

`document.cookie`

`document.applets`

`document.links`

`document.anchors`

Methods

`document.getElementById(id)`

`document.getElementsByTagName()`

`document.getElementsByName()`

`document.querySelectorAll('.testClass')`

`document.querySelector('.test')`

`document.getElementsByClassName('test')`

`document.createTextNode()`

`document.createElement('div')`

`document.createDocumentFragment()`

##Node

Node type 

`nodeType`

`1` - Element: an HTML tag

`2` - Text node

`8` - Comment node

`9` - Document: the HTML document

Traversing

`node.parentNode`

`node.firstChild`

`node.lastChild`
  
`node.childNodes`

`node.nextSibling`

`node.previousSibling`

Methods

`node.appendChild`

`node.insertBefore(new, ref)`

`node.removeChild`

`node.replaceChild(new, old)`

`node.addEventListener(type, handler, useCapture)`

`node.cloneNode()`

##Element

Properties

`elt.style.cssFloat`

`tagName` (= `nodeName`)

`className`

`innerHTML` [ie dom]

`offsetHeight` [ie dom]

`offsetWidth` [ie dom]

`offsetTop` [ie dom]

`offsetLeft` [ie dom]

`Element.clientHeight`

`Element.clientLeft`

`Element.clientTop`

`Element.clientWidth`

`Element.scrollLeft`

`Element.scrollTop`

`Element.scrollWidth`

`Element.scrollHeight`

Values of `elt.style` are always strings.

Methods

`getAttribute(name)`

`setAttribute(key, value)`

`getElementsByTagName(name)`

`removeAttribute(name)`

`getBoundingClientRect()` (give positions relatively to viewport)

`getClientRects()` (give positions relatively to viewport)

<http://quirksmode.org/dom/core/>
