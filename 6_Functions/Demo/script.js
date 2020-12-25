
function mSum(){
    let num1=40;
    let num2=20;
    let sum= num1+num2;
    return sum;
}

console.log(mSum()); //60

// program to count down numbers to 1
function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);

// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}



/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
      break; // this is not necessary
    case "subadmin":
      return `${name} is sub-admin with access to create and delete courses`;
      break;
    case "testprep":
      return `${name} is a test prep with access to create and delete tests`;
      break;
    case "user":
      return `${name} is a user to consume content`;
      break;

    default:
      return `${name} is a trial user`;
      break;
  }
};

console.log(getUserRole("praveen", "testprep"));

var getRole = getUserRole("ravi", "user");

console.log(getRole);

