let mCars = {
  p1: "350 kmph",
  gallardo: "320 kmph",
  veyron: "409 kmph",
  agera: "429 kmph",
};

console.log(mCars);

Object.entries(mCars).forEach(([key,value]) => {
  console.log(key,value);
})

/*
p1 350 kmph
gallardo 320 kmph
veyron 409 kmph
agera 429 kmph
*/

let mAgera = {
  name: "Agera",
  manufacturer: {
    name: "Koenigsegg",
    location: "Sweden",
  },
  topSpeed: 429,
  color: "Black",
  spoilers: false,
  applyBrakes: function () {
    setTimeout(function () {
      console.log("Car Stopped");
    }, 5000);
  },
};

console.log(mAgera.name); // Agera
console.log(mAgera.topSpeed); // 429
console.log(mAgera.manufacturer); // { name: 'Koenigsegg', location: 'Sweden' }
console.log(mAgera.manufacturer.name); // Koenigsegg
console.log(mAgera.applyBrakes()); // Car Stopped

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => console.log(number));

console.log(numbers.includes(2));
console.log(numbers.includes(10));

numbers.filter((number) => number < 3).forEach((number) => console.log(number));

numbers.map((number) => number * 2).forEach((number) => console.log(number));

console.log(numbers.reduce((accumulator, number) => accumulator + number));

console.log(numbers.some((number) => number < 3));
console.log(numbers.some((number) => number > 5));

console.log(numbers.every((number) => number > 0));
console.log(numbers.every((number) => number > 5));

console.log(numbers.sort((num1, num2) => num2 - num1));
console.log(numbers.reverse());

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
console.log(fruits.reverse());

const numbers2 = [5, 6, 7, 8, 9, 10];
console.log(numbers.concat(numbers2));

function wordCount(val) {
  var wom = val.match(/\S+/g);
  return {
    charactersNoSpaces: val.replace(/\s+/g, "").length,
    characters: val.length,
    words: wom ? wom.length : 0,
    lines: val.split(/\r*\n/).length,
  };
}
// Use like:
console.log(wordCount("This is Praveen Oruganti").words); // (Number of words)

let user = {
  firstName: "Praveen",
  lastName: "Oruganti",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(delete user.firstName); // true
console.log(user); // { lastName: "Oruganti", fullName: [Function: fullName]}
console.log(delete user.name); // true

let alphaArray = ["a", "b", "c", "d"];
console.log(delete alphaArray[0]); // true
console.log(alphaArray[0]); // undefined
console.log(alphaArray); // [ <1 empty item>, 'b', 'c', 'd' ]
console.log(JSON.stringify(alphaArray)); // [null,"b","c","d"]

let myFriends = ["Varma", "Bhaja", "Rinwaz"];
console.log(myFriends); // [ 'Varma', 'Bhaja', 'Rinwaz' ]

console.log(myFriends[2]); // Rinwaz
console.log(myFriends[0]); // Varma

// Update a value
myFriends[1] = "Khaja";
console.log(myFriends); // [ 'Varma', 'Khaja', 'Rinwaz' ]

// Add more items
myFriends[3] = "Prakasam";
console.log(myFriends); // [ 'Varma', 'Khaja', 'Rinwaz', 'Prakasam' ]

myFriends[5] = "Ravi";
console.log(myFriends); // [ 'Varma', 'Khaja', 'Rinwaz', 'Prakasam', undefined, 'Ravi' ]

myFriends[myFriends.length] = "Praneeth";
console.log(myFriends); // [ 'Varma', 'Khaja', 'Rinwaz', 'Prakasam', undefined, 'Ravi', 'Praneeth' ]

myFriends.push("Vipin");
console.log(myFriends); // [ 'Varma', 'Khaja', 'Rinwaz', 'Prakasam', undefined, 'Ravi', 'Praneeth', 'Vipin' ]

// Delete a value
myFriends.pop();
console.log(myFriends); // [ 'Varma', 'Khaja', 'Rinwaz', 'Prakasam', undefined, 'Ravi', 'Praneeth' ]

// splice()
// 1st tells what to start
// 2nd tells how many items to be deleted
// 3rd and 4th and so on tells what items to be added
myFriends.splice(4, 1, "Vipin", "Phani");
console.log(myFriends); // [ 'Varma', 'Khaja', 'Rinwaz', 'Prakasam', 'Vipin','Phani', 'Ravi', 'Praneeth' ]

myFriends.splice(0, 0, "Karuna");
console.log(myFriends); // [ 'Karuna','Varma', 'Khaja', 'Rinwaz', 'Prakasam', 'Vipin','Phani', 'Ravi', 'Praneeth' ]

// Delete item at specific position
myFriends.splice(3, 1);
console.log(myFriends); // [ 'Karuna','Varma', 'Khaja', 'Prakasam', 'Vipin','Phani', 'Ravi', 'Praneeth' ]
myFriends.splice(0, 2);
console.log(myFriends); // [ 'Khaja', 'Prakasam', 'Vipin', 'Phani', 'Ravi', 'Praneeth' ]

// Concatenation
let myOfficeFriends = ["Nagesh", "Satya", "Kasi"];
let myAllFriends = myFriends.concat(myOfficeFriends);
console.log(myAllFriends); // [ 'Khaja', 'Prakasam', 'Vipin', 'Phani', 'Ravi', 'Praneeth', 'Nagesh', 'Satya', 'Kasi' ]

// Sorting Ascending and descending
myAllFriends.sort();
console.log(myAllFriends); // [ 'Kasi', 'Khaja',  'Nagesh',   'Phani', 'Prakasam', 'Praneeth', 'Ravi', 'Satya', 'Vipin']

myAllFriends.reverse();
console.log(myAllFriends); // [ 'Vipin',  'Satya',  'Ravi',  'Praneeth',  Prakasam', 'Phani', 'Nagesh', 'Khaja', 'Kasi']

const array1 = [2,5,8,1,4];
const array2= [12,5,8,11,4];

console.log(array1.some(value => value > 10)); // false
console.log(array2.some(value => value > 10)); // true


// [6, -2, 2, -7].sort();

function mySort(a, b) {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
}

function batmanGameOrder(a, b) {
  var batman = [
    "Arkham Origins",
    "Arkham Origins Blackgate",
    "Assault On Arkham",
    "Arkham Asylum",
    "Arkham City",
    "Arkham Knight",
  ];

  return batman.indexOf(a) - batman.indexOf(b);
}

var games = [
  "Arkham Knight",
  "Arkham Asylum",
  "Arkham Origins",
  "Arkham Origins Blackgate",
];

games.sort(batmanGameOrder);