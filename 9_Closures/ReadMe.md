# JavaScript Closures
In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed.
For example,
```javascript
// JavaScript Closures

// outer function
function greet() {

  // variable defined outside the inner function
  let name = 'Praveen Oruganti';

  // inner function
  function displayName() {

      // accessing name variable
      return 'Hi' + ' ' + name;
    
  }

  return displayName;
}

const g1 = greet();
console.log(g1); // [Function: displayName]
console.log(g1()); // Hi Praveen Oruganti
```
In the above example, when greet() function is called, it returns the function definition of displayName.
Here, g1 is a reference to the displayName function.
When g1() is called, it still has access to the greet() function.
When we run console.log(g1), it returns the function definition.

Let's have a look at another example.
```javascript
function calculate(x) {
    function multiply(y) {
        return x * y;
    }
    return multiply;
}

const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3); // [Function: multiply]
console.log(multiply3()); // NaN

console.log(multiply3(6)); // 18
console.log(multiply4(2)); // 8
```
In the above program, the calculate() function takes a single argument x and returns the function definition of the multiply function. The multiply() function takes a single argument y and returns x * y.
Both multiply3 and multiply4 are closures.
The calculate() function is called passing a parameter x. When multiply3 and multiply4 are called, the multiply() function has access to the passed x argument of the outer calculate() function.

**JavaScript closure helps in the data privacy of the program.** For example,

```javascript
let a = 0;
function sum() {
    function increaseSum() {

        // the value of a is increased by 1
        return a = a + 1;
    }
    return increaseSum;
}

const x = sum();
console.log(x()); // 1
console.log(x()); // 2
console.log(x()); // 3
a = a + 1;
console.log(a); // 4
```
In the above example, the sum() function returns the function definition of the increaseSum function.
The a variable is increased inside the increaseSum() function. However, the value of the a variable can also be changed outside of the function. In this case, a = a + 1; changes the value of the variable outside the function.
Now, if you want the a variable to be increased only inside the function, you can use a closure. For example,

```javascript
function sum() {
    let a = 0;
    function increaseSum() {

        // the value of a is increased by 1
        return a = a + 1;
    }
    return increaseSum;
}

let x = sum();
let a = 5;
console.log(x()); // 1
console.log(x()); // 2
console.log(a); // 5
```
In the above example, the sum() function sets the value of a to 0 and returns the increaseSum function.
Because of the closure, even though sum() is already executed, increaseSum() still has access to a and can add 1 to a every time x() is called.
And the a variable is private to the sum() function. It means that the a variable can only be accessed inside of the sum() function.
Even if you declare a and use it, it does not affect the a variable inside of the sum() function.
**Note**: Generally, closures are used for data privacy.