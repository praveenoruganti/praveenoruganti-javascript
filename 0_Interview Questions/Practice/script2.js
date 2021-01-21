// Q1 What is the order of yje output of the letters and why ?

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
/* Output
a
e
b
d
c
*/

// Q2 what is the resulting output?

let num = 0;
async function increment() {
  num += await 2; // Promise.resolve(2)
  console.log(num);
}

increment();
num += 1;
console.log(num);

/* Output
1
2
*/

// Q3 revealing module pattern
// Turn this object literal into a module that only exposes the render method

/* 
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
*/

/* We can write the module pattern as below */

let myModule = (function () {
  let _data = [];
  let _render = function () {
    console.log("render");
    // click listeners for _add and _remove
  };

  let _add = function () {
    console.log("add");
    _data.push("JS");
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

// Q4

/*
let f = function (y, z) {

};

// determine if the function received the number of params it expected
f(1);
f(1, 2);
f(1, 2, 3);

*/

let f = function (a, b) {
  arguments.length === f.length
    ? console.log("We have a match")
    : console.log("no match");
};
f(1); // no match
f(1, 2); // we have a match
f(1, 2, 3); // no match

// Q5 ASI(Automatic Semicolon injection), object literals, square bracket syntax, hoisting
// what happens when you run this code? why?
// how would you fix it

/* 
let a = {
  a: 123,
}[a].forEach(function (x) { // ReferenceError: Cannot access 'a' before initialization
  console.log(x);
});
*/

// Fix is automatic semicolon

let a = {
  a: 123,
};
[a].forEach(function (x) {
  console.log(x);
});

// { a: 123 }