# JavaScript Basics

## What is JavaScript?
JavaScript (or "JS") is a programming language used most often for dynamic client-side scripts on webpages, but it is also often used on the server-side, using a runtime such as Node.js.

### History of JavaScript
1995 - Netscape created Livescript<br>
1997 - ECMAScript1 was released<br>
2009 - ECMAScript5(ES5) was released<br>
2015 - ECMAScript5(ES2015 - ES6) was released -> This is widely used<br>
2016 - ECMAScript5(ES2016 - ES7) was released<br>
2017 - ECMAScript5(ES2017 - ES8) was released<br>
2018 - ECMAScript5(ES2018 - ES9) was released<br>

### Tools needed
- Web Browser([Chrome](https://www.google.com/chrome/?brand=CHBD&brand=FKPE&gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6IjMi1GbbkXQKjcpNOnOQVuXI8nmkx54QpyhTUpiDVEXAI32lHhvToaAtE-EALw_wcB&gclsrc=aw.ds))
- Code Editor([VSCode](https://code.visualstudio.com/download))
# How To Write JavaScript

In two ways we can do this

- **Write code in the script tag in HTML and it can be included in head tag or body tag or after body tag based on the scenario.**

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <title> How To Write JavaScript</title>

</head>

<body>
<h1> How to Write JavaScript</h1>
</body>
<script>
    console.log("How To Write JavaScript")
</script>
</html>
```
- **We can create a js file and include in script tag in HTML using src attribute**

```javascript
console.log("Welcome to Praveen Oruganti JavaScript Tutorials")
```

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <title> How To Write JavaScript</title>

</head>

<body>
<h1> How to Write JavaScript</h1>
</body>
<script>
    console.log("How To Write JavaScript")
</script>
<script src="script.js"></script>
</html>
```