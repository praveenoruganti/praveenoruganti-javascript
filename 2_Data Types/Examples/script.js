let length = 16; // Number
let lastName = "Johnson"; // String
let x = { firstName: "John", lastName: "Doe" }; // Object

x = 16 + "Volvo"; // 16Volvo
x = "Volvo" + 16; // Volvo16
x = 16 + 4 + "Volvo"; // 20Volvo
x = "Volvo" + 16 + 4; // Volvo164

let ab; // Now x is undefined
ab = 5; // Now x is a Number
ab = "John"; // Now x is a String

let carName1 = "Volvo XC60"; // Using double quotes
let carName2 = "Volvo XC60"; // Using single quotes

let answer1 = "It's alright"; // Single quote inside double quotes
let answer2 = "He is called 'Johnny'"; // Single quotes inside double quotes
let answer3 = 'He is called "Johnny"'; // Double quotes inside single quotes

let x1 = 34.0; // Written with decimals
let x2 = 34; // Written without decimals

let y1 = 123e5; // 12300000
let z1 = 123e-5; // 0.00123

// typeof ""             // Returns "string"
// typeof "John"         // Returns "string"
// typeof "John Doe"     // Returns "string

// typeof 0              // Returns "number"
// typeof 314            // Returns "number"
// typeof 3.14           // Returns "number"
// typeof (3)            // Returns "number"
// typeof (3 + 4)        // Returns "number"

// let car;    // Value is undefined, type is undefined

// car = undefined;    // Value is undefined, type is undefined

// let car = "";    // The value is "", the typeof is "string"

// typeof undefined           // undefined
// typeof null                // object
// null === undefined         // false
// null == undefined          // true

// typeof "John"              // Returns "string"
// typeof 3.14                // Returns "number"
// typeof true                // Returns "boolean"
// typeof false               // Returns "boolean"
// typeof x                   // Returns "undefined" (if x has no value)

// typeof {name:'John', age:34} // Returns "object"
// typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
// typeof null                  // Returns "object"
// typeof function myFunc(){}   // Returns "function"

console.log(0 / 0); // NaN
console.log(0 / 5); // 0
console.log(3 * "a"); // NaN
console.log("a" * 3); // NaN
console.log("b" + 4); // b4
console.log(4 + "b"); // 4b
console.log(5 - "c"); // NaN
console.log("c" - 5); // NaN


const text1 = 'hello';
const text3 = '     JavaScript    ';

// length of a string
console.log(text1.length); // 5
console.log(text3.length); // 19

function reverseString(str) {
    return [...String(str)].reverse().join("");
  }
  console.log(reverseString("stackoverflow")); // "wolfrevokcats"
  console.log(reverseString(1337)); // "7331"
  console.log(reverseString([1, 2, 3])); // "3,2,1"
  // Custom reverse() function
  function reverse(string) {
    var strRev = "";
    for (var i = string.length - 1; i >= 0; i--) {
      strRev += string[i];
    }
    return strRev;
  }
  reverse("zebra"); // "arbez"
  
  // Use .slice() to extract substrings given two indices:
  var s = "0123456789abcdefg";
  console.log(s.slice(0, 5)); // "01234"
  console.log(s.slice(5, 6)); // "5"
  // Given one index, it will take from that index to the end of the string:
  console.log(s.slice(10)); // "abcdefg"
  
  // indexOf() will return the index of the first occurrence of searchString in the string.
  //If searchString is not found, then -1 is returned.
  var string = "Hello, World!";
  console.log(string.indexOf("o")); // 4
  console.log(string.indexOf("foo")); // -1
  // Similarly, lastIndexOf() will return the index of the last occurrence of searchstring or -1 if not found.
  string = "Hello, World!";
  console.log(string.lastIndexOf("o")); // 8
  console.log(string.lastIndexOf("foo")); // -1
  
  // includes() will return a boolean that tells whether searchString exists in the string, starting from index start
  // (defaults to 0). This is better than indexOf() if you simply need to test for existence of a substring.
  
  console.log(string.includes("Hello")); // true
  console.log(string.includes("foo")); // false
  
  string = string.replace("Hello", "Bye");
  console.log(string); // "Bye, World!"
  
  // replace() will return a string that has all occurrences of substrings matching the RegExp regexp or string
  // substring with a string replacement or the returned value of replaceFunction.
  // Note that this does not modify the string in place, but returns the string with replacements.
  string = string.replace(/W.{3}d/g, "Universe");
  console.log(string); // "Bye, Universe!"
  
  
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