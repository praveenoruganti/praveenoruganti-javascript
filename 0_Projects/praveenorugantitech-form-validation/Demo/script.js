const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordExp = /^[A-Za-z0-9\s]{5,8}$/;

var submitButtonClicked = false;

//Show input error message

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function isValidEmail() {
  return emailExp.test(String(email.value).toLowerCase());
}

function isPasswordValid() {
  return passwordExp.test(password.value);
}
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail()) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is required");
  } else if (!isPasswordValid()) {
    showError(
      password,
      "Password should be alpha numeric and a minimum of 5 and maximum of 8 characters"
    );
  } else {
    showSuccess(password);
  }
  if (password2.value === "") {
    showError(password2, "confirm password is required");
  } else {
    showSuccess(password2);
  }

  if (password.value !== password2.value) {
    showError(password2, "confirm password must be same as password");
  }

  if (
    email.value != "" &&
    isValidEmail() &&
    isPasswordValid() &&
    password.value != "" &&
    password2.value != "" &&
    password.value === password2.value &&
    username.value != ""
  ) {
    submitButtonClicked = true;
    window.location.href = `success.html?username=${
      document.getElementById("username").value
    }`;
  }
});

// If you have attached the beforeunload event to the window, users will see a popup asking them to confirm
// if they would like to "Leave" or "Cancel" when attempting to leave the page.
window.addEventListener("beforeunload", (event) => {
  if (!submitButtonClicked) {
    event.preventDefault();
    event.returnValue = "";
  }
});
