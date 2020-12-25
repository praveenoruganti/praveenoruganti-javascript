let counter = document.querySelector(".counter");
let followers = document.querySelector(".followers");

let count = 1;

setInterval(() => {
  if (count < 10000) {
    count++;
    counter.innerText = count;
  }
}, 1);

setTimeout(() => {
  followers.innerText =
    "Followers in Full Stack Development by Praveen Oruganti";
}, 1000);
