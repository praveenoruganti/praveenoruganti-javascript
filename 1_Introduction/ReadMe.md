# JavaScript Introduction

## What is JavaScript?
JavaScript (or "JS") is a programming language used most often for dynamic client-side scripts on webpages, but it is also often used on the server-side, using a runtime such as Node.js.

## History of JavaScript
1995 - Netscape created Livescript<br>
1997 - ECMAScript1 was released<br>
2009 - ECMAScript5(ES5) was released<br>
2015 - ECMAScript5(ES2015 - ES6) was released -> This is widely used<br>
2016 - ECMAScript5(ES2016 - ES7) was released<br>
2017 - ECMAScript5(ES2017 - ES8) was released<br>
2018 - ECMAScript5(ES2018 - ES9) was released<br>

## Advantages of JavaScript
- **Less server interaction**  You can validated user input before sending the page off to the server. This saves server traffic, which means less load on your server.
- **Immediate feedback to the visitors** They don't have to wait for a page to reload to see if they have forgotten to enter something.
- **Increased interactivity** You can create interfaces that react when the user hovers over them with a mouse or activates them via the keyboard.
- **Rich interfaces** You can use JavaScript to include such items as drag and drop components and sliders to have a Rich interface to your site visitors.

## Disadvantages of JavaScript
- **Client-Side Security**  Since JavaScript code is executed on the client-side, bugs and oversights can sometimes be exploited for malicious purposes. Because of this, some people choose to disable JavaScript entirely.
- **Browser Support**  While server-side scripts always produce the same output, different browsers sometimes interpret JavaScript code differently. These days the differences are minimal, and you shouldn't have to worry about it as long as you test your script in all major browsers.

## Tools needed
- Web Browser([Chrome](https://www.google.com/chrome/?brand=CHBD&brand=FKPE&gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6IjMi1GbbkXQKjcpNOnOQVuXI8nmkx54QpyhTUpiDVEXAI32lHhvToaAtE-EALw_wcB&gclsrc=aw.ds))
- Code Editor([VSCode](https://code.visualstudio.com/download))


## How To Write JavaScript
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
## How JavaScript Works?

To be able to see the bigger picture of some piece of code you must know how that particular programming language works under the hood.

Everything in JavaScript happens inside an Execution Context.


JavaScript is a synchronous single-threaded language.

**Execution Context and Window Object**
Every block of code written to work properly it needs some environment when it can run, and it is no different for the JavaScript too. Say hi to the Execution Context which is the place where the JavaScript code is running. To have a picture of the Execution Context, think of it like some kind of box, container or wrapper which stores variables and which a piece of JavaScript code is evaluated and executed.

**Global Execution Context**
The default execution context is the global execution context, which means all of the code (variables and functions) that is not inside of any function is executed. You can think of this Global Execution Context as some global object which is the window object. Everything that we declare in the global context is attached to the window object, for example:

```javascript
var firstName = "Praveen";
console.log(firstName === window.firstName) // True
```
Declaring the variable firstName or window.firstName is the same thing, think of it like firstName is a property of window object.

**Function Execution Context**
What about the code that is in functions? each time we call a function, that function is getting a new execution context called function execution context on the top of the execution stack. Let's see some practical example:

```javascript
var name="Praveen";
function first(){
  var a = "Hello";
  second();
  var x = a + name;
}

function second(){
  var b = "Hi";
  third();
  var z = b + name;
}

function third(){
  var c = "Hola";
  var z = c + name;
}

first();

```
Our first declaration, the variable name is not in any function, which means we are in the global execution context. The function first(), function second() and function third() declarations are also in the same execution context. When we go to the last line where the first() function is called, we will get a new execution context on the top of the execution stack. Every execution context that is on the top of the execution stack becomes an active context in which the code is executed.

Now inside our new execution context, we have a **variable a** stored, on the next line we call the second function which again new execution context will be created on top of the execution stack, which also now becomes an active context.

Here inside the execution context of the second function, we have a **variable b** stored. we are calling the third function which will again create a new execution context on top of the execution stack.

Inside the execution context of the third function, we have a **variable c and z** and nothing more. So our third function has finished all of its work and we say that the function returns, and it's execution context it's removed from the top of the execution stack.

After that, the context of the second function which called the third function becomes the active context again, and we continue. Now the **z variable** is updated and the second function finishes all of its work and returns, which it's execution context is also removed from the stack.

Now the context of the first function is again the active context, and the code continues where the **x variable** is updated and because there is no more work to be done inside the first function, we say again that the function returns and its execution context is removed from the execution stack.

**How Execution Context is Created**
As we said before we can associate an execution context with an object, this object has three properties:

- **Variable Object (VO)** which contains function arguments, inner variable declarations and functions declarations.
- **Scope Chain** which contains the current variable objects as well as the variable objects of all of its parents.
- **"This" variable** which is pointing to the current object.

Now let's see how the execution context is created. As we said before when a function is started an execution context is put on top of the execution stack, this process happens in two phases:
- Creation phase
- Execution phase

In the creation phase we first have the creation of the Variable Object, second the creation of the Scope Chain, and at the end "this" variable is set. In the execution phase, the code that generated the current execution context is run line by line, and all of the variables are defined. If it is the global context, then it is the global code that is executed.

Call stack maintains the order of the execution of execution contexts.

## Hoisting

Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope.

For e.g. Current scope could be the current script or the current function where they declared.

This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

Hoisting moves declaration to the top of current scope but not value assigned into it.

If without declaring an variable, we start to assign value into it, then It becomes by default Global variable.

it is recommended to always declare variables regardless of whether they are in a function or global scope.

```javascript
// Example1: We can use a variable before it is declared
num = 50;
console.log(num); // 50
var num;

// Example2: Hoisting moves the declarations to top but not the assignments.
var num1;
console.log(num1); // undefined
num1 = 100;

// Example3: If variable not declared anywhere then it becomes Global.

function test(){
    num2=200;
    var num3=300;

}

test();
console.log(num2); // 200
console.log(num3); // ReferenceError: num3 is not defined

```

You can check out the [Demo](https://praveenoruganti.github.io/praveenorugantitech-vanilla-js/1_Introduction/Demo).

### [Buy me a Book](https://bit.ly/388sUbE)

