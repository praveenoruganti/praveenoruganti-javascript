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
let addTo= function(){
  var inner=2;
  return passed+inner;
}
console.log(addTo()); // 5

// another example
let a=1; // global variable

function func1(){
  let b=2; // outer function variable
  function func2(){
    let c=3; // local variable
    return a+b+c;
  }
  return func2;
}

var d = func1();
console.log(d()); // 6