// JavaScript Async/Await
function printString(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  });
}

async function printAll() {
  await printString("A");
  await printString("B");
  await printString("C");
}
printAll();
