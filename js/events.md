---
layout: default
title:  "Events"
---

Handler  | Tag | Trigerred when
------------- | ------------- | -------------
`onclick`  | All | mouse pressed and released - return `false` to cancel
`ondbclick`  | All | db click
`onfocus` | \<body> + form elts + window | gets keyboard focus
`onblur` | \<body> + form elts + window | loses keyboard focus
`onchange` | form elts | displayed value changes
`onkeydown` | \<body> + form elts | key pressed - return `false` to cancel
`onkeypress` | \<body> + form elts | key pressed and released - return `false` to cancel
`onkeyup` | \<body> + form elts | key released
`onload` | \<body>\<frameset>\<img>\<iframe>\<object>| it's loaded
`onmousedown` | All | mouse button pressed
`onmousemove` | All | mouse moved
`onmouseout` | All | mouse moves off elt
`onmouseover` | All | mouse over elt - return `true` to prevent showing href in status bar
`onsubmit` | form | form submitted - return `false` to prevent
`onreset` | form | form reset
`onresize` | \<body> \<frameset> | window size changed
`onerror`| \<img> | image fails loading
`onabort` | \<img> | image loading aborted 
`onunload` |\<body>\<frameset> | unloaded

<br>

##Api

Properties

`event.CAPTURING_PHASE = 1`

`event.AT_TARGET = 2`

`event.BUBBLING_PHASE = 3`

`event.bubbles`

`event.cancelable`

`event.clientX, clienY` (relative to browser where the event occurred) <=> `x, y` `pageX, pageY`

`event.offsetX, offsetY` (relative to parent) <=> `layerX, layerY`

`event.screenX, screenY`

`event.currentTarget` (event handler)

`event.target` (source of event)

`event.timestamp`

`event.type`

`event.cancelBubble`

`event.keyCode` ~ `which` `button`

Methods

`event.preventDefault()`

`event.stopPropagation()`




##Declare events

```html

<form onsubmit="validate();">
</form>

<script>
	function validate(){

	}
</script>

```

<br>

```html

<form name="thisForm">
</form>

<script>
	document.thisForm.onsubmit = validate;

	function validate(){

	}
</script>

```

### W3C

    function handler(event){
	
    }

<br>

```javascript

element.addEventListener('click', function(event){
	
}, false);

//=> useCapture = false => it bubbles / first the listener is called then the listeners of children (default)
//=>  useCapture = true => it doesn't bubble

```

<br>

Special fct `hanldeEvent`

```javascript

var Something = function(element) {
  this.name = 'Something Good';
  this.handleEvent = function(event) {
    console.log(this.name); // 'Something Good', as this is the Something object
    switch(event.type) {
      case 'click':
        // some code here...
        break;
      case 'dblclick':
        // some code here...
        break;
    }
  };

  // Note that the listeners in this case are this, not this.handleEvent
  element.addEventListener('click', this, false);
  element.addEventListener('dblclick', this, false);

  // You can properly remove the listners
  element.removeEventListener('click', this, false);
  element.removeEventListener('dblclick', this, false);
}

```

<https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener>

### IE

`window.event`

<br>

```javascript

if (el.addEventListener) {
  el.addEventListener('click', modifyText, false); 
} else if (el.attachEvent)  {
  el.attachEvent('onclick', modifyText);
}

```