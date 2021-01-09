# JavaScript ES6

## JavaScript let

JavaScript let is used to declare variables. Previously, variables were declared using var statements.

The variables declared using let are block-scoped. This means they are only accessible within a particular block.

```javascript
// variable declared using let
let age=34;
console.log(age); // 34
age=35;
console.log(age);// 35
```

## JavaScript const
The const statement is used to declare constants in JavaScript.
```javascript
// name declared with const cannot be changed
const name = 'Praveen Oruganti';
```
Once declared, you cannot change the value of a const variable.

**let and const wrap up**
- The keywords let and const add block scoping in JavaScript.
- When we declare a variable as let, we cannot re-define or re-declare another let variable with the same name in the same scope (function or block scope) but we can re-assign a value to it.
- When we declare a variable as const, we cannot re-define or re-declare another const variable with the same name in the same scope (function or block scope). But we can change the values stored in that variable if the variable is of a reference type like an array or object.

## JavaScript Arrow Function

In the ES6 version, you can use arrow functions to create function expressions.
For Example,

```javascript
function add(a,b){
    return console.log(a+b);
}
```
can be written as
```javascript
const add = (a, b) => console.log(a + b);
```

## JavaScript Template Literals

The template literal has made it easier to include variables inside a string.
For example,
```javascript
const greeting = (name) => {
  const message= 'Hello , '+ name +'!';
  console.log(message);
};
```
This can be achieved using template literal by:
const greeting = (name) => {
  const message = `Hello , ${name}!`;
  console.log(message);
};

## Default Parameter Values
In the ES6 version, you can pass default values in the function parameters.
For example,
```javascript
function sub(a, b = 0) {
  return console.log(a - b);
}
sub(5, 2); // 7
sub(5); // 5
```

## JavaScript Destructuring

The destructuring syntax makes it easier to assign values to a new variable.

For example,

```javascript
// array destructuring
const array = [1, 2, 3];
const [first, second,third] = array;
console.log(first, third);

// object destructuring
const FacebookGroup ={
    groupName :'Full Stack Development',
    users : 10000,
};
const {groupName,users} = FacebookGroup;
console.log(groupName,users);
```

## JavaScript Rest Operator
You can use the rest operator to represent an indefinite number of arguments as an array.
For example,
```javascript
const add3 =(...numbers) => console.log(numbers.reduce((a,b) => a+b,0));
add3(1,2,3,4,5); // 15
```

### JavaScript Spread Operator
You can use the spread syntax ... to copy the items into a single array.
For example,
```javascript
let arr1 = ['one', 'two'];
let arr2 = [...arr1, 'three', 'four', 'five'];
console.log(arr2); // ["one", "two", "three", "four", "five"]
```
Both the rest parameter and the spread operator use the same syntax. However, the spread operator is used with arrays (iterable values).

## JavaScript Promises
A Promise is a special JavaScript object. It produces a value after an asynchronous (aka, async) operation completes successfully, or an error if it does not complete successfully due to time out, network error, and so on.

Successful call completions are indicated by the resolve function call, and errors are indicated by the reject function call.

**How to create a Promise**
To create a promise we need to use the Promise constructor function like this:
```javascript
const promise = new Promise(function(resolve, reject) {
 
});
```
The Promise constructor takes a function as an argument and that function internally receives resolve and reject as parameters.

The resolve and reject parameters are actually functions that we can call depending on the outcome of the asynchronous operation.

A Promise goes through three states:
- Pending: It means the operation is going on.
- Fulfilled: It means the operation was completed
- Rejected: It means the operation did not complete and an error can be thrown.

When we create a promise, it’s in a pending state. When we call the resolve function, it goes in a fulfilled state and if we call reject it will go in the rejected state.

However,
- To get the result of the successful promise execution, we need to register a callback using .then()
- To catch the error, we need to register another callback using .catch().

```javascript
promise.then(function(result) {
 console.log(result);
}).catch(function(error) {
 console.log(error);
});
```

Lets see an example with Asynchronous API call,

```javascript
const url = "https://jsonplaceholder.typicode.com/posts";

getPosts_Promise().then((posts) => {
  console.log(posts.length);
});

function getPosts_Promise() {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

```
**Promise chaining**
We can add multiple .then handlers to a single promise like this:
```javascript
promise.then(function(result) {
 console.log('first .then handler');
 return result;
}).then(function(result) {
 console.log('second .then handler');
 console.log(result);
}).catch(function(error) {
 console.log(error);
});
```

## ES6 Import And Export Syntax

Before ES6 came into play, we used multiple script tags in a single HTML file to import different JavaScript files like this:
```HTML
<script type="text/javascript" src="home.js"></script>
<script type="text/javascript" src="profile.js"></script>
<script type="text/javascript" src="user.js"></script>
```
So, if we had a variable with the same name in different JavaScript files, it would create a naming conflict and the value you were expecting would not be the actual value you got.

ES6 has fixed this issue with the concept of modules.

Every JavaScript file we write in ES6 is known as a module. The variables and functions we declare in each file are not available to other files until we specifically export them from that file and import them into another file.

So the functions and variables defined in the file are private to each file and can’t be accessed outside the file until we export them.

**There are two types of exports:**
- Named Exports: There can be multiple named exports in a single file.
- Default Exports: There can be only one default export in a single file.

**Named Exports in JavaScript**
To export a single value as a named export, we export it like this:
```javascript
export const temp = "This is some dummy text";
```
If we have multiple things to export, we can write an export statement on a separate line instead of in front of variable declaration. We specify the things to export in curly brackets.

```javascript
const temp1 = "This is some dummy text1";
const temp2 = "This is some dummy text2";
export { temp1, temp2 };
```
Note that the export syntax is not an object literal syntax. So in ES6, to export something we can't use key-value pairs like this:

```javascript
// This is invalid syntax of export in ES6
export { key1: value1, key2: value2 }

```

To import the things we exported as a named export, we use the following syntax:

```javascript
import { temp1, temp2 } from './filename';
```
**Note** that while importing something from the file, we don't need to add the .js extension to the filename as it's considered by default.

```javascript
// import from functions.js file from current directory
import { temp1, temp2 } from './functions';

// import from functions.js file from parent of current directory
import { temp1 } from '../functions';
```
One thing to note is that the name used while exporting has to match the name we use while importing.

The order in which we import the multiple named exports is not important.

You can also check out the [Demo](https://praveenorugantitech.github.io/praveenorugantitech-javascript/10_ES6/Demo).






