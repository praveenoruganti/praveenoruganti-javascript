/* Simple Coding Task for Beginners
1. Create variables to represent scores of exams for John and Nick and set values as 80 and 45.
2. Create variable to set the lower limit for passing an exam and assign it to value as 51.
3. Write the condition in if statement, which will check if both students have passed an exam and log the result in console.
4. use else if statement in order to check if one of the students has passed an exam and log the result in console.
5. Use else statement in order to display in console that both students have failed.
6. Incase of passing the exam by one of the students, find out which one was that and display in console as an additional information the student name and his points.
7. Test all possible cases (a. both students passed an exam; b. John passed and Nick failed; c. Nick passed and John failed d. Both students failed)
*/

// SOLUTION
let examEval = () => {
  if (scoreOfJohn >= passScore && scoreOfNick >= passScore) {
    console.log("Both students passed the exam");
  } else if (scoreOfJohn >= passScore || scoreOfNick >= passScore) {
    console.log("One of the students passed the exam");
    if (scoreOfJohn > scoreOfNick) {
      console.log(`and it is John with ${scoreOfJohn} points`);
    } else {
      console.log(`and it is Nick with ${scoreOfNick} points`);
    }
  } else {
    console.log("Both students failed the exam");
  }
};

let scoreOfJohn = 80;
let scoreOfNick = 45;
let passScore = 51;
examEval(); // One of the students passed the exam and it is John with 80 points

scoreOfNick = 70;
examEval(); // Both students passed the exam

scoreOfJohn = 20;
examEval(); // One of the students passed the exam and it is Nick with 70 points

scoreOfNick = 10;
examEval(); // Both students failed the exam

/*
• Write a program to calculate the total price of your phone purchase.
You will keep purchasing phones (hint: loop!) until you
run out of money in your bank account. You’ll also buy accessories
for each phone as long as your purchase amount is below
your mental spending threshold.
• After you’ve calculated your purchase amount, add in the tax,
then print out the calculated purchase amount, properly formatted.
• Finally, check the amount against your bank account balance to
see if you can afford it or not.
• You should set up some constants for the “tax rate,” “phone
price,” “accessory price,” and “spending threshold,” as well as a
variable for your “bank account balance.”
• You should define functions for calculating the tax and for formatting
the price with a “$” and rounding to two decimal
places
*/


const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
var bank_balance = 303.91;
var amount = 0;
function calculateTax(amount) {
return amount * TAX_RATE;
}
function formatAmount(amount) {
return "$" + amount.toFixed( 2 );
}
// keep buying phones while you still have money
while (amount < bank_balance) {
// buy a new phone!
amount = amount + PHONE_PRICE;
// can we afford the accessory?
if (amount < SPENDING_THRESHOLD) {
amount = amount + ACCESSORY_PRICE;
}
}
// don't forget to pay the government, too
amount = amount + calculateTax( amount );
console.log(
"Your purchase: " + formatAmount( amount )
);
// Your purchase: $334.76
// can you actually afford this purchase?
if (amount > bank_balance) {
console.log(
"You can't afford this purchase. :("
);
}
// You can't afford this purchase. :(

console.log(~~ "12");

