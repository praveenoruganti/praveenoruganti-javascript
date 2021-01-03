# JavaScript Interview Questions

**Note: I will include more questions regularly.**

**Q1 Difference between let and var** <br>
let came up in ES6, it is block scope and its not hoist.
var is function scope and it is hoist.
```javascript
let x1 = function () {
  if (true) {
    console.log(v); // var is function scope so there is no error
    // console.log(l); // ReferenceError: l is not defined // let is block scope
    var v = 2;
    let l = 1;
  }
  console.log(v); //  var is function scope so there is no error
  // console.log(l); // ReferenceError: l is not defined // let is block scope
};
x1();
```

**Q2 Tell me the output for this**

```javascript
for (var count = 0; count < 5; count++) {
  setTimeout(() => console.log(count));
}

```
**Output** 5(5 times)
**Explanation**
 So as we know var is a functional scope element only. here we have for loop block.var will get hoist to global scope and get initial value of 0.Then setTimeout runs according to events loop condition by WebApi after completion of for loop. Result will be 5 for all the iterations as var has same global value all time

**Q3 Can you make the output of the above question as sequential like 0,1,2,3,4 instead of 5 (5 times)?**

``` javascript
for (let count = 0; count < 5; count++) {
  setTimeout(() => console.log(count));
}

```
**Output** 0,1,2,3,4
**Explanation**
So as we know let is a block scope element.here we have for loop block.let will get update with each iteration of for loop.Then setTimeout runs according to events loop condition by WebApi after completion of for loop.

**Q4 Difference between let and const**
const - cannot reassign value
let - can reassign value
```javascript
let l = 1;
l = 2;
console.log(2);

const c = 1;
// c=2; // TypeError: Assignment to constant variable.
console.log(c);

const c1 = [1, 2];
c1.push(3);
console.log(c1); // Object can let me modify
```

**Q5 Difference between == and ===**
== just compares value
=== compares value and type

```javascript
if ("1" == 1) {
  console.log("Equal : Just compared value");
}

if ("1" === 1) {
  console.log("Equal : Compared value and type");
} else {
  console.log("Not Equal : Compared value and type");
}
```

**Q6 Difference between null and undefined**
undefined - not assigning a value and its by default it is undefined , typeof(undefined) => undefined
null - it is manually assigned by the user, typeof(null) => object

**Q7 console.log([] + []); **
**Output** empty string

**Q8**
```javascript
function a() {
  return "hello";
}
const sentence = a`hi`;

console.log(sentence);
```

**Output** hello

**Q9**
```javascript
function y() {
  console.log(this.length);
}

var x = {
  length: 5,
  method: function (y) {
    arguments[0]();
  },
};

x.method(y, 1); 

```
**Output** 2

**Q10**
```javascript
const z = "constructor";
console.log(z[z](01)); 
```
**Output** 1

**Q11 console.log(0.1 + 0.2); **

**Output** 0.30000000000000004

**Q12 console.log("hi".__proto__.__proto__._proto__);**

**Q13 Function returns total number of arguments and dont use loops**
```javascript
let f = function () {
  return [].slice.call(arguments).length;
};
console.log(f(1, 2, 3, 5, 6)); // 5
```

**Q14**
```javascript
var A = {
  x: function () {
    console.log("x");
    return this;
  },
  y: function () {
    console.log("y");
    return this;
  },
  z: function () {
    console.log("z");
    return this;
  },
};
A.x().y().z(); 
```
**Output** x y z

**Q15 Use of arrow function**

Lets see an example

```javascript
const profile = {
  firstName: "",
  lastName: "",
  setName: function (name) {
    let splitName = function (n) {
      let nameArray = n.split(" ");
      this.firstName = nameArray[0];
      this.lastName = nameArray[1];
    };
    splitName(name);
  },
};
profile.setName("Praveen Oruganti");
// console.log(window.firstName);

// Here comes arrow functions

const profile1 = {
  firstName: "",
  lastName: "",
  setName: function (name) {
    let splitName = (n) => {
      let nameArray = n.split(" ");
      this.firstName = nameArray[0];
      this.lastName = nameArray[1];
    };
    splitName(name);
  },
};
profile1.setName("Praveen Oruganti");
console.log(profile1.firstName);

```

**Q16 Prototypal Inheritance**
```javascript
let car = function (model) {
  this.model = model;
};
car.prototype.getModel = function () {
  return this.model;
};

let toyota = new car("toyota");
console.log(toyota.getModel());

let nissan = new car("nissan");
console.log(nissan.getModel());
```
** Q17 Difference function declaration and function expression**
```javascript
console.log(funcD());
// console.log(funcE()); // ReferenceError: Cannot access 'funcE' before initialization
function funcD() {
  console.log("Function Declaration");
}
let funcE = function () {
  console.log("Function Expression");
};
```

**Q18**
```javascript
console.log(2 + "2"); // 22
console.log(2 - "2"); // 0
```

**Q19**
```javascript
let nums = [1, 2, 2, 4];
console.log([...new Set(nums)]);
```
**20**
```javascript
console.log(true < 7); // true
console.log(true > 5); // false
// Here true is converted as 1 and then compares
```

**Q21**
```javascript
const a2 = () => arguments;
// console.log(a2('hi'));
// better way to use instead of arguments
const a1 = (...num) => {
  return num;
};
console.log(a1("hi"));
```
**Q22 Prevent user to add more properties in Object**
```javascript
let profile2 = {
  name: "Praveen Oruganti",
};

Object.freeze(profile2); // restrict complete Object to modify
profile2.age = 35;
console.log(profile2);

let profile3 = {
  name: "Praveen Oruganti",
};

Object.seal(profile3); // just restricts user to add additional property but it allows to modify existing properties in Object
profile3.name = "Praveen";
profile3.age = 35;
console.log(profile3);

// another one we can use is Object.defineProperty()
```

**Q23**
```javascript
console.log(Math.max()); // -Infinity
console.log(Math.max(1, 2, 3)); // 3
```

**Q24 Longest Common Prefix**
```javascript
function longestCommonPrefix(strs) {
  let prefix = "";
  if (strs.length === 0) return prefix;
  for (let i = 0; i < strs[0].length; i++) {
    const character = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== character) return prefix;
    }
    prefix = prefix + character;
  }
  return prefix;
}
```
**Q25 Palindrome**
```javascript
function isPalindrome(x) {
  x = x.toString().split("");
  var len = x.length;

  for (var i = 0; i < len / 2; i++) {
    if (x[i] !== x[len - 1 - i]) {
      return false;
    }
  }

  return true;
}
```
**Q26 Sum of first n numbers**

```javascript

// Solution 1
function sumFirstN1(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Solution 2
function sumFirstN2(n) {
  return (n * (n + 1)) / 2;
}

```

**Q27 Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100**
```javascript
const checkTwoNumbers = (num1, num2) =>
  num1 === 100 || num2 === 100 || num1 + num2 === 100;

console.log(checkTwoNumbers(100, 100)); // true
console.log(checkTwoNumbers(100, 2)); // true
console.log(checkTwoNumbers(3, 100)); // true
console.log(checkTwoNumbers(40, 60)); // true
console.log(checkTwoNumbers(80, 60)); // false
```

**Q28 Write a JavaScript program to get the extension of a filename.**
```javascript
const getFileExtension = (str) => str.split(".").pop();
console.log(getFileExtension("op.java")); // java
```

**Q29 Write a JavaScript program to replace every character in a given string with the character following it in the alphabet**
```javascript
const alphabetCharShift = (str) => {
  const all_chars = str.split("");
  for (let i = 0; i < all_chars.length; i++) {
    let n = all_chars[i].charCodeAt() - "a".charCodeAt();
    n = (n + 1) % 26;
    all_chars[i] = String.fromCharCode(n + "a".charCodeAt());
  }
  return all_chars.join("");
};

console.log(alphabetCharShift("abcdxyz")); // bcdeyza
```

**Q30 Write a JavaScript program to get the current date.
Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy**

```javascript
let today = new Date();
let dd = today.getDate();

let mm = today.getMonth() + 1;
const yyyy = today.getFullYear();
if (dd < 10) {
  dd = `0${dd}`;
}

if (mm < 10) {
  mm = `0${mm}`;
}
today = `${mm}-${dd}-${yyyy}`;
console.log(today); // 12-03-2020
today = `${mm}/${dd}/${yyyy}`;
console.log(today); // 12/03/2020
today = `${dd}-${mm}-${yyyy}`;
console.log(today); // 03-12-2020
today = `${dd}/${mm}/${yyyy}`;
console.log(today); // 03/12/2020
```

**Q31 Write a JavaScript program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string.**
```javascript
const string_check = (str1) =>
  str1 === null || str1 === undefined || str1.substring(0, 4) === "New!"
    ? str1
    : `New!${str1}`;

console.log(string_check("New!Year")); // New!Year
console.log(string_check("Year")); // New!Year
```

**Q32  Create a new string from a given string taking the last 3 characters and added at both the front and back
```javascript
const append = (str) =>
  str.length >= 3
    ? str.slice(str.length - 3, str.length) + str + str.slice(str.length - 3)
    : str;
console.log(append("hello")); // llohellollo
```
**Q33 Write a JavaScript program to extract the first half of a string of even length.**
```javascript
const first_half = (str) =>
  str.length % 2 == 0 ? str.slice(0, str.length / 2) : str;
console.log(first_half("suresh")); // sur
```

**Q34 Write a JavaScript program to concatenate two strings except their first character.**
```javascript
const concatenate = (str1, str2) => {
  str1 = str1.substring(1, str1.length);
  str2 = str2.substring(1, str2.length);
  return str1 + str2;
};

console.log(concatenate("Praveen", "Oruganti")); // raveenruganti
```

**Q35 Given two values, write a JavaScript program to find out which one is nearest to 100**
```javascript
const near_100 = (x, y) => {
  if (x != y) {
    x1 = Math.abs(x - 100);
    y1 = Math.abs(y - 100);

    if (x1 < y1) {
      return x;
    }
    if (y1 < x1) {
      return y;
    }
    return 0;
  } else return false;
};

console.log(near_100(80, 60)); // 80
console.log(near_100(100, 120)); // 100
console.log(near_100(120, 140)); // 120
```

**Q36 Check a given string contains 2 to 4 numbers of a specified character**
```javascript
const check_char = (str1, char) => {
  let ctr = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) == char && i >= 1 && i <= 3) {
      ctr = 1;
      break;
    }
  }
  if (ctr == 1) return true;
  return false;
};

console.log(check_char("Python", "y")); // true
console.log(check_char("JavaScript", "a")); // true
console.log(check_char("Console", "o")); // true
console.log(check_char("Console", "C")); // false
console.log(check_char("Console", "e")); // false
console.log(check_char("JavaScript", "S")); // false
```

**Q37  Write a JavaScript program to find the number of even digits in a an array of integers**

```javascript
const even_digits = (num) => {
  let ctr = 0;
  while (num) {
    ctr += num % 2 === 0;
    num = Math.floor(num / 10);
  }
  return ctr;
};

console.log(even_digits(123)); // 1
console.log(even_digits(1020)); // 3
console.log(even_digits(102)); // 2
```

**Q38 Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.
Sample sequence = [1,2,3,4,5,6,7,8]
Given number: 5
Output: 2**
```javascript
const find_numbers = (arr_num, num) => {
  let result = 0;
  for (let i = 0; i < arr_num.length; i++) {
    if (arr_num[i] % 2 === 0 && arr_num[i] !== num) {
      result++;
    }
    if (arr_num[i] === num) {
      return result;
    }
  }
  return -1;
};

console.log(find_numbers([1, 2, 3, 4, 5, 6, 7, 8], 5)); // 2
console.log(find_numbers([1, 3, 5, 6, 7, 8], 6)); // 0
```

**Q39  Given a year, report if it is a leap year.**
```javascript
const leapYear = (year) =>
  year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
console.log(leapYear(2016)); // true
console.log(leapYear(2000)); // true
console.log(leapYear(1700)); // false
console.log(leapYear(1800)); // false
console.log(leapYear(100)); // false
```

**Q40 Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string: 'webmaster'
Expected Output: 'abeemrstw'**
```javascript
const alphabetOrder = (str) => str.split("").sort().join("");
console.log(alphabetOrder("webmaster")); // abeemrstw
```

**Q41 Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Example string: 'The quick brown fox'
Expected Output: 5**
```javascript
const vowelCount = (str1) => {
  let vowelList = "aeiouAEIOU";
  let vCount = 0;

  for (let x10 = 0; x10 < str1.length; x10++) {
    if (vowelList.indexOf(str1[x10]) !== -1) {
      vCount += 1;
    }
  }
  return vCount;
};
console.log(vowelCount("The quick brown fox")); // 5
```

**Q42 Write a JavaScript function to convert an amount to coins.
Example input: 46 and possible coins 25, 10, 5, 2, 1
Output: 25, 10, 10, 1**

```javascript
const amountToCoins = (amount, coins) => {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = amount - coins[0];
      return [coins[0]].concat(amountToCoins(left, coins));
    } else {
      coins.shift();
      return amountToCoins(amount, coins);
    }
  }
};
console.log(amountToCoins(46, [25, 10, 5, 2, 1])); // [ 25, 10, 10, 1 ]
```

**Q43 What is the order of the output of the letters and why ?**

```javascript
console.log("a");
let b = setTimeout(function () {
  console.log("b");
}, 1);
let c = setTimeout(function () {
  console.log("c");
}, 10);

let d = setTimeout(function () {
  console.log("d");
}, 0);

console.log("e");
```
**Output**
a
e
b
d
c

**Q44 what is the resulting output?**
```javascript
let num = 0;
async function increment() {
  num += await 2; // Promise.resolve(2)
  console.log(num);
}

increment();
num += 1;
console.log(num);
```

**Output**
1
2

**Q45 revealing module pattern**
Turn this object literal into a module that only exposes the render method
```javascript
let myModule = {
     data:[],
     render: () => {
      console.log("render");
     },
     add : () => {
        console.log("add");

     },
     remove: () =>{
        console.log("remove");
     }
};

myModule.render();
```

We can write the module pattern as below
```javascript

let myModule = (function () {
  let _data = [];
  let _render = function () {
    console.log("render");
    // click listeners for _add and _remove
  };

  let _add = function () {
    console.log("add");
    _data.push("javascript");
  };
  let _remove = function () {
    console.log("remove");
    _data.pop();
  };

  return {
    render: _render,
  };
})();

myModule.render();
// myModule._add(); // TypeError: myModule._add is not a function
```

**Q46 determine if the function received the number of params it expected**

```javascript
let f = function (y, z) {

};

f(1);
f(1, 2);
f(1, 2, 3);
```

```javascript
let f = function (a, b) {
  arguments.length === f.length
    ? console.log("We have a match")
    : console.log("no match");
};
f(1); // no match
f(1, 2); // we have a match
f(1, 2, 3); // no match
```

**Q47 ASI(Automatic Semicolon injection), object literals, square bracket syntax, hoisting
what happens when you run this code? why?
how would you fix it**

```javascript
let a = {
  a: 123,
}[a].forEach(function (x) { // ReferenceError: Cannot access 'a' before initialization
  console.log(x);
});

```

Fix is automatic semicolon

```javascript
let a = {
  a: 123,
};
[a].forEach(function (x) {
  console.log(x);
});

// { a: 123 }

```

### [Buy me a Book](https://www.buymeacoffee.com/praveenoruganti)


### Connect with me:

[<img align="left" alt="praveenorugantitech.blogspot.com" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website]
[<img align="left" alt="praveenoruganti | Facebook Group" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg" />][facebookgroup]
[<img align="left" alt="praveenoruganti | Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />][twitter]
[<img align="left" alt="praveenoruganti | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]
[<img align="left" alt="praveenoruganti | Email" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gmail.svg" />][email]

<br/>

[website]: https://praveenorugantitech.blogspot.com
[twitter]: https://mobile.twitter.com/praveenoruganti
[facebookgroup]: https://www.facebook.com/groups/praveenorugantitech
[instagram]: https://instagram.com/praveenorugantitech
[email]: mailto:praveenorugantitech@gmail.com
