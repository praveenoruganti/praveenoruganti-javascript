const btn = document.querySelector('button');
const output = document.querySelector('.output');
const headArea = document.querySelector('h1');
const player = {
  name: "Laurence"
  , points: 0
}
output.style.fontSize = '2em';
output.innerHTML = `Welcome ${player.name}<br>Click the button`;
btn.addEventListener('click', runCode);
 
function runCode() {
  player.points = 0;
  output.innerHTML = "";
  let rolls = getRandom(10);
  console.log(rolls);
  for (let x = 0; x < rolls; x++) {
    let playerRoll = getRandom(6);
    let computerRoll = getRandom(6);
    let message = playGame(playerRoll, computerRoll);
    let val = `${playerRoll} vs ${computerRoll} ${message}`;
    output.innerHTML += `${val} <br>`;
  }
  updateScore(rolls);
  console.log('click');
}
 
function updateScore(roundsPlayer) {
  headArea.textContent = `Player Points ${player.points} won in ${roundsPlayer} rounds`;
}
 
function playGame(val1, val2) {
  let res;
  if (val1 == val2) {
    res = "Tie Game";
  }
  else if (val1 > val2) {
    res = "Player 1 Wins";
    player.points++;
  }
  else {
    res = "Computer Wins";
  }
  return res;
}
 
function getRandom(max) {
  let res = Math.floor(Math.random() * max) + 1;
  return res;
}
