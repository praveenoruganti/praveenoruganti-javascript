let btn = document.getElementById("top-btn");

btn.addEventListener("mousedown", () => {
  console.log("Mouse Down Event");
});

btn.addEventListener("mouseup", () => {
  console.log("Mouse Up Event");
});

btn.addEventListener("click", () => {
  console.log("Click Event");
});

btn.addEventListener("dblclick", () => {
  console.log("Double Click Event");
});

btn.addEventListener("mouseover", () => {
  console.log("Mouse Over Event");
});

btn.addEventListener("mousemove", () => {
  console.log("Mouse Move Event");
});
