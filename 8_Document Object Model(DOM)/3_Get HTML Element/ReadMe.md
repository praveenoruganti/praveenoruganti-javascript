# Get HTML Element


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
