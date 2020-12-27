// JavaScript ES6

// const and let
// var is not used in anymore
let age = 34; // can be reassigned
const name = "Praveen Oruganti"; // cannot be reassigned

// arrow functions
const add = (a, b) => console.log(a + b);
add(2, 3);
const numbers = [1, 2, 3, 4, 5];
numbers.map((number) => console.log(number * 2));

// template string
const greeting = (name) => {
  //const message= 'Hello , '+ name +'!';
  const message = `Hello , ${name}!`;
  console.log(message);
};

greeting("Praveen Oruganti");

// default parameters
function sub(a, b = 0) {
  return console.log(a - b);
}
sub(5, 2);
sub(5);

function getUsers(page = 0, results = 10, gender = 'male',nationality = 'us') {
  fetch(`https://randomuser.me/api/?page=${page}&results=${results}&gender=${gender}&nationality=${nationality}`)
  .then(function(response) { 
   return response.json();
  }) 
  .then(function(result) {
    console.log(result); 
  })
  .catch(function(error) { 
   console.log('error', error);
   }); 
 }
 
 getUsers();
 getUsers(1, 20, 'female', 'gb');

// array destructuring
const array = [1, 2, 3];
const [first, second, third] = array;
console.log(first, third);

// object destructuring
const FacebookGroup = {
  groupName: "Full Stack Development",
  users: 10000,
};
const { groupName, users } = FacebookGroup;
console.log(groupName, users);

// rest operator
const add3 = (...numbers) => console.log(numbers.reduce((a, b) => a + b, 0));
add3(1, 2, 3, 4, 5);

// spread operator
let arr1 = ["one", "two"];
let arr2 = [...arr1, "three", "four", "five"];
console.log(arr2); // ["one", "two", "three", "four", "five"]

// promises
const url = "https://jsonplaceholder.typicode.com/posts";

getPosts_Promise().then((posts) => {
  console.log(posts.length);
});

function getPosts_Promise() {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
}

//  ES6 Import And Export
import {areaOfCircle} from './script1.js'

console.log("Area:", areaOfCircle(5));

