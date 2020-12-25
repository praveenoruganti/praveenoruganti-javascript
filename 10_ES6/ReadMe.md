# JavaScript ES6

### JavaScript let

JavaScript let is used to declare variables. Previously, variables were declared using var statements.

The variables declared using let are block-scoped. This means they are only accessible within a particular block.

```javascript
// variable declared using let
let age=34;
console.log(age); // 34
age=35;
console.log(age);// 35
```

### JavaScript const
The const statement is used to declare constants in JavaScript.
```javascript
// name declared with const cannot be changed
const name = 'Praveen Oruganti';
```
Once declared, you cannot change the value of a const variable.

### JavaScript Arrow Function

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

### JavaScript Template Literals

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

### Default Parameter Values
In the ES6 version, you can pass default values in the function parameters.
For example,
```javascript
function sub(a, b = 0) {
  return console.log(a - b);
}
sub(5, 2); // 7
sub(5); // 5
```

### JavaScript Destructuring

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

### JavaScript Rest Operator
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


You can also check out the [Demo](https://praveenoruganti.github.io/praveenoruganti-vanilla-js/10_ES6/Demo).

### [Buy me a Coffee](http://bit.ly/2WryDT8)

