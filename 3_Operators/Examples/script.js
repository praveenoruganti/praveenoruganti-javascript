const number = 3 + 5; // 8

let x = 5;
let y = 3;

// addition
console.log("x + y = ", x + y);

// subtraction
console.log("x - y = ", x - y);

// multiplication
console.log("x * y = ", x * y);

// division
console.log("x / y = ", x / y);

// remainder
console.log("x % y = ", x % y);

// increment
console.log("++x = ", ++x); // x is now 6
console.log("x++ = ", x++); // x returns 6 and then increases by 1
console.log("x = ", x);

// decrement
console.log("--x = ", --x); // x is now 6
console.log("x-- = ", x--); // x returns 6 and then increases by 1
console.log("x = ", x);

//exponentiation
console.log("x ** y =", x ** y);

const a1 = 3;
const b1 = 2;
console.log(a1 > b1); // true

// equal operator
console.log(2 == 2); // true
console.log(2 == "2"); // true

// not equal operator
console.log(3 != 2); // true
console.log("hello" != "Hello"); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === "2"); // false

// strict not equal operator
console.log(2 !== "2"); // true
console.log(2 !== "2"); // false

const x1 = 5;
const y1 = 3;
console.log(x1 < 6 && y1 < 5); // true
// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false

// AND operator example
let a = 12;
let b = 25;
let result = a & b;
console.log(result); // 8

// OR operator example
result = a | b;
console.log(result); // 29

// XOR operator example
result = a ^ b;
console.log(result); // 21

// NOT operator example
b = 12;

result = ~b;

console.log(result); // -13

// Left Shift
a = 8;
b = 1;

result = a << b;

// 1 ( 00000000000000000000000000010000 )
console.log(result);

// Sign-propagating right shift

a = 8;
b = 1;
// 11111111111111111111111111111101
let c = -3;

result = a >> b;
result1 = c >> b;

// 4 (00000000000000000000000000000100)
console.log(result);

// -1 (11111111111111111111111111111111)
console.log(result1);

// Zero-fill right shift
a = 8;
b = 1;
c = -3;

result = a >>> b;
result1 = c >>> b;

// 4 (00000000000000000000000000000100)
console.log(result);

// 1073741823 (00111111111111111111111111111111)
console.log(result);

// concatenation operator
console.log("hello" + "world");

a = "JavaScript";

a += " tutorial"; // a = a + ' tutorial';
console.log(a);

let calc = 1 * 2 + 5 / 2 % 2;
console.log(calc); // 2.5