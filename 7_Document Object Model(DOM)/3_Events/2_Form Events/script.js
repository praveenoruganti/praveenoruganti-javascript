let username = document.getElementById("username");
let loginForm = document.getElementById("login-form");
username.addEventListener("input", (event) => {
  let currentValue = event.target.value;
  currentValue = currentValue.toUpperCase();
  console.log(currentValue);
  username.value = currentValue;
});

username.addEventListener("focus", () => {
  console.log("Element Focussed");
});

username.addEventListener("blur", () => {
    console.log("Element Lost Focus");
  });

  loginForm.addEventListener("submit", (event) => {
    alert("Submit Button Clicked");
    event.preventDefault();
  });