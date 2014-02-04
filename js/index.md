---
layout: default
title:  "Js Code"
---

##Dom snippets

Wrap a node with `<b>`

```javascript
function embolden(node){
  var b = document.createElement('b');
  var parent = node.parentNode;
  parent.replaceChild(b, node);
  b.appendChild(node);
}
```
