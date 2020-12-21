# Selecting HTML Element using JavaScript

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


### [Buy me a Coffee](http://bit.ly/2WryDT8)