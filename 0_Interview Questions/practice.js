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
function examEval() {
  if (scoreOfJohn >= passScore && scoreOfNick >= passScore) {
    console.log("Both students passed the exam");
  } else if (scoreOfJohn >= passScore || scoreOfNick >= passScore) {
    console.log("One of the students passed the exam");
    if (scoreOfJohn > scoreOfNick) {
      console.log(`and it is John with ${scoreOfJohn} points`);
    } else {
      console.log(`and it is John with ${scoreOfNick} points`);
    }
  } else {
    console.log("Both students failed the exam");
  }
}

var scoreOfJohn = 80;
var scoreOfNick = 45;
var passScore = 51;
examEval(); // One of the students passed the exam and it is John with 80 points

scoreOfNick = 70;
examEval(); // Both students passed the exam

scoreOfJohn = 20;
examEval(); // One of the students passed the exam and it is John with 70 points

scoreOfNick = 10;
examEval(); // Both students failed the exam
