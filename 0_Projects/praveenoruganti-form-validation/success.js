const urlParams = new URLSearchParams(window.location.search);

const userName = urlParams.get("username");

let h1 = document.createElement("h1");
h1.innerText = `You have successfully registered ${userName}`;
document.body.appendChild(h1);

let newURL = location.href.split("?")[0];
if(newURL.includes("http")){
  window.history.pushState("object", document.title, newURL.substring(0, newURL.lastIndexOf("/")));
}
