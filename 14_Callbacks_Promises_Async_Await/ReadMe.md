# JavaScript Callbacks, Promises, Async/Await
Most of the time, JavaScript code is ran synchronously.
This means that a line of code is executed, then the next one is executed, and so on.
Everything is as you expect, and how it works in most programming languages.
However there are times when you cannot just wait for a line of code to execute.
You can't just wait 2 seconds for a big file to load, and halt the program completely.
You can't just wait for a network resource to be downloaded, before doing something else.
JavaScript solves this problem using callbacks.
The callback function is executed asynchronously.
### JavaScript Callbacks
A callback is a function that is passed to another function. When the first function is done, it will run the second function.

```javascript
function printString(string, callback){
  setTimeout(
    () => {
      console.log(string)
      callback()
    }, 
    Math.floor(Math.random() * 100) + 1
  )
}
```
You can see that is is super easy to modify the original function to work with callbacks.
Again, let’s try to print the letters A, B, C in that order:

```javascript
function printAll(){
  printString("A", () => {
    printString("B", () => {
      printString("C", () => {})
    })
  })
}
printAll()
```

Well, the code is a lot uglier now, but at least it works! Each time you call printAll, you get the same result.

The problem with callbacks is it creates something called “Callback Hell.” Basically, you start nesting functions within functions within functions, and it starts to get really hard to read the code.

### JavaScript Promises
Promises are an alternative way to deal with asynchronous code.
Promises try to fix this nesting problem. Let’s change our function to use Promises

```javascript
function printString(string){
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
       console.log(string)
       resolve()
      },
     Math.floor(Math.random() * 100) + 1
    )
  })
}
```
You can see that it still looks pretty similar. You wrap the whole function in a Promise, and instead of calling the callback, you call resolve (or reject if there is an error). The function returns this Promise object.
Again, let’s try to print the letters A, B, C in that order:

```javascript
function printAll(){
  printString("A")
  .then(() => {
    return printString("B")
  })
  .then(() => {
    return printString("C")
  })
}
printAll()
```
This is called a Promise Chain. You can see that the code returns the result of the function (which will be a Promise), and this gets sent to the next function in the chain.
The code is no longer nested but it still looks messy!

By using features of arrow functions, we can remove the “wrapper” function. The code becomes cleaner, but still has a lot of unnecessary parenthesis:

```javascript
function printAll(){
  printString("A")
  .then(() => printString("B"))
  .then(() => printString("C"))
}
printAll()
```

### JavaScript Async/Await
Async functions are a higher level abstraction over promises.
An async function returns a promise.
It makes your asynchronous code look more like synchronous/procedural code, which is easier for humans to understand.
With one particular caveat: whenever we use the await keyword, we must do so inside a function defined as async .
The printString function doesn’t change at all from the promise version.
Again, let’s try to print the letters A, B, C in that order:
```javascript
async function printAll(){
  await printString("A")
  await printString("B")
  await printString("C")
}
printAll()
```
Yeah…. MUCH better!

You might notice that we use the “async” keyword for the wrapper function printAll. This let’s JavaScript know that we are using async/await syntax, and is necessary if you want to use Await. This means you can’t use Await at the global level; it always needs a wrapper function. Most JavaScript code runs inside a function, so this isn’t a big deal.

The Async/await duo allows us to have a cleaner code and a simple mental model to work with asynchronous code.

### BUT WAIT THERE'S MORE
The printString function doesn’t return anything and is independent, all we cared about was the order. But what if you wanted to take the output of the first function, do something with it in the second function, and then pass it to the third function?
Instead of printing the string each time, let’s make a function that will concatenate the string and pass it on.

**Callbacks**
Here it is in callback style:
```javascript
function addString(previous, current, callback){
  setTimeout(
    () => {
      callback((previous + ' ' + current))
    },
    Math.floor(Math.random() * 100) + 1
  )
}
```
And in order to call it:
```javascript
function addAll(){
  addString('', 'A', result => {
    addString(result, 'B', result => {
      addString(result, 'C', result => {
       console.log(result) // Prints out " A B C"
      })
    })
  })
}
addAll()
```
Not so nice.

**Promises**
Here it is in Promise style:
```javascript
function addString(previous, current){
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve(previous + ' ' + current)
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  })
}
```
And in order to call it:
```javascript
function addAll(){  
  addString('', 'A')
  .then(result => {
    return addString(result, 'B')
  })
  .then(result => {
    return addString(result, 'C')
  })
  .then(result => {
    console.log(result) // Prints out " A B C"
  })
}
addAll()
```
Using arrow functions means we can make the code a little nicer:

```javascript
function addAll(){
  addString('', 'A')
  .then(result => addString(result, 'B'))
  .then(result => addString(result, 'C'))
  .then(result => {
    console.log(result) // Prints out " A B C"
  })
}
addAll()
```

This is definitely more readable, especially if you add more to the chain, but still a mess of parenthesis.
Await

**Await**
The function stays the same as the Promise version.
And in order to call it:

```javascript
async function addAll(){
  let toPrint = await addString('', 'A')
  toPrint = await addString(toPrint, 'B')
  toPrint = await addString(toPrint, 'C')
  console.log(toPrint) // Prints out " A B C"
}
addAll()
```
Yeah. SO MUCH BETTER.