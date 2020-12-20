# JavaScript Variables

Most of the time, a JavaScript application needs to work with information. Here are two examples:

- An online shop  the information might include goods being sold and a shopping cart.
- A chat application  the information might include users, messages, and much more.
Variables are used to store this information.

## A Variable

Variables are used to store some data for later use. In other words, think of them as containers which hold whatever data you put inside them.

To create a variable in JavaScript, we use the let,const and var keyword based on the scenario.

The statement below creates (in other words: declares) a variable with the name message:

```javascript
let message;
```
Now, we can put some data into it by using the assignment operator =:

```javascript
let message;
message = 'Hello!';
alert(message); // shows the variable content
```
We can also declare multiple variables in one line:

```javascript
let user = 'Praveen', age = 35, message = 'Hello';
```

That might seem shorter, but we don’t recommend it. For the sake of better readability, please use a single line per variable.

The multiline variant is a bit longer, but easier to read:

```javascript
let user = 'Praveen';
let age = 35;
let message = 'Hello';
```
We can also change the value of variable  many times as we want:

```javascript
let message;
message = 'Hello!';
message = 'World!'; // value changed
alert(message);
```
When the value is changed, the old data is removed from the variable:

A variable should be declared only once. Declaring twice triggers an error.

```javascript
let message = "This";
// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared
```

## Variable naming

**Rules for naming JS Variables**

- Name can  contain letters, digits, or the symbols $ and _
```javascript
let mySubject1,math$; // valid
```
- Name cannot start with a digit
```javascript
let 1maths; //invalid
```
- Name can start with an _ or $
```javascript
let _subjectMarks,$rankInClass; // valid
```
- Names are case sensitive
```javascript
let x, X;
```
- Names cannot be reserved keywords.

![screenshot of the app](https://raw.githubusercontent.com/praveenoruganti/praveenoruganti-javascript/master/images/keywords.PNG)
```javascript
let let; // invalid
let var; // invalid
```
- When the name contains multiple words, camelCase is commonly used
```javascript
let subjectMarks,rankInClass;
```

Let see few more examples,
```javascript
let &alpha1 // Invalid
let NUM1 // Valid
let DATE-5 // Invalid
let TotalSum_ // Valid
let 12Byby // Invalid
let num1 // Valid
let super$$ // Valid
let Object // Valid
let StringNew // Valid
let $rankInClass // Valid
```

## Constants

To declare a constant (unchanging) variable, use const instead of let:

```javascript
const myBirthday = '18.04.2000';
```

Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:

```javascript
const myBirthday = '18.04.2000';
myBirthday = '01.01.2001'; // error, can't reassign the constant!
```
When a programmer is sure that a variable will never change, they can declare it with const to guarantee and clearly communicate that fact to everyone.

**Uppercase constants**

There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.

Such constants are named using capital letters and underscores.

For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:

```javascript
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```
Benefits:
- COLOR_ORANGE is much easier to remember than "#FF7F00".
- It is much easier to mistype "#FF7F00" than COLOR_ORANGE.
- When reading the code, COLOR_ORANGE is much more meaningful than #FF7F00.

When should we use capitals for a constant and when should we name it normally? Let’s make that clear.

Being a “constant” just means that a variable’s value never changes. But there are constants that are known prior to execution (like a hexadecimal value for red) and there are constants that are calculated in run-time, during the execution, but do not change after their initial assignment.

For instance:
```javascript
const pageLoadTime = /* time taken by a webpage to load */;
```
The value of pageLoadTime is not known prior to the page load, so it’s named normally. But it’s still a constant because it doesn’t change after assignment.

In other words, capital-named constants are only used as aliases for “hard-coded” values.

## Name things right
Talking about variables, there’s one more extremely important thing.

A variable name should have a clean, obvious meaning, describing the data that it stores.

Variable naming is one of the most important and complex skills in programming. A quick glance at variable names can reveal which code was written by a beginner versus an experienced developer.

In a real project, most of the time is spent modifying and extending an existing code base rather than writing something completely separate from scratch. When we return to some code after doing something else for a while, it’s much easier to find information that is well-labeled. Or, in other words, when the variables have good names.

Please spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely.

Some good-to-follow rules are:
- Use human-readable names like userName or shoppingCart.
- Stay away from abbreviations or short names like a, b, c, unless you really know what you’re doing.
- Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing. It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
- Agree on terms within your team and in your own mind. If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.

## Summary

We can declare variables to store data by using the var, let, or const keywords.

- let – is a modern variable declaration.
- var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
- const – is like let, but the value of the variable can’t be changed.

Variables should be named in a way that allows us to easily understand what’s inside them.

### var vs let vs const

![screenshot of the app](https://raw.githubusercontent.com/praveenoruganti/praveenoruganti-javascript/master/images/varVsletVsconst.PNG)