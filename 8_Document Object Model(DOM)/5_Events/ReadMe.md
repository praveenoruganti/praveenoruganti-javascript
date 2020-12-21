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

You can check out this [color flipper](https://praveenoruganti.github.io/praveenoruganti-js/8_Document%20Object%20Model(DOM)/5_Events/1_Intro%20to%20Events) based on button click event.

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

Also refer the [page](https://praveenoruganti.github.io/praveenoruganti-js/8_Document%20Object%20Model(DOM)/5_Events/2_Form%20Events) and see the browser console.

## Keyboard Events

The keyboard events are triggered when the user clicks a key from the keyboard.

There are 3 keyboard events:
- keydown: It is triggered when any key pressed on the keyboard.
- keyup: It is triggered when any key is released after it's keydown event.
- keypress: It is triggered when any key except Shift, Function, capsLock is in pressed position.

Also refer the [page](https://praveenoruganti.github.io/praveenoruganti-js/8_Document%20Object%20Model(DOM)/5_Events/3_Keyboard%20Events)

You can also refer the [JavaScript Drum Kit](https://praveenoruganti.github.io/praveenoruganti-js/0_Projects/praveenoruganti-drum-kit)

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

**Note:** You can also refer the [documentation](https://developer.mozilla.org/en-US/docs/Web/Events) to learn more about events.

### [Buy me a Coffee](http://bit.ly/2WryDT8)