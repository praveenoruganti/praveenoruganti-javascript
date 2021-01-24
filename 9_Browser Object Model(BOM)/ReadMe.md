# Browser Object Model(BOM)



BOM(Browser Object Model) represents the current browser window. The main purpose of Browser Object Model is to manipulate the properties and methods which are associated with the browser window.

## Window Object

![screenshot of the app](https://raw.githubusercontent.com/praveenorugantitech/praveenorugantitech-javascript-course/master/images/BOM.PNG)

To access the Browser Object Model(BOM) we can use the window object.
For example,

```javascript
window.document.getElementById('topbar');
document.getElementById('topbar');

window.alert('This is window');
alert('This is without window');

```
This window object also gives us access to some methods like

- setTimeout()
- setInterval()
- alert()
- confirm()
- prompt()
- open()
- close()

For example,

```javascript
confirm("Are you sure?");
prompt("Please enter your name");
open('https://praveenorugantitech.blogspot.com');
close();
```
## Screen Object
The JavaScript screen object holds information of the browser screen. It can be used to display screen width, height, availableWidth, availableHeight, colorDepth, pixelDepth etc.
For example,
```javascript
console.log(`Window Screen Width ${window.screen.width}`);
console.log(`Window Screen Available Width ${window.screen.availWidth}`);
console.log(`Window Screen Height ${window.screen.height}`);
console.log(`Window Screen Available Height ${window.screen.availHeight}`);
```
## Navigator Object
The navigator object contains information about the browser where your application is running.
For example,
```javascript
console.log(window.navigator.userAgent);
console.log(navigator.onLine);
```

## History Object
The JavaScript history object represents an array of URLs visited by the user.

it gives us two methods:
- back()- It loads the previous page from browser history.
- forward()- It loads the next page from browser history.

For example,
```javascript
window.history.back();
window.history.forward();
```

## Location Object
The location object can be used to get the details of the current page address. It can also redirect the browser to a new page in same browser tab.
For example,
```javascript
console.log(location.href);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.search);
location.assign("https://praveenorugantitech.blogspot.com");
```
You can also check out the [Demo](https://praveenorugantitech.github.io/praveenorugantitech-javascript-course/9_Browser%20Object%20Model(BOM)/Demo){:target="_blank"}.

