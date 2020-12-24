// program for a simple calculator
let result;

// take the operator input
const operator = prompt("Enter operator ( either +, -, * or / ): ");

// take the operand input
const number21 = parseFloat(prompt("Enter first number: "));
const number22 = parseFloat(prompt("Enter second number: "));

switch (operator) {
  case "+":
    result = number21 + number22;
    console.log(`${number21} + ${number22} = ${result}`);
    break;
  case "-":
    result = number21 - number22;
    console.log(`${number21} - ${number22} = ${result}`);
    break;
  case "*":
    result = number21 * number22;
    console.log(`${number21} * ${number22} = ${result}`);
    break;
  case "/":
    result = number21 / number22;
    console.log(`${number21} / ${number22} = ${result}`);
    break;

  default:
    console.log("Invalid operator");
    break;
}


var user = "admin";

switch (user) {
  case "admin":
    console.log("You get full access");
    break;
  case "subadmin":
    console.log("gets access to create/delete courses");
    break;
  case "testprep":
    console.log("gets access to create/delete tests");
    break;
  case "user":
    console.log("gets access to consume content");
    break;
  default:
    console.log("Trial user");

    break;
}
