# All About Modifying HTML Elements

## Select HTML Elements

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

You can check out the [Demo](https://praveenoruganti.github.io/praveenorugantitech-vanilla-js/8_Document%20Object%20Model(DOM)/1_HTML%20Elements/Demo/Select%20HTML%20Elements).

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

You can check out the [Demo](https://praveenoruganti.github.io/praveenorugantitech-vanilla-js/8_Document%20Object%20Model(DOM)/1_HTML%20Elements/Demo/OOPS).

# Add/Remove Classes using JavaScript

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

## Create HTML Elements

To add a new element to the HTML DOM, we need to create the element (element node) first, and then append it to an existing element.

For example,

```HTML
<ul id="todo-list">
    <li id="item1">List Item 1</li>
    <li id="item2">List Item 2</li>
</ul>
```

```javascript
let list = document.getElementById("todo-list");
let newListElement = document.createElement("li");
let textNode = document.createTextNode("List Item 3");
newListElement.appendChild(textNode);
newListElement.id = "item3";
list.appendChild(newListElement);

```

**Creating HTML Elements using insertBefore()**

The appendChild() method in the previous example, appended the new element as the last child of the parent.

If you don't want that you can use the insertBefore() method:

For example,


```HTML
<ul id="todo-list">
    <li id="item1">List Item 1</li>
    <li id="item2">List Item 2</li>
</ul>
```

```javascript
let list = document.getElementById("todo-list");
let firstItem = document.getElementById("item1");
let beforeElement = document.createElement("li");
let beforeTextNode = document.createTextNode("List Item 0");
beforeElement.appendChild(beforeTextNode);
console.log(beforeElement);
beforeElement.id = "item0";
// For adding Element before First Item
list.insertBefore(beforeElement, firstItem);

```
**Update HTML Element**

We need to use replaceChild() method for updating the HTML Element.
For example,
```javascript
 let firstElement = list.firstElementChild;
  let newListElement = createNewNode();
  if (firstElement) {
    list.replaceChild(newListElement, firstElement);
  } else {
    alert("There is no Todo Item to update");
  }
```

**Delete HTML Element**

We need to use removeChild() method for deleting the HTML Element.
For example,
```javascript
let firstElement = list.firstElementChild;
  if (firstElement) {
    list.removeChild(firstElement);
  } else {
    alert("There is no Todo Item to delete");
  }
```

You can check out the  Demo for [Todo Items](https://praveenoruganti.github.io/praveenorugantitech-vanilla-js/8_Document%20Object%20Model(DOM)/1_HTML%20Elements/Demo/Todo) for Creating, Updating and Deleting HTML elements.

You can also check out the Demo for [Counter](https://praveenoruganti.github.io/praveenorugantitech-vanilla-js/8_Document%20Object%20Model(DOM)/1_HTML%20Elements/Demo/Counter).

You can also check out the Demo for [Sorting](https://praveenoruganti.github.io/praveenorugantitech-vanilla-js/8_Document%20Object%20Model(DOM)/1_HTML%20Elements/Demo/Sorting).

### [Buy me a Book](https://bit.ly/388sUbE)
