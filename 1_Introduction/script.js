console.log("Welcome to Praveen Oruganti JavaScript Tutorial");

// Hoisting

// Example1: We can use a variable before it is declared
num = 50;
console.log(num); // 50
var num;

// Example2: Hoisting moves the declarations to top but not the assignments.
var num1;
console.log(num1); // undefined
num1 = 100;

// Example3: If variable not declared anywhere then it is Global.

function test(){
    num2=200;
    var num3=300;

}

test();
console.log(num2); // 200
console.log(num3); // ReferenceError: num3 is not defined