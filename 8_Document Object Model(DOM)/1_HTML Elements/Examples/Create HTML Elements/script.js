let list = document.getElementById("todo-list");
let firstItem = document.getElementById("item1");
let btnAdd = document.getElementById("add-item");
let inputBox = document.getElementById("todo-input");

let currentInputValue = "";
inputBox.addEventListener("input", (e) => {
  currentInputValue = e.target.value;
});


// For adding Element before First Item
let beforeElement = document.createElement("li");
let beforeTextNode = document.createTextNode("List Item 0");
beforeElement.appendChild(beforeTextNode);
console.log(beforeElement);
beforeElement.id = "item0";
list.insertBefore(beforeElement, firstItem);


inputBox.addEventListener('keyup', (e) =>{
  if(e.keyCode === 13){
    addListItem();
  }
})


let addListItem =() =>{
  if (
    currentInputValue !== undefined &&
    currentInputValue !== null &&
    currentInputValue !== ""
  ) {
    let newListElement = document.createElement("li");
    let textNode = document.createTextNode(currentInputValue);
    newListElement.appendChild(textNode);
    newListElement.id = `item${list.childElementCount}`;
    list.appendChild(newListElement);

    inputBox.value = "";
    currentInputValue = "";
  } else {
    alert("Please enter a valid Todo item");
  }
};

btnAdd.addEventListener("click", addListItem);
