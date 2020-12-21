# Update HTML Content,Attributes and Styles using JavaScript


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
