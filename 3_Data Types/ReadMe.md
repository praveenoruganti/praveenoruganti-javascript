# JavaScript Data Types

JavaScript variables can hold many data types: numbers, strings, objects and more.

```javascript
var length = 16;                               // Number
var lastName = "Oruganti";                      // String
var x = {firstName:"Praveen", lastName:"Oruganti"};    // Object
```
**Note**
- When adding a number and a string, JavaScript will treat the number as a string.
- JavaScript evaluates expressions from left to right.
- JavaScript has dynamic types. This means that the same variable can be used to hold different data types.
- Strings are written with quotes. You can use single or double quotes.
- Numbers can be written with, or without decimal and extra large or extra small numbers can be written with scientific (exponential) notation.
- In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
- In JavaScript, the data type of null is an object.

## JS Numbers

```javascript
let num1= 10; // Integer
let num2= 10.9; // Decimal Number

let num3 =15;
let sum = num3 + num1 + num2;
console.log(sum); // 35.9

let diff = num3-num1;
console.log(5);

let divByZero = num3/0;
console.log(divByZero); // Infinity

console.log(0 / 0); // NaN
console.log(0 / 5); // 0
console.log(3 * "a"); // NaN
console.log("a" * 3); // NaN
console.log("b" + 4); // b4
console.log(4 + "b"); // 4b
console.log(5 - "c"); // NaN
console.log("c" - 5); // NaN

// parseInt() string numeral as input and returns a number
console.log(parseInt("11.5")); // 11
console.log(parseInt("ABC")); // NAN

// parseFloat() string numeral as an input and returns a floating number
console.log(parseFloat("11.5")); // 11.5
console.log(parseFloat("ABC")); // NAN

// toFixed() takes floating number and rounds it off to given position
let num4 = 87.987653;
console.log(num4.toFixed()); // "88"
console.log(num4.toFixed(2)); // "87.99"
console.log(num4.toFixed(5)); // "87.98765"
```

## JS Strings
JavaScript string is a primitive data type that is used to work with texts. For example,

```javascript
const name = 'Praveen';
```
In JavaScript, strings are created by surrounding them with quotes. There are three ways you can use quotes.

- Single quotes: 'Hello'
- Double quotes: "Hello"
- Backticks: `Hello`

For example,

```javascript
//strings example
const name = 'Praveen';
const name1 = "PraveenOruganti";
const result = `The names are ${name} and ${name1}`;
```

Single quotes and double quotes are practically the same and you can use either of them.

Backticks are generally used when you need to include variables or expressions into a string. This is done by wrapping variables or expressions with ${variable or expression} as shown above.

You can also write a quote inside another quote. For example,

```javascript
const name = 'My name is "Praveen".';
```
However, the quote should not match the surrounding quotes. For example,

```javascript
const name = 'My name is 'Praveen'.'; // error
```

Few more examples,

```javascript
let myFirstString= "This is Praveen Oruganti";
let mySecondString = 'I have passion to learn new technologies';
let doubleQuoteString = "This is a \"JavaScript\" string"
console.log(doubleQuoteString); // "This is a 'JavaScript' string"

// what if my string contains a single quote
let singleQuotesString = 'This is a \'JavaScript\' string';
console.log(singleQuotesString); // "This is a 'JavaScript' string"

let doubleQuotesString2 = "This is a 'JavaScript' string"; // "This is a 'JavaScript' string"
let singleQuotesString2 = 'This is a "JavaScript" string'; // "This is a 'JavaScript' string"
```
### Access String Characters
You can access the characters in a string in two ways.
- One way is to treat strings as an array. For example,
```javascript
const a = 'hello';
console.log(a[1]); // "e"
```
- Another way is to use the method charAt(). For example,
```javascript
const a = 'hello';
console.log(a.charAt(1)); // "e"
```
### JavaScript Strings are immutable
In JavaScript, strings are immutable. That means the characters of a string cannot be changed. For example,
```javascript
let a = 'hello';
a[0] = 'H';
console.log(a); // "hello"
```
However, you can assign the variable name to a new string. For example,

```javascript
let a = 'hello';
a = 'Hello';
console.log(a); // "Hello"
```
### JavaScript is Case-Sensitive
JavaScript is case-sensitive. That means in JavaScript, the lowercase and uppercase letters are treated as different values. For example,
```javascript
const a = 'a';
const b = 'A'
console.log(a === b); // false
```
In JavaScript, a and A are treated as different values.
### JavaScript Multiline Strings
To use a multiline string, you can either use the + operator or the \ operator. For example,
```javascript
// using the + operator
const message1 = 'This is a long message ' +
    'that spans across multiple lines' +
    'in the code.'

// using the \ operator
const message2 = 'This is a long message \
that spans across multiple lines \
in the code.'
```
### JavaScript String Length
To find the length of a string, you can use built-in length property. For example,

```javascript
const a = 'hello';
console.log(a.length); // 5
```

### JavaScript String Objects

You can also create strings using the new keyword. For example,

```javascript
const a = 'hello';
const b = new String('hello');

console.log(a); // "hello"
console.log(b); // "hello"

console.log(typeof a); // "string"
console.log(typeof b); // "object"
```
**Note**: It is recommended to avoid using string objects. Using string objects slows down the program.

### JavaScript String Methods
Here are the commonly used JavaScript String methods:
charAt(index)	returns the character at the specified index
concat()	joins two or more strings
replace()	replaces a string with another string
split()	converts the string to an array of strings
substr(start, length)	returns a part of a string
substring(start,end)	returns a part of a string
slice(start, end)	returns a part of a string
toLowerCase()	returns the passed string in lower case
toUpperCase()	returns the passed string in upper case
trim()	removes whitespace from the strings
includes()	searches for a string and returns a boolean value
search()	searches for a string and returns a position of a match

```javascript

let myFirstString = "This is a string for Javascript string functions, Javascript";

// returns the length of the string
console.log(myFirstString); // 48

// Find index of a string inside another string
console.log(myFirstString.indexOf('JavaScript')); // -1
console.log(myFirstString.indexOf('Javascript')); // 21
console.log(myFirstString.indexOf('This')); // 0

// Find last index of a sting inside another string
console.log(myFirstString.lastIndexOf('Javascript')); // 50
console.log(myFirstString.lastIndexOf('This')); // 0

// Get a part of our String slice(start, end)
console.log(myFirstString.slice(0,4)); // "This"
console.log(myFirstString.slice(21,31)); // "Javascript"
console.log(myFirstString.slice(-10)); // "Javascript"
console.log(myFirstString.slice(5)); // "is a string for Javascript string functions, Javascript"

// Get sub string function - substr(startPos,length)
console.log(myFirstString.substr(0,4)); // "This"
console.log(myFirstString.substr(21,10)); // "Javascript"
console.log(myFirstString.substr(21)); // "Javascript string functions, Javascript"

let exampleString = "This is JavaScript Tutorial";

// toUpperCase() - it converts our string to uppercase characters
console.log(exampleString.toUpperCase()); // "THIS iS JAVASCRIPT TUTORIAL"

// toLowerCase() - it converts our string to lowercase characters
console.log(exampleString.toLowerCase()); // "this is javascript tutorial"

// concat() - it merges two or more strings
let firstName= "Praveen";
let lastName = "Oruganti";
let title ="Mr"
console.log(firstName.concat(lastName)); // "PraveenOruganti"
console.log(title.concat(' ',firstName,' ',lastName)); // "Mr Praveen Oruganti"

// we can also use "+" operator to concat two or more strings
console.log(firstName + lastName); // "PraveenOruganti"
console.log(title + ' ' + firstName+ ' '+ lastName)); // "Mr Praveen Oruganti"

// trim() - it removes extra spaces
let extraSpaceString = '       mystring   ';
console.log(extraSpaceString.trim()); // "mystring"

let extraSpaceString2 = '    my string   ';
console.log(extraSpaceString2.trim()); // "my string"

// charAt() - This takes a position as an argument and returns character at that position
let charAtExampleString = "This is my text string";
console.log(charAtExampleString.charAt(5)); // "i"
console.log(charAtExampleString.charAt(11)); //  "t"

// split() - splits our string on the basis of the arguments passed
let sampleString = "This is my sample string";
console.log(sampleString.split(' ')); // ["This", "is", "my", "sample", "string"];

let sampleString2= "This,is,my,sample,string";
console.log(sampleString.split(',')); // ["This", "is", "my", "sample", "string"];

let sampleString3 = "This is praveenoruganti";
console.log(sampleString3.split()); // ["This is praveenoruganti"]
```

### JavaScript String() Function
The String() function is used to convert various data types to strings. For example,

```javascript
const a = 225; // number
const b = true; // boolean

//converting to string
const result1 = String(a);
const result2 = String(b);

console.log(result1); // "225"
console.log(result2); // "true"
```
### Escape Character
You can use the backslash escape character \ to include special characters in a string. For example,
```javascript
const name = 'My name is \'Peter\'.';
console.log(name);
```
In the above program, the same quote is included using \.
Here are other ways that you can use \:

Code	Output
\"	include double quote
\\	include backslash
\n	new line
\r	carriage return
\v	vertical tab
\t	horizontal tab
\b	backspace
\f	form feed

### Iterate

```javascript
const string = 'code';

// using for...in loop
for (let i in string) {
    console.log(string[i]);
}
```

You can check out the [Demo](https://praveenorugantitech.github.io/praveenorugantitech-javascript/3_Data%20Types/Demo){:target="_blank"}.





