# JavaScript setTimeout and clearTimeout

### JavaScript setTimeout()
The setTimeout() method executes a block of code after the specified time. The method executes the code only once.
The commonly used syntax of JavaScript setTimeout is:
```javascript
setTimeout(function, milliseconds);
```
Its parameters are:
- function - a function containing a block of code
- milliseconds - the time after which the function is executed

The setTimeout() method returns an intervalID, which is a positive integer.

For Example,

```HTML
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>All About setTimeout</title>
    <script src="script.javascript" defer></script>
</head>
<body>
    <h1> setTimeout()</h1>
    <button id="show-message">Show Message</button>
</body>
</html>
```
```javascript
const btnShowMsg = document.getElementById("show-message");

let intervalID;

btnShowMsg.addEventListener("click", function () {
  intervalID = setTimeout(function () {
    alert(
      'Checkout my tech Website \n "https://praveenorugantitech.blogspot.com"'
    );
  }, 2000);
});

```
### JavaScript clearTimeout()
As you have seen in the above example, the program executes a block of code after the specified time interval. If you want to stop this function call, you can use the clearTimeout() method.

The syntax of clearTimeout() method is:
```javascript
clearTimeout(intervalID);
```
Here, the intervalID is the return value of the setTimeout() method.

**Note**: You generally use the clearTimeout() method when you need to cancel the setTimeout() method call before it happens.

For example,

```HTML
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>All About setTimeout and clearTimeout</title>
    <script src="script.javascript" defer></script>
</head>
<body>
    <h1> setTimeout() and clearTimeout()</h1>
    <button id="show-message">Show Message</button>
    <button id="cancel-message">Cancel Message</button>
</body>
</html>
```
```javascript
const btnShowMsg = document.getElementById("show-message");
const btnCancelMsg = document.getElementById("cancel-message");

let intervalID;

btnShowMsg.addEventListener("click", function () {
  intervalID = setTimeout(function () {
    alert(
      'Checkout my tech Website \n "https://praveenorugantitech.blogspot.com"'
    );
  }, 2000);
});

btnCancelMsg.addEventListener("click", function () {
  clearTimeout(intervalID);
});

```

You can check out the [Demo](https://praveenorugantitech.github.io/praveenorugantitech-vanilla-js/15_setTimeout_clearTimeout/Demo).

![screenshot of the app](https://raw.githubusercontent.com/praveenorugantitech/praveenorugantitech-vanilla-js/master/images/setTimeout%20and%20clearTimeout.PNG)

### [Buy me a Book](https://bit.ly/388sUbE)


