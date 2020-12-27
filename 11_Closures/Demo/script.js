// JavaScript Closures

// outer function
function greet() {
  // variable defined outside the inner function
  let name = "Praveen Oruganti";

  // inner function
  function displayName() {
    // accessing name variable
    return "Hi" + " " + name;
  }

  return displayName;
}

const g1 = greet();
console.log(g1); // [Function: displayName]
console.log(g1()); // Hi Praveen Oruganti

// another example

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

// another example
let passed = 3;
let addTo = function () {
  var inner = 2;
  return passed + inner;
};
console.log(addTo()); // 5

// another example
let a = 1; // global variable

function func1() {
  let b = 2; // outer function variable
  function func2() {
    let c = 3; // local variable
    return a + b + c;
  }
  return func2;
}

var d = func1();
console.log(d()); //

const bankAccount = (initialBalance) => {
  let balance = initialBalance;

  return {
    getBalance: function () {
      return balance;
    },
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
  };
};

const account = bankAccount(100);

console.log(account.getBalance()); // 100
console.log(account.deposit(10)); // 110

//we have an outer function named walk and an inner function named fly

function walk() {
  var dist = "1780 feet";

  function fly() {
    console.log("At " + dist);
  }

  return fly;
}

var flyFunc = walk(); //calling walk returns the fly function which is being assigned to flyFunc
//you would expect that once the walk function above is run
//you would think that JavaScript has gotten rid of the 'dist' var

flyFunc(); //Logs out 'At 1780 feet'
//but you still can use the function as above
//this is the power of closures

function by(propName) {
  return function (a, b) {
    return a[propName] - b[propName];
  };
}

const person1 = { name: "joe", height: 72 };
const person2 = { name: "rob", height: 70 };
const person3 = { name: "nicholas", height: 66 };

const arr_ = [person1, person2, person3];

const arr_sorted = arr_.sort(by("height"));
console.log(arr_sorted); // [ { name: 'nicholas', height: 66 }, { name: 'rob', height: 70 },{ name: 'joe', height: 72 } ]

function outside(num) {
  var rememberedVar = num; // In this example, rememberedVar is the lexical environment that the closure 'remembers'
  return function inside() { // This is the function which the closure 'remembers'
    console.log(rememberedVar)
  }
}

var remember1 = outside(7); // remember1 is now a closure which contains rememberedVar = 7 in its lexical environment, and //the function 'inside'
var remember2 = outside(9); // remember2 is now a closure which contains rememberedVar = 9 in its lexical environment, and //the function 'inside'

remember1(); // This now executes the function 'inside' which console.logs(rememberedVar) => 7
remember2(); // This now executes the function 'inside' which console.logs(rememberedVar) => 9