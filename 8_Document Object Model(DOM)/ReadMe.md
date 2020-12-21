# Document Object Model(DOM)

When a web page is loaded, the browser creates a Document Object Model of the page. It is the tree representation of the HTML document. This DOM tree can be modified with the help of JavaScript.
## JavaScript and DOM

- JavaScript can add new HTML elements and attributes.
- JavaScript can change any HTML elements and attributes in the page.
- JavaScript can change all the CSS styles in the page.
- JavaScript can remove existing HTML elements and attributes.
- JavaScript can add and listen to HTML events like onClick, onScroll etc.

## Selecting HTML Element using JavaScript
- **getElementById('html-element-id')**
  
  getElementById is a DOM Method. It accepts the HTML element id and returns the HTML element matching that Id.
  For example, document.getElementById('topbar')
  
  if no elements matches the id then it returns null.

- **getElementsByClassName('html-class-string')**
  
  getElementsByClassName is a DOM method. It accepts the HTML class string and returns all the HTML elements matching that class.
  For example, document.getElementsByClassName('menu-item')
  
  if no elements match the class then it returns an empty array

- **getElementsByTagName('html-tag-string')** 
  
  getElementsByTagName is a DOM method. It accepts the HTML tag string and returns all the HTML elements matching that tag.
  For example, document.getElementsByTagName('span')

  if no elements match the tag name then it returns an empty array.
 
**Query Selectors**
Query Selectors allow you to use CSS selectors to select HTML elements. It is the new way in JavaScript to select HTML elements.

There are 2 such selectors:
- **querySelector('css-selector-string')**
  
  It accepts the CSS Selector string and returns only the first HTML element matching the query.
  For example, document.querySelector('#topbar span')

  If no elements match the selector string then it returns null.

- **querySelectorAll('css-selector-string')**

  It accepts the CSS Selector string and returns all the HTML elements matching the query.
  For example, document.querySelectorAll('#topbar span')

  If no elements match the selector string then it returns an empty array.

**Note**
- Query Selectors are not supported by IE 7 and below version
- getElementById is faster than querySelector

## Update HTML Content and Attributes using JavaScript
We can update the content of HTML element by selecting the element with innerHTML property as shown below
```javascript
let countdownElement = document.getElementById("countdown");
let initialCountdownVal = countdownElement.innerHTML;
```
We can update the attribute by selecting the HTML element and name of the attribute as shown below
```javascript
let bgImageElement = document.getElementById("bg-image");
bgImageElement.src = backImgPath;
```
You can check the [Counter](https://praveenoruganti.github.io/praveenoruganti-js/8_Document%20Object%20Model(DOM)/2_Update%20HTML%20Content_Attributes_Styles) for reference.

## Update Styles of HTML Elements
**Syntax**
```javascript
let selectedElement = getElementById('selector')// querySelector('selector)
selectedElement.style.{propertyName}= value;
```
**Example**
```javascript
selectedElement.style.width='300px'
```
## Add/Remove Classes using JavaScript
The modern browsers give us access to a property called 'classList'. This classList holds all the classes of an HTML element.

**Add Class:**
We can us the method add().

Syntax: selectedElement.classList.add('MyClass');

**Example**
```javascript
let selectedElement= getElementById('selector'); // querySelector('selector')
selectedElement.classList.add('show');
```
**Remove Class:**
We can us the method remove().

Syntax: selectedElement.classList.remove('MyClass');
For example,
```javascript
let selectedElement= getElementById('selector'); // querySelector('selector')
selectedElement.classList.remove('show');
```
## Get Element styles values using JavaScript
There are two ways we can get Element style value:
let selectedElement= getElementById('selector'); // querySelector('selector')
**Inline Styles:**
Syntax: selectedElement.style.{inline-style-property}
For example,
```javascript
selectedElement.style.width
```
**CSS File:**
Syntax: window.getComputedStyle(selectedElement).{style-property-name}
For example,
```javascript
window.getComputedStyle(selectedElement).width
```
## Events
When some action happens in the webpage, that action is called event.
For example,
- The user clicking the mouse over a certain element.
- The user hovering the cursor over a certain element.
- The user pressing a key on the keyboard.
- The user resizing or closing the browser window.
- A webpage finished loading.
- A form being submitted.
- A video played, or paused, or finishing play.

**How to handle events in JavaScript?**
There are two ways we can handle events:
```javascript
let selectedElement= getElementById('selector'); // querySelector('selector)
```
Method1: Using **Event Properties**
Syntax: selectedElement.{eventProperty}= function(){}
For example,
```javascript
selectedElement.onclick= function(){}
```
Method2: Using **addEventListener()**
Syntax: selectedElement.addEventListener({eventName}, function(){})
For example,
```javascript
selectedElement.addEventListener('click',function(){})
```
You can check out this [color flipper](https://praveenoruganti.github.io/praveenoruganti-js/8_Document%20Object%20Model(DOM)/3_Events/1_Intro%20to%20Events) based on button click event.

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

Also refer the [page](https://praveenoruganti.github.io/praveenoruganti-js/8_Document%20Object%20Model(DOM)/3_Events/2_Form%20Events) and see the browser console.

## Keyboard Events
The keyboard events are triggered when the user clicks a key from the keyboard.
There are 3 keyboard events:
- keydown: It is triggered when any key pressed on the keyboard.
- keyup: It is triggered when any key is released after it's keydown event.
- keypress: It is triggered when any key except Shift, Function, capsLock is in pressed position.

Also refer the [page](https://praveenoruganti.github.io/praveenoruganti-js/8_Document%20Object%20Model(DOM)/3_Events/3_Keyboard%20Events)

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