# JavaScript Objects and Arrays
# JavaScript Objects

JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

```javascript
// object
const student = {
    firstName: 'Praveen',
    class: 10
};
```
Here, student is an object that stores values such as strings and numbers.

### JavaScript Object Declaration

```javascript
const object_name = {
   key1: value1,
   key2: value2
}
```
Here, an object object_name is defined. Each member of an object is a key: value pair separated by commas and enclosed in curly braces {}.

```javascript
// object creation
const person = {
    name: 'Praveen',
    age: 20
};
console.log(typeof person); // object
```

There are many ways we can create Object

### Using object literal

```javascript
// program to create JavaScript object using object literal
const person = {
    name: 'Praveen',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);
```
### Create an Object using Instance of Object Directly

```javascript
// program to create JavaScript object using instance of an object
const person = new Object ( { 
    name: 'Praveen',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
});

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);
```

### Create an object using Constructor Function

```javascript
// program to create JavaScript object using instance of an object

function Person() {
    this.name = 'Praveen',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello everyone.');
    },
    this.score = {
        maths: 90,
        science: 80
    }

}

const person = new Person();

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);

```

### JavaScript Object Properties
In JavaScript, "key: value" pairs are called properties.

```javascript
let person = {
    name: 'Praveen',
    age: 20
};
```
### Accessing Object Properties
You can access the value of a property by using its key.

### Using dot Notation
objectName.key

```javascript
const person = {
    name: 'John',
    age: 20,
};

// accessing property
console.log(person.name); // John

```

### Using bracket Notation
objectName["propertyName"]

```javascript
const person = {
    name: 'Praveen',
    age: 20,
};

// accessing property
console.log(person["name"]); // John
```
### JavaScript Nested Objects
An object can also contain another object.

```javascript
// nested object
const student = {
    name: 'Praveen',
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student.marks.science); // 70
```
## JavaScript Object Methods
In JavaScript, an object can also contain a function.
```javascript
const person = {
    name: 'Praveen',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello') }
}

person.greet(); // hello
```
Here, a function is used as a value for the greet key. That's why we need to use person.greet() instead of person.greet to call the function inside the object.

### JavaScript Methods and this Keyword
In JavaScript, objects can also contain functions.
```javascript
// object containing method
const person = {
    name: 'Praveen',
    greet: function() { console.log('hello'); }
};
```
In the above example, a person object has a key(name and greet) and string value and a function value.
Hence basically, the JavaScript method is an object property that has a function value.

### Accessing Object Methods
You can access an object method using a dot notation.
objectName.methodKey()
You can access a method by calling an objectName and a key for that method along with (). And you can access property only by calling an objectName and a key.

```javascript
// accessing method and property
const person = {
    name: 'Praveen',
    greet: function() { console.log('hello'); }
};

// accessing property
person.name; // Praveen

// accessing method
person.greet(); // hello
```

Here, the greet method is accessed as person.greet() instead of person.greet.

If you try to access the method with only person.greet, it will give you a function definition.

```javascript
person.greet; // ƒ () { console.log('hello'); }
```
### JavaScript Built-In Methods

In JavaScript, there are many built-in methods.
For Example,

```javascript
let number = '23.32';
let result = parseInt(number);

console.log(result); // 23
```
Here, the parseInt() method of Number object is used to convert numeric string value to an integer value.

### Adding a Method to a JavaScript Object
You can also add a method in an object.
```javascript
// creating an object
let student = { };

// adding a property
student.name = 'Praveen';

// adding a method
student.greet = function() {
    console.log('hello');
}

// accessing a method
student.greet(); // hello
```

In the above example, an empty student object is created. Then, the name property is added. Similarly, the greet method is also added. In this way, you can add a method as well as property to an object.

### JavaScript this Keyword
To access a property of an object from within a method of the same object, you need to use the this keyword.

```javascript
const person = {
    name: 'Praveen',
    age: 30,

    // accessing name property by using this.name
    greet: function() { console.log('The name is' + ' ' + this.name); }
};

person.greet();
```
In the above example, a person object is created. It contains properties(name and age) and a method greet.

In the method greet, while accessing a property of an object, this keyword is used.

In order to access the properties of an object, this keyword is used following with . and key.

**Note**: In JavaScript, this keyword when used with the object's method refers to the object. this is bound to an object.

However, the function inside of an object can access it's variable in a similar way as a normal function would.

```javascript
const person = {
    name: 'Praveen',
    age: 30,
    greet: function() {
        let surname = 'Oruganti';
        console.log('The name is' + ' ' + this.name + ' ' + surname); }
};

person.greet();
```

### JavaScript Constructor Function
In JavaScript, a constructor function is used to create objects.

```javascript
// constructor function
function Person () {
    this.name = 'Praveen',
    this.age = 35
}

// create an object
const person = new Person();
```
In the above example, function Person() is an object constructor function.
To create an object from a constructor function, we use the new keyword.

**Note:** It is considered a good practice to capitalize the first letter of your constructor function.

### Create Multiple Objects with Constructor Function
In JavaScript, you can create multiple objects from a constructor function.

```javascript
// constructor function
function Person () {
    this.name = 'Praveen',
    this.age = 35,

     this.greet = function () {
        console.log('hello');
    }
}

// create objects
const person1 = new Person();
const person2 = new Person();

// access properties
console.log(person1.name);  // Praveen
console.log(person2.name);  // Praveen
```
In the above program, two objects are created using the same constructor function.

### JavaScript this Keyword
In JavaScript, when this keyword is used in a constructor function, this refers to the object when the object is created.

```javascript
// constructor function
function Person () {
    this.name = 'Praveen',
}

// create object
const person1 = new Person();

// access properties
console.log(person1.name);  // Praveen
```
Hence, when an object accesses the properties, it can directly access the property as person1.name.

### JavaScript Constructor Function Parameters
You can also create a constructor function with parameters.

```javascript
// constructor function
function Person (person_name, person_age, person_gender) {

   // assigning  parameter values to the calling object
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,

    this.greet = function () {
        return ('Hi' + ' ' + this.name);
    }
}

// creating objects
const person1 = new Person('Praveen', 35, 'male');
const person2 = new Person('Anusha', 30, 'female');

// accessing properties
console.log(person1.name); // "Praveen"
console.log(person2.name); // "Anusha"
```
In the above example, we have passed arguments to the constructor function during the creation of the object.
```javascript
const person1 = new Person('Praveen', 35, 'male');
const person2 = new Person('Anusha', 30, 'male');
// This allows each object to have different properties. As shown above,
console.log(person1.name); // Praveen
console.log(person2.name); // Anusha
```
### Create Objects: Constructor Function Vs Object Literal
- Object Literal is generally used to create a single object. The constructor function is useful if you want to create multiple objects. For example,

```javascript
// using object literal
let person = {
    name: 'Praveen'
}
```
```javascript
// using constructor function
function Person () {
    this.name = 'Praveen'
}

let person1 = new Person();
let person2 = new Person();
```
- Each object created from the constructor function is unique. You can have the same properties as the constructor function or add a new property to one particular object. For example,

```javascript
// using constructor function
function Person () {
    this.name = 'Praveen'
}

let person1 = new Person();
let person2 = new Person();

// adding new property to person1
person1.age = 35;
```
Now this age property is unique to person1 object and is not available to person2 object.

However, if an object is created with an object literal, and if a variable is defined with that object value, any changes in variable value will change the original object. For example,

```javascript
// using object lateral
let person = {
    name: 'Praveen'
}

console.log(person.name); // Sam

let student = person;

// changes the property of an object
student.name = 'PraveenOruganti';

// changes the origins object property
console.log(person.name); // PraveenOruganti
```
When an object is created with an object literal, any object variable derived from that object will act as a clone of the original object. Hence, any change you make in one object will also reflect in the other object.

### Adding Properties And Methods in an Object
You can add properties or methods in an object like this:

```javascript
// constructor function
function Person () {
    this.name = 'Praveen',
    this.age = 35
}

// creating objects
let person1 = new Person();
let person2 = new Person();

// adding property to person1 object
person1.gender = 'male';

// adding method to person1 object
person1.greet = function () {
    console.log('hello');
}

person1.greet();   // hello

// Error code
// person2 doesn't have greet() method
person2.greet();
```
In the above example, a new property gender and a new method greet() is added to the person1 object.
However, this new property and method is only added to object1. You cannot access gender or greet() from object2. Hence the program gives error when we try to access person2.greet();

### JavaScript Object Prototype
You can also add properties and methods to a constructor function using a prototype. For example,
```javascript
// constructor function
function Person () {
    this.name = 'Praveen',
    this.age = 35
}

// creating objects
let person1 = new Person();
let person2 = new Person();

// adding new property to constructor function
Person.prototype.gender = 'Male';

console.log(person1.gender); // Male
console.log(person2.gender); // Male
```
### JavaScript Built-in Constructors
JavaScript also has built-in constructors. Some of them are:
```javascript
let a = new Object();    // A new Object object
let b = new String();    // A new String object
let c = new Number();    // A new Number object
let d = new Boolean();   // A new Boolean object
```
In JavaScript, strings can be created as an object by:
```javascript
const name = new String ('Praveen');
console.log(name); // "John"
```
In JavaScript, numbers can be created as an object by:

```javascript
const number = new Number (57);
console.log(number); // 57
```
In JavaScript, booleans can be created as an object by:

```javascript
const count = new Boolean(true);
console.log(count); // true
```

**Note**: It is recommended to use primitive data types and create them in a normal way, such as const name = 'Praveen';, const number = 57; and const count = true;

You should not declare strings, numbers, and boolean values as objects because they slow down the program.

**Note**: In JavaScript, the keyword class was introduced in ES6 (ES2015) that also allows us to create objects. Classes are similar to constructor functions in JavaScript.

### Iterate Through an Object

```javascript
const student = {
    name: 'Keerthana',
    class: 7,
    age: 12
}

// using for...in
for ( let key in student ) {

    // display the properties
    console.log(`${key} => ${student[key]}`);
}
```
```javascript
const salaries= {
    Harish : 24000,
    Varma : 34000,
    Raveesh : 55000
}

// using for...in
for ( let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i} : ${salary}`);
}
```

### delete operator
In JavaScript, the delete operator is employed to delete a property of an object. After deleting the actual property, that property won’t be accessible and returns undefined.
The invocation of the delete operator returns true when it removes a property and false otherwise. it’s only effective on an object’s properties, it has no effect on variable or function names.
The delete operator shouldn’t be used on predefined JavaScript object properties like window, Math, and Date objects. It can crash your application.

**Delete object properties**
The only way to fully remove the properties of an object in JavaScript is by using delete operator.
```javascript
let user ={
    firstName: "Praveen",
    lastName: "Oruganti",
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(delete user.firstName); // true
console.log(user); // { lastName: "Oruganti", fullName: [Function: fullName]}

```
If the property which you’re trying to delete doesn’t exist, delete won’t have any effect and can return true.

```javascript
let user ={
    firstName: "Praveen",
    lastName: "Oruganti",
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(delete user.name); // true
```

**Can we delete variables in Javascript?**
The delete operator removes a property from an object. It cannot delete a variable. Any property declared with var cannot be deleted from the global scope or from a function's scope.
The variable declared without the var keyword internally stores it as a property of the window object. So we can delete the properties of the window object.

**Can we delete values from an array?**
Since JavaScript arrays are objects, elements can be deleted by using delete.

```javascript
let alphaArray= ['a','b','c','d'];
console.log(delete alphaArray[0]); // true
console.log(alphaArray[0]); // undefined
console.log(alphaArray); // [ <1 empty item>, 'b', 'c', 'd' ]
console.log(JSON.stringify(alphaArray)) ; // [null,"b","c","d"]
```
**Can we delete built-in objects?**
Deleting built-in objects like Math, Date, and window objects are unsafe, and they can crash your entire application.

### Lets see some more examples on Objects

```javascript
let mCars = {
    "p1": "350 kmph",
    "gallardo": '320 kmph',
    "veyron": '409 kmph',
    "agera": '429 kmph'
}
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

```

# JavaScript Array
As you know, a variable can store a single element. If you need to store multiple elements at once, you can use an array.
An array is an object that can store multiple elements. For example,
```javascript
const myArray = ['hello', 'world', 'welcome'];
```

### Create an Array
You can create an array using two ways:

1. Using an array literal
The easiest way to create an array is by using an array literal []. For example,
```javascript
const array1 = ["eat", "sleep"];
```
2. Using the new keyword
You can also create an array using JavaScript's new keyword.
```javascript
const array2 = new Array("eat", "sleep");
```
In both of the above examples, we have created an array having two elements.
**Note**: It is recommended to use array literal to create an array.

```javascript
Here are more examples of arrays:

// empty array
const myList = [ ];
// array containing number values
const numberArray = [ 2, 4, 6, 8];

// array containing string values
const stringArray = [ 'eat', 'work', 'sleep'];

// multiple data types array
const newData = ['work', 'exercise', 1, true];
```
You can also store arrays, functions and other objects inside an array. For example,

```javascript
const newData = [
    {'task1': 'exercise'},
    [1, 2 ,3],
    function hello() { console.log('hello')}
];
```
### Access Elements of an Array
You can access the elements inside of an array using indices (0, 1, 2 …). For example,

```javascript
const myArray = ['h',  'e', 'l', 'l', 'o'];

// first element
console.log(myArray[0]);  // "h"

// second element
console.log(myArray[1]); // "e"
```
**Note**: Array's index starts with 0, not 1.

### Add an Element to an Array

You can use the built-in method push() and unshift() to add an element to an array.
The push() method adds an element at the end of an array and returns the length of a new array. For example,
```javascript
let dailyActivities = ['eat', 'sleep'];

// add an element at the end of the array
dailyActivities.push('exercise');

console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']
```
The unshift() method adds a new element to the beginning of an array and returns the new length of an array. For example,
```javascript
let dailyActivities = ['eat', 'sleep'];

//add an element at the end of the array
dailyActivities.unshift('work');

console.log(dailyActivities); // ['work', 'eat', 'sleep', 'exercise'']
```
### Change the Elements of an Array
You can also add elements or change the elements by accessing the index value.
```javascript
let dailyActivities = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 2 index
dailyActivities[2] = 'exercise';

console.log(dailyActivities); // ['eat', 'sleep', 'exercise']
```
Suppose, an array has two elements. If you try to add an element at index 3 (fourth element), the third element will be undefined. For example,
```javascript
let dailyActivities = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 3 index
dailyActivities[3] = 'exercise';

console.log(dailyActivities); // ["eat", "sleep", undefined, "exercise"]
```
Basically, if you try to add elements to high indices, the indices in between will have undefined value.

### Remove an Element from an Array
You can use the pop() method to remove the last element from an array. The pop() method also returns the returned value. For example,

```javascript
let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
dailyActivities.pop();
console.log(dailyActivities); // ['work', 'eat', 'sleep']

// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities.pop();

//get removed element
console.log(removedElement); // 'sleep'
console.log(dailyActivities);  // ['work', 'eat']
```

If you need to remove the first element, you can use the shift() method. The shift() method removes the first element and also returns the removed element. For example,
```javascript
let dailyActivities = ['work', 'eat', 'sleep'];

// remove the first element
dailyActivities.shift();

console.log(dailyActivities); // ['eat', 'sleep']
```
### Array length

You can find the length of an element (the number of elements in an array) using the length property. For example,
```javascript
const dailyActivities = [ 'eat', 'sleep'];

// this gives the total number of elements in an array
console.log(dailyActivities.length); // 2
```

### Array Methods
In JavaScript, there are various array methods available that makes it easier to perform useful calculations.
Some of the commonly used JavaScript array methods are:

concat()	joins two or more arrays and returns a result
indexOf()	searches an element of an array and returns its position
find()	returns the first value of an array element that passes a test
findIndex()	returns the first index of an array element that passes a test
forEach()	calls a function for each element
includes()	checks if an array contains a specified element
push()	aads a new element to the end of an array and returns the new length of an array
unshift()	adds a new element to the beginning of an array and returns the new length of an array
pop()	removes the last element of an array and returns the removed element
shift()	removes the first element of an array and returns the removed element
sort()	sorts the elements alphabetically in strings and in ascending order
slice()	selects the part of an array and returns the new array
splice()	removes or replaces existing elements and/or adds new elements

```javascript
let dailyActivities = ['sleep', 'work', 'exercise']
let newRoutine = ['eat'];

// sorting elements in the alphabetical order
dailyActivities.sort();
console.log(dailyActivities); // ['exercise', 'sleep', 'work']

//finding the index position of string
const position = dailyActivities.indexOf('work');
console.log(position); // 2

// slicing the array elements
const newDailyActivities = dailyActivities.slice(1);
console.log(newDailyActivities); // [ 'sleep', 'work']

// concatenating two arrays
const routine = dailyActivities.concat(newRoutine);
console.log(routine); // ["exercise", "sleep", "work", "eat"]
```
**Note**: If the element is not in an array, indexOf() gives -1.
### Working of JavaScript Arrays
In JavaScript, an array is an object. And, the indices of arrays are objects keys.
Since arrays are objects, the array elements are stored by reference. Hence, when an array value is copied, any change in the copied array will also reflect in the original array. For example,

```javascript
let arr = ['h', 'e'];
let arr1 = arr;
arr1.push('l');

console.log(arr); // ["h", "e", "l"]
console.log(arr1); // ["h", "e", "l"]
```
You can also store values by passing a named key in an array. For example,

```javascript
let arr = ['h', 'e'];
arr.name = 'John';

console.log(arr); // ["h", "e"]
console.log(arr.name); // "John"
console.log(arr['name']); // "John"

```

However, it is not recommended to store values by passing arbitrary names in an array.
Hence in JavaScript, you should use an array if values are in ordered collection. Otherwise it's better to use object with { }.

### Iterate
```javascript
// define array
const arr = [ 'hello', 1, 'JavaScript' ];

// using for...in loop
for (let x in arr) {
    console.log(arr[x]);
}
```

### Lets see some more examples on Arrays

```javascript

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

```

You can check out the [Demo](https://praveenoruganti.github.io/praveenoruganti-vanilla-js/7_Objects%20and%20Arrays/Demo).

### [Buy me a Book](https://bit.ly/388sUbE)

### Connect with me:

[<img align="left" alt="praveenorugantitech.blogspot.com" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website]
[<img align="left" alt="praveenoruganti | Facebook Group" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg" />][facebookgroup]
[<img align="left" alt="praveenoruganti | Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />][twitter]
[<img align="left" alt="praveenoruganti | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]
[<img align="left" alt="praveenoruganti | Email" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gmail.svg" />][email]

<br/>

[website]: https://praveenorugantitech.blogspot.com
[twitter]: https://mobile.twitter.com/praveenoruganti
[facebookgroup]: https://www.facebook.com/groups/praveenorugantitech
[instagram]: https://instagram.com/praveenorugantitech
[email]: mailto:praveenorugantitech@gmail.com
