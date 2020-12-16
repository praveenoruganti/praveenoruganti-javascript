# JavaScript Function

A function is a block of code that performs a specific task.

Suppose you need to create a program to create a circle and color it. You can create two functions to solve this problem:

a function to draw the circle
a function to color the circle
Dividing a complex problem into smaller chunks makes your program easy to understand and reusable.

JavaScript also has a huge number of inbuilt functions. For example, Math.sqrt() is a function to calculate the square root of a number.

### Declaring a Function
The syntax to declare a function is:

```javascript
function nameOfFunction () {
    // function body
}
```
- A function is declared using the function keyword.
- The basic rules of naming a function are similar to naming a variable. It is better to write a descriptive name for your function. For example, if a function is used to add two numbers, you could name the function add or addNumbers.
- The body of function is written within {}.

```javascript
// declaring a function named greet()
function greet() {
    console.log("Hello there");
}
```
### Calling a Function
In the above program, we have declared a function named greet(). To use that function, we need to call it.

Here's how you can call the above greet() function.

```javascript
// function call
greet();
```

```javascript
// program to print a text
// declaring a function
function greet() {
    console.log("Hello there!");
}

// calling the function
greet();
```

### Function Parameters
A function can also be declared with parameters. A parameter is a value that is passed when declaring a function.

```javascript
// program to print the text
// declaring a function
function greet(name) {
    console.log("Hello " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: ");

// calling function
greet(name);
```
In the above program, the greet function is declared with a name parameter. The user is prompted to enter a name. Then when the function is called, an argument is passed into the function.

Note: When a value is passed when declaring a function, it is called parameter. And when the function is called, the value passed is called argument.

```javascript
// program to add two numbers using a function
// declaring a function
function add(a, b) {
    console.log(a + b);
}

// calling functions
add(3,4);
add(2,9);
```

### Function Return
The return statement can be used to return the value to a function call.

The return statement denotes that the function has ended. Any code after return is not executed.

If nothing is returned, the function returns an undefined value.

```javascript
// program to add two numbers
// declaring a function
function add(a, b) {
    return a + b;
}

// take input from the user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

// calling function
let result = add(number1,number2);

// display the result
console.log("The sum is " + result);
```

### Benefits of Using a Function
- Function makes the code reusable. You can declare it once and use it multiple times.
- Function makes the program easier as each small task is divided into a function.
- Function increases readability.

## Function Expressions

In Javascript, functions can also be defined as expressions.

```javascript
// program to find the square of a number
// function is declared inside the variable
let x = function (num) { return num * num };
console.log(x(4));

// can be used as variable value for other variables
let y = x(3);
console.log(y);
```

## JavaScript Variable Scope

Scope refers to the availability of variables and functions in certain parts of the code.

In JavaScript, a variable has two types of scope:

- Global Scope
- Local Scope

### Global Scope

A variable declared at the top of a program or outside of a function is considered a global scope variable.

```javascript
// program to print a text 
let a = "hello";

function greet () {
    console.log(a);
}

greet(); // hello
```

```javascript
// program to show the change in global variable
let a = "hello";

function greet() {
    a = 3;
}

// before the function call
console.log(a);

//after the function call
greet();
console.log(a); // 3
```
Note: It is a good practice to avoid using global variables because the value of a global variable can change in different areas in the program. It can introduce unknown results in the program.

In JavaScript, a variable can also be used without declaring it. If a variable is used without declaring it, that variable automatically becomes a global variable.

```javascript
function greet() {
    a = "hello"
}

greet();

console.log(a); // hello

```

In the above program, variable a is a global variable.

If the variable was declared using let a = "hello", the program would throw an error.

Note: In JavaScript, there is "strict mode"; in which a variable cannot be used without declaring it.

### Local Scope
A variable can also have a local scope, i.e it can only be accessed within a function.

```javascript
// program showing local scope of a variable
let a = "hello";

function greet() {
    let b = "World"
    console.log(a + b);
}

greet();
console.log(a + b); // error

```
In the above program, variable a is a global variable and variable b is a local variable. The variable b can be accessed only inside the function greet. Hence, when we try to access variable b outside of the function, an error occurs.

### let is Block Scoped
The let keyword is block-scoped(variable can be accessed only in immediate block).

```javascript
// program showing block-scoped concept
// global variable
let a = 'Hello';

function greet() {

    // local variable
    let b = 'World';

    console.log(a + ' ' + b);

    if (b == 'World') {

        // block-scoped variable
        let c = 'hello';

        console.log(a + ' ' + b + ' ' + c);
    }

    // variable x cannot be accessed here
    console.log(a + ' ' + b + ' ' + c);
}

greet();
```

in the above program, variable

- a is a global variable. It can be accessed anywhere in the program.
- b is a local variable. It can be accessed only inside the function greet.
- c is a block-scoped variable. It can be accessed only inside the if statement block.

Hence in the above program, the first two console.log() work without any issue.

However, we are trying to access the block-scoped variable c outside of the block in the third console.log(). This will throw an error.

Note: In JavaScript, var is function scoped and let is block-scoped. If you try to use var c = 'hello'; inside the if statement in the above program, the whole program works, as c is treated as a local variable.

## JavaScript Hoisting
Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.

```javascript
// using test before declaring
console.log(test);   // undefined
var test;
```
### Variable Hoisting
In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.

```javascript
// program to display value
a = 5;
console.log(a);
var a; // 5
```
If a variable is used with the let keyword, that variable is not hoisted

```javascript
// program to display value
a = 5;
console.log(a);
let a; // error
```

### Function Hoisting
A function can be called before declaring it.

```javascript
// program to print the text
greet();

function greet() {
    console.log('Hi, there.');
}

```

In the above program, the function greet is called before declaring it and the program shows the output. This is due to hoisting.

However, when a function is used as an expression, an error occurs because only declarations are hoisted.

```javascript
greet();

let greet = function() {
    console.log('Hi, there.');
}
```
If var was used in the above program, the error would be:
Uncaught TypeError: greet is not a function

Note: Generally, hoisting is not performed in other programming languages like Python, C, C++, Java.

Hoisting can cause undesirable outcomes in your program. And it is best to declare variables and functions first before using them and avoid hoisting.

In the case of variables, it is better to use let than var.

## JavaScript Recursion

Recursion is a process of calling itself. A function that calls itself is called a recursive function.

```javascript
function recurse() {
    // function code
    recurse();
    // function code
}

recurse();
```
Here, the recurse() function is a recursive function. It is calling itself inside a function.

A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.

Once a condition is met, the function stops calling itself. This is called a base condition.

To prevent infinite recursion, you can use if...else statement (or similar approach) where one branch makes the recursive call, and the other doesn't.

So, it generally looks like this.

```javascript
function recurse() {
    if(condition) {
        recurse();
    }
    else {
        // stop calling recurse()
    }
}

recurse();
```
```javascript
// program to count down numbers to 1
function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);
```
```javascript
// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}

```



