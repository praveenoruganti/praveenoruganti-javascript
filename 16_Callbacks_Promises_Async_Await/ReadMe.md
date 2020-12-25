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
A Promise is used to handle the asynchronous result of an operation. It defers the execution of a code until an asynchronous request is completed. This way, other operations can keep running without interruption.

A Promise has 3 states:
- Pending: It means the operation is going on.
- Fulfilled: It means the operation was completed
- Rejected: It means the operation did not complete and an error can be thrown.

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
};

```

The Async/await duo allows us to have a cleaner code and a simple mental model to work with asynchronous code.


### [Buy me a Coffee](http://bit.ly/2WryDT8)