document.body.addEventListener("keydown", (event) => {
  let keyCode = event.keyCode;
  console.log(`Keydown for ${keyCode} `);
});

document.body.addEventListener("keyup", (event) => {
  let keyCode = event.keyCode;
  console.log(`KeyUp for ${keyCode} `);
});

document.body.addEventListener("keypress", (event) => {
  let keyCode = event.keyCode;
  console.log(`KeyPress for ${keyCode} `);
});
