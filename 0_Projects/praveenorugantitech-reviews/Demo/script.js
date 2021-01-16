// local reviews data
const reviews = [
  {
    id: 1,
    name: "Praveen Oruganti",
    job: "Full Stack Developer",
    img:
      "https://avatars2.githubusercontent.com/u/67849221?s=400&u=905daaf6e0ea06d68cfe8fc510e75a7ea756e07c&v=4",
    text:
      "Full Stack Development FB Group is awesome and shares articles on different topics like Core Java, JSP, Servlets, Struts2, Spring, SpringBoot,SQL, Hibernate, PCF, Microservices, Apigee, HTML5, CSS, React JS, Express JS.",
  },
  {
    id: 1,
    name: "Shiva",
    job: "Software Engineer",
    img: "sample.jpg",
    text: "Full Stack Development FB Group is Superb.",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});