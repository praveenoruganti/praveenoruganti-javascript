# Select,Update,Create HTML Element Content,Attribute and Styles


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

We can update the content of HTML element by selecting the element with innerHTML property as shown below.
```javascript
let countdownElement = document.getElementById("countdown");
let initialCountdownVal = countdownElement.innerHTML;
```

We can update the attribute by selecting the HTML element and name of the attribute as shown below
```javascript
let bgImageElement = document.getElementById("bg-image");
bgImageElement.src = backImgPath;
```
You can check the [Counter](https://praveenoruganti.github.io/praveenoruganti-js/8_Document%20Object%20Model(DOM)/1_Select_Update_Create_HTML%20Element%20Content_Attribute_Styles/Example2/) for reference.


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

### [Buy me a Coffee](http://bit.ly/2WryDT8)
