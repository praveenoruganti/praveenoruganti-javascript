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

    else if(guess!==randomNumber){
        if(score>1){
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
    displayMsg('Start guessing...');
})