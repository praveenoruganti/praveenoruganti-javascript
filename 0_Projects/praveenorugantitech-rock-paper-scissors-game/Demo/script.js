
//variables ------------------------------
let matches=0;
let playerWins=0;
let computerWins=0;
let playerSelection=undefined;
let computerSelection=undefined;
let winner=undefined;

//computer's selection ---------------------------------
const selections = ["rock","paper","scissors"];
let randomSelection = (selections)=> selections[Math.floor(Math.random() * selections.length)];

//player's selection + match function call -------------------------------------
function toRock(playerSelection){
    playerSelection="rock";
    let computerSelection = randomSelection(selections);
    if (matches<5){
        anime({
            targets:"#rock",
            translateY:{
                value:-80,
                duration:300
            },
            rotate:{
                value:360,
                duration:600
            },
            scale:{
                value:2,
                duration:300
            },
            direction:"alternate"
        });
    }
    play(matches,playerSelection,computerSelection,playerWins,computerWins);
    matches+=1;
    printResults(matches,playerSelection,computerSelection,winner,playerWins,computerWins);
}
function toPaper(playerSelection){
    playerSelection="paper";
    let computerSelection = randomSelection(selections);
    if (matches<5){
        anime({
            targets:"#paper",
            translateY:{
                value:-80,
                duration:300
            },
            rotate:{
                value:360,
                duration:600
            },
            scale:{
                value:2,
                duration:300
            },
            direction:"alternate"
        });
    }
    play(matches,playerSelection,computerSelection,playerWins,computerWins);
    matches+=1;
    printResults(matches,playerSelection,computerSelection,winner,playerWins,computerWins);
}
function toScissors(playerSelection){
    playerSelection="scissors";
    let computerSelection = randomSelection(selections);
    if (matches<5){
        anime({
            targets:"#scissors",
            translateY:{
                value:-80,
                duration:300
            },
            rotate:{
                value:360,
                duration:600
            },
            scale:{
                value:2,
                duration:300
            },
            direction:"alternate"
        });
    }
    play(matches,playerSelection,computerSelection,playerWins,computerWins);
    matches+=1;
    printResults(matches,playerSelection,computerSelection,winner,playerWins,computerWins);
}
//functions defining winner and printing results ----------------------------
function getWinner(computerSelection,playerSelection){
        if ((computerSelection=="rock" && playerSelection=="rock") || (computerSelection=="paper" && playerSelection=="paper") || (computerSelection=="scissors" && playerSelection=="scissors")){
            winner="Draw";
        }
        else if ((computerSelection=="rock" && playerSelection=="scissors") || (computerSelection=="paper" && playerSelection=="rock") || (computerSelection=="scissors" && playerSelection=="paper")){
            winner="Computer wins";
            computerWins+=1;
        }
        else if ((computerSelection=="rock" && playerSelection=="paper") || (computerSelection=="paper" && playerSelection=="scissors") || (computerSelection=="scissors" && playerSelection=="rock")){
            winner="You win";
            playerWins+=1;
        }
}
function printResults(matches,playerSelection,computerSelection,winner,playerWins,computerWins){
    if(matches<5 && matches!==0){
        document.getElementById("player").textContent=``;
        document.getElementById("computer").textContent =``;
        document.getElementById("winner").textContent=``; 

        document.getElementById("player").textContent=`You play ${playerSelection}`;
        setTimeout(() => {
            document.getElementById("computer").textContent =`The computer plays ${computerSelection}`;
        }, 1400);
        setTimeout(() => {
            document.getElementById("winner").textContent=winner; 
        }, 2800);
        setTimeout(() => {
            document.getElementById("player-wins").textContent=`You won ${playerWins} rounds`;
            document.getElementById("computer-wins").textContent=`Computer won ${computerWins} rounds`;
            document.getElementById("rounds").textContent=`Rounds played: ${matches}/5`;
        }, 3000);
    }

    else if (matches >5){
        document.getElementById("player").textContent=``;
        document.getElementById("computer").textContent=`${winner}`;
        document.getElementById("winner").textContent=` Press reset to start a new game`;
        document.getElementById("rounds").textContent=`Rounds finished`
    }
    setTimeout(() => {
        if (matches==5){

            playerWins>computerWins? (console.log("Player wins the game"), winner="you won the game"): console.log();
            computerWins>playerWins? (console.log("Computer wins the game"),winner="Computer won the game"):console.log();
            computerWins==playerWins? (console.log("The game ends in a draw"),winner="The game ended in a draw"):console.log();
            document.getElementById("computer").style.color="rgb(253, 121, 13)";
            document.getElementById("results").style.color="rgb(199, 199, 199);"
            document.getElementById("player").textContent=``;
            document.getElementById("computer").textContent=`${winner}`;
            document.getElementById("winner").textContent=` Press reset to start a new game`;
            document.getElementById("rounds").textContent=`Rounds finished`
        }
    }, 2800);
}


//function to reset the game ------------------------------------
function reset(){
    playerWins=0;
    computerWins=0;
    matches=0;
    printResults(matches,playerSelection,computerSelection,winner,playerWins,computerWins);
    document.getElementById("player").textContent=``;
    document.getElementById("computer").textContent =`Click on one of the images to play`;
    document.getElementById("winner").textContent="";
    document.getElementById("results").style.background="transparent";
    document.getElementById("results").style.color="rgb(199, 199, 199)";
    document.getElementById("computer").style.color="rgb(199, 199, 199)"
    document.getElementById("player-wins").textContent=`You won ${playerWins} rounds`;
    document.getElementById("computer-wins").textContent=`Computer won ${computerWins} rounds`;
    document.getElementById("rounds").textContent=`Rounds played: ${matches}/5`;

}
//function to play -------------------------------------
function play(matches,playerSelection,computerSelection,playerWins,computerWins){
    if (matches<5){
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
            document.getElementById("rounds").textContent=`Rounds played: ${matches}/5`;
            getWinner(computerSelection,playerSelection);
            setTimeout(() => {
                if (matches<5){
                    switch(computerSelection){
                        case "rock":
                            anime({
                                targets:"#rock",
                                translateY:{
                                    value:-80,
                                    duration:300
                                },
                                rotate:{
                                    value:360,
                                    duration:600
                                },
                                scale:{
                                    value:2,
                                    duration:300
                                },
                                direction:"alternate"
                            });
                            break;
                        case "paper":
                            anime({
                                targets:"#paper",
                                translateY:{
                                    value:-80,
                                    duration:300
                                },
                                rotate:{
                                    value:360,
                                    duration:600
                                },
                                scale:{
                                    value:2,
                                    duration:300
                                },
                                direction:"alternate"
                            });
                            break;
                        case "scissors":
                            anime({
                                targets:"#scissors",
                                translateY:{
                                    value:-80,
                                    duration:300
                                },
                                rotate:{
                                    value:360,
                                    duration:600
                                },
                                scale:{
                                    value:2,
                                    duration:300
                                },
                                direction:"alternate"
                            });
                            break;
            
                    }
                }
            }, 1400);
        }
        else{
            alert("something went wrong\nPlease try again");
        }
    }

    else if (matches>=5) {
        playerWins>computerWins? (console.log("Player wins the game"), winner="you already won the game"): console.log();
        computerWins>playerWins? (console.log("Computer wins the game"),winner="Computer already won the game"):console.log();
        computerWins==playerWins? (console.log("The game ends in a draw"),winner="The game already ended in a draw"):console.log();
    }
}