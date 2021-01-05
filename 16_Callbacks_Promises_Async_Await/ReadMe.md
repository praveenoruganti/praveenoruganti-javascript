# JavaScript Callbacks, Promises, Async/Await
In JavaScript the code is executed line by line in a sequence so when we run a parallel operation or asynchronous operation like fetching data from backend, JavaScript doesn't waits for the response it simply executes the next line of code. we give the asynchronous operation a function to call when it is completed. This function is called a Callback function.

## JavaScript Callbacks
A callback is a function that is passed to another function. When the first function is done, it will run the second function.

```javascript
const url = "https://jsonplaceholder.typicode.com/posts";

// Callback
getPosts_Callback(function (error, posts) {
  if (error) {
    console.log(error);
  } else {
    console.log(posts.length);
  }
});

function getPosts_Callback(callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      callback(null, xhr.response);
    }
  };
  xhr.open("GET", url);
  try {
    xhr.send();
  } catch (error) {
    callback(error);
  }
};

```
The problem with callbacks is it creates something called “Callback Hell.” Basically, you start nesting functions within functions within functions, and it starts to get really hard to read the code.

Promises try to fix this nesting problem.
## JavaScript Promises
A Promise is a special JavaScript object. It produces a value after an asynchronous (aka, async) operation completes successfully, or an error if it does not complete successfully due to time out, network error, and so on.

Successful call completions are indicated by the resolve function call, and errors are indicated by the reject function call.

**How to create a Promise**
To create a promise we need to use the Promise constructor function like this:
```javascript
const promise = new Promise(function(resolve, reject) {
 
});
```
The Promise constructor takes a function as an argument and that function internally receives resolve and reject as parameters.

The resolve and reject parameters are actually functions that we can call depending on the outcome of the asynchronous operation.

A Promise goes through three states:
- Pending: It means the operation is going on.
- Fulfilled: It means the operation was completed
- Rejected: It means the operation did not complete and an error can be thrown.

When we create a promise, it’s in a pending state. When we call the resolve function, it goes in a fulfilled state and if we call reject it will go in the rejected state.

However,
- To get the result of the successful promise execution, we need to register a callback using .then()
- To catch the error, we need to register another callback using .catch().

```javascript
promise.then(function(result) {
 console.log(result);
}).catch(function(error) {
 console.log(error);
});
```

Lets see an example with Asynchronous API call,

```javascript
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
};

```
You can see that it still looks pretty similar. You wrap the whole function in a Promise, and instead of calling the callback, you call resolve (or reject if there is an error). The function returns this Promise object.

### JavaScript Async/Await
Async/await is a new approach that was added to JavaScript in ES2017.
Async functions are a higher level abstraction over promises.
An async function returns a promise.
It makes your asynchronous code look more like synchronous/procedural code, which is easier for humans to understand.
With one particular caveat: whenever we use the await keyword, we must do so inside a function defined as async .

```javascript
const url = "https://jsonplaceholder.typicode.com/posts";

getPosts_AsyncAwait().then((posts) => {
  console.log(posts.length);
});

async function getPosts_AsyncAwait() {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

```

The Async/await duo allows us to have a cleaner code and a simple mental model to work with asynchronous code.

You can check out the [Demo](https://praveenorugantitech.github.io/praveenorugantitech-vanilla-js/16_Callbacks_Promises_Async_Await/Demo).

### [Buy me a Book](https://www.buymeacoffee.com/praveenoruganti)

