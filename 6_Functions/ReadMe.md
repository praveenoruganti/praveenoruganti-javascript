# JavaScript Function

A function is a block of code that performs a specific task.

Suppose you need to create a program to create a circle and color it. You can create two functions to solve this problem:

- a function to draw the circle
- a function to color the circle

Dividing a complex problem into smaller chunks makes your program easy to understand and reusable.

JavaScript also has a huge number of inbuilt functions. For example, Math.sqrt() is a function to calculate the square root of a number.

### Function Declaration
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
You can check out the [Demo](https://praveenorugantitech.github.io/praveenorugantitech-javascript/6_Functions/Demo).

<script data-name="BMC-Widget" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="praveenoruganti" data-description="Support me on Buy me a coffee!" data-message="Thank you for visiting. You can now buy me a coffee!" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>




