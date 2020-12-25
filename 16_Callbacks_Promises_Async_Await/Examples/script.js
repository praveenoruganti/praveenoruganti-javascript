// There are multiple ways to handle asynchronous code in JavaScript today.
// Here we will explore the three most popular async options by making an HTTP call to the jsonplaceholder API.

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

// Promise

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

// Async Await

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
