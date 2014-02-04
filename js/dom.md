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

Methods

`scrollBy(x,y)`

`scrollTo()`

`moveTo()`

`moveBy()`

`resizeTo()`

`resizeBy()`

`focus()`

`blur()`

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

`document.getElementById()`

`document.getElementsByTagName()`

`document.querySelectorAll('.testClass')`

##Node

Traversing

`node.parentNode`

`node.firstChild`

`node.lastChild`

`node.childNodes`

`node.nextSibling`

Node type 

`nodeType`

`1` - Element: an HTML tag

`2` - Text node

`8` - Comment node

`9` - Document: the HTML document

##Element

`elt.style.cssFloat`

Values of `elt.style` are always strings.