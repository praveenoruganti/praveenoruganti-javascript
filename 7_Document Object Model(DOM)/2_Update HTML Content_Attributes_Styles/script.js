console.log("Script Loaded");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let countdownElement = document.getElementById("countdown");
let bgImageElement = document.getElementById("bg-image");
let initialCountdownVal = countdownElement.innerHTML;

let countdown = setInterval(() => {
  initialCountdownVal++;
  countdownElement.innerHTML = initialCountdownVal;
  bgImageElement.src = "./assets/" + initialCountdownVal + ".jpg";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  if (initialCountdownVal === 8) {
    setInterval(countdown);
    initialCountdownVal = 0;
  }
}, 5000);

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
