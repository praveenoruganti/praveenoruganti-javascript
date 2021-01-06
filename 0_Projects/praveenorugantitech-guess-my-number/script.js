'use strict';
/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent ='correct number';

document.querySelector('.number').textContent ="13";
document.querySelector('.score').textContent="35";


document.querySelector('.guess').value = 12;
console.log(document.querySelector('.guess').value);*/


/* Note - usually when we get some value from user interface for example input
field, that value will usually always be an string */

/*PROBLEM 1:
We need to calculate a correct number guessed by the user.

1) Understanding the problem
- we need to have a a random number to compare with
- How to generate random number.
- How to compare random number with the number we got from user.
- How to manipulate the values in dom.

2) Breaking up into sub-problems
- Find a random number
- accomodate if There is no guess.
- put condition statements to find if the number is matcing or too low and high.
- manipuate the Dom - 1. show the score and message in ui.

shift+option+A
*/

const randomNumber = Math.floor(Math.random(20)*10+1)
console.log(randomNumber);


let score = 20;
let highScore = 0;
const displayMsg = message =>{
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    
    const guess = Number(document.querySelector('.guess').value);
    /* No number */
    if(!guess){
        displayMsg('No number');
    }
    /* choosen number is low */
/*     else if(guess<randomNumber){
        if(score>1){
        document.querySelector('.message').textContent ='Too low...';
        score--;
        document.querySelector('.score').textContent =score;
        document.querySelector('.guess').value = '';
        }else{
            document.querySelector('.message').textContent ='You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }  */
     /* choosen number is high */
/*     else if(guess>randomNumber){
        if(score>1){
        document.querySelector('.message').textContent = 'Too High...';
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
        }else{
            document.querySelector('.message').textContent ='You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    } */

    /* code refactoring */

    else if(guess!==randomNumber){
        if(score>1){
           // document.querySelector('.message').textContent= guess > randomNumber?'Too High...':'Too low...';
            displayMsg(guess > randomNumber?'Too High...':'Too low...')
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.guess').value = '';
        }else{
            displayMsg('You lost the game');
            document.querySelector('.score').textContent = 0;
        }
        }

     /* choosen number is same */
     else if(guess===randomNumber){
        displayMsg('Perfect you guessed it right!!');
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('body').style.backgroundColor = '#6ebf4c';
        document.querySelector('.number').style.width = '30rem';
        if(score>highScore){
            highScore = score;
            document.querySelector('.highscore').textContent =highScore;
        }
    }

})


document.querySelector('.again').addEventListener('click',function(){
    score=20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor = '#222';
    // document.querySelector('.message').textContent ='Start guessing...';
    displayMsg('Start guessing...');
})