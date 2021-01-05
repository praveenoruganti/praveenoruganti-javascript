// Date and Time

// Date Object
const now = new Date();
let val = now.toString();

console.log(now); // 2021-11-30T19:07:13.786Z
console.log(typeof now); // object
console.log(typeof val); // string

// JS counts months from 0 to 11
let birthday = new Date(1985, 6, 19, 20, 30, 00);
console.log(birthday); // 1985-07-19T15:00:00.000Z
birthday = new Date("July 19 1985 20:30:00");
console.log(birthday); // 1985-07-19T15:00:00.000Z
birthday = new Date("07/19/1985 20:30:00");
console.log(birthday); // 1985-07-19T15:00:00.000Z

let x;

// Get the month
x = birthday.getMonth();
console.log(x); // 6

// Get the year
x = birthday.getFullYear();
console.log(x); // 1985

// Get the date
x = birthday.getDate();
console.log(x); // 19

// Get the day
x = birthday.getDay();
console.log(x); // 5

// Get the hours
x = birthday.getHours();
console.log(x); // 20

// Get the minutes
x = birthday.getMinutes();
console.log(x); // 30