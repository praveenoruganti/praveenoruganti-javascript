# Events

When some action happens in the webpage, that action is called event.

For example,
- The user clicking the mouse over a certain element.
- The user hovering the cursor over a certain element.
- The user pressing a key on the keyboard.
- The user resizing or closing the browser window.
- A webpage finished loading.
- A form being submitted.
- A video played, or paused, or finishing play.

## How to handle events in JavaScript?

There are two ways we can handle events:

```javascript
let selectedElement= getElementById('selector'); // querySelector('selector)
```
**Method1: Using Event Properties**

Syntax: selectedElement.{eventProperty}= function(){}

For example,
```javascript
selectedElement.onclick= function(){}
```
**Method2: Using addEventListener()**

Syntax: selectedElement.addEventListener({eventName}, function(){})

For example,
```javascript
selectedElement.addEventListener('click',function(){})
```
You can check out the Demo for [Color Flipper](https://praveenoruganti.github.io/praveenoruganti-vanilla-js/8_Document%20Object%20Model(DOM)/2_Events/Demo/Color%20Flipper) based on button click event.

**Different phases of events - capture, target, bubble**
When an event moves through the DOM - whether bubbling up or trickling down - it is called event propagation. The event propagates through the DOM tree.

Events happen in two phases: the bubbling phase and the capturing phase.

In capture phase, also called the trickling phase, the event "trickles down" to the element that caused the event.

It starts from the root level element and handler, and then propagates down to the element. The capture phase is completed when the event reaches the target.

In the bubble phase, the event is "bubbled" up to the DOM tree. It is first captured and handled by the innermost handler (the one that is closest to the element on which the event occurred). It then bubbles up (or propagates up) to the higher levels of DOM tree, further up to its parents, and then finally to its root.

One thing to note is that, whether you register an event handler in either phase, both phases ALWAYS happen. All events bubble by default.

You can register event handlers for either phase, bubbling or capturing, by using the function addEventListener(type, listener, useCapture). If useCapture is set to false, the event handler is in the bubbling phase. Otherwise it's in the capture phase.

The order of the phases of the event depends on the browser.

Lets see Form, Keyboard and Mouse Events now.
## Form Events

Here with the Form Events
- change: The change event is triggered when the content of an input field is changed or when the user selects a value from the dropdown etc.
- focus: The focus event is triggered when the input field is focused by the user
- blur: The blue event is triggered when the input field loses focus.
- submit: The submit event is triggered when the submit button is clicked by the user.

For example,

```javascript

let username = document.getElementById("username");
let loginForm = document.getElementById("login-form");
username.addEventListener("input", (event) => {
  let currentValue = event.target.value;
  currentValue = currentValue.toUpperCase();
  console.log(currentValue);
  username.value = currentValue;
});

username.addEventListener("focus", () => {
  console.log("Element Focussed");
});

username.addEventListener("blur", () => {
    console.log("Element Lost Focus");
  });

  loginForm.addEventListener("submit", (event) => {
    alert("Submit Button Clicked");
    event.preventDefault();
  });

```

You can check out the Demo for [Form Events](https://praveenoruganti.github.io/praveenoruganti-vanilla-js/8_Document%20Object%20Model(DOM)/2_Events/Demo/Form%20Events).


## Keyboard Events

The keyboard events are triggered when the user clicks a key from the keyboard.

There are 3 keyboard events:
- keydown: It is triggered when any key pressed on the keyboard.
- keyup: It is triggered when any key is released after it's keydown event.
- keypress: It is triggered when any key except Shift, Function, capsLock is in pressed position.

You can check out the Demo for [Form Events](https://praveenoruganti.github.io/praveenoruganti-vanilla-js/8_Document%20Object%20Model(DOM)/2_Events/Demo/Keyboard%20Events).

You can also check out Demo for [Drum Kit](https://praveenoruganti.github.io/praveenoruganti-vanilla-js/0_Projects/praveenoruganti-drum-kit)

## Mouse Events

The Mouse events are triggered when the different mouse keys are pressed and/or released.

These are the mouse events available:
- mousedown: Mousedown event is triggered when either the left or right(or middle) mouse key is pressed on the HTML element.
- mouseup: Mouseup event is triggered when either the left or right(or middle) mouse key is released after the mousedown event.
- click: Click event is triggered when the left mouse button is pressed and released on the same HTML element, it requires the mousedown and mouseup event to happen before click event.
- dblclick: DoubleClick event is triggered when the left mouse button is clicked twice on the same HTML element.
- mouseover: Mouse over event is triggered when the mouse pointer enters the HTML element, and its child elements.
- mouseenter: Mouse enter event is triggered when the mouse pointer enters the HTML element.
- mousemove: Mouse move event is triggered every time the mouse pointer is moved over the HTML element.

For example,

```javascript
let btn = document.getElementById("top-btn");

btn.addEventListener("mousedown", () => {
  console.log("Mouse Down Event");
});

btn.addEventListener("mouseup", () => {
  console.log("Mouse Up Event");
});

btn.addEventListener("click", () => {
  console.log("Click Event");
});

btn.addEventListener("dblclick", () => {
  console.log("Double Click Event");
});

btn.addEventListener("mouseover", () => {
  console.log("Mouse Over Event");
});

btn.addEventListener("mousemove", () => {
  console.log("Mouse Move Event");
});

```

You can check out the Demo for [Mouse Events](https://praveenoruganti.github.io/praveenoruganti-vanilla-js/8_Document%20Object%20Model(DOM)/2_Events/Demo/Mouse%20Events).

You can also check out the Demo for [Magic Color Changer](https://praveenoruganti.github.io/praveenoruganti-vanilla-js/8_Document%20Object%20Model(DOM)/2_Events/Demo/Magic%20Color%20Changer).

**Note:** You can also refer the [documentation](https://developer.mozilla.org/en-US/docs/Web/Events) to learn more about events.

### [Buy me a Book](https://www.buymeacoffee.com/praveenoruganti)

### Connect with me:

[<img align="left" alt="praveenorugantitech.blogspot.com" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website]
[<img align="left" alt="praveenoruganti | Facebook Group" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg" />][facebookgroup]
[<img align="left" alt="praveenoruganti | Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />][twitter]
[<img align="left" alt="praveenoruganti | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]
[<img align="left" alt="praveenoruganti | Email" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gmail.svg" />][email]

<br/>

[website]: https://praveenorugantitech.blogspot.com
[twitter]: https://mobile.twitter.com/praveenoruganti
[facebookgroup]: https://www.facebook.com/groups/praveenorugantitech
[instagram]: https://instagram.com/praveenorugantitech
[email]: mailto:praveenorugantitech@gmail.com
