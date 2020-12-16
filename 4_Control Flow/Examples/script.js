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
