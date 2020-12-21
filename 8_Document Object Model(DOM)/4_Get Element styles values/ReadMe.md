# Get Element styles values using JavaScript

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

### [Buy me a Coffee](http://bit.ly/2WryDT8)