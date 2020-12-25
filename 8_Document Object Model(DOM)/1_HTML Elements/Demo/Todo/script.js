let list = document.getElementById("todo-list");
let firstItem = document.getElementById("item1");
let btnAdd = document.getElementById("add-item");
let inputBox = document.getElementById("todo-input");
let btnUpdate = document.getElementById("update-item");
let btnDelete = document.getElementById("delete-item");

let currentInputValue = "";
inputBox.addEventListener("input", (e) => {
  currentInputValue = e.target.value;
});

/* For adding Element before First Item
let beforeElement = document.createElement("li");
let beforeTextNode = document.createTextNode("List Item 0");
beforeElement.appendChild(beforeTextNode);
console.log(beforeElement);
beforeElement.id = "item0";
list.insertBefore(beforeElement, firstItem);
*/

inputBox.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    addListItem();
  }
});

let createNewNode = () => {
  let newListElement = document.createElement("li");
  let textNode = document.createTextNode(currentInputValue);
  newListElement.appendChild(textNode);
  newListElement.id = `item${list.childElementCount + 1}`;
  return newListElement;
};

let addListItem = () => {
  if (
    currentInputValue !== undefined &&
    currentInputValue !== null &&
    currentInputValue !== ""
  ) {
    let newListElement = createNewNode();
    list.appendChild(newListElement);

    inputBox.value = "";
    currentInputValue = "";
  } else {
    alert("Please enter a valid Todo item");
  }
};

btnAdd.addEventListener("click", addListItem);

btnUpdate.addEventListener("click", () => {
  let firstElement = list.firstElementChild;
  let newListElement = createNewNode();
  if (
    currentInputValue !== undefined &&
    currentInputValue !== null &&
    currentInputValue !== ""
  ) {
    if (firstElement) {
      list.replaceChild(newListElement, firstElement);
    } else {
      alert("There is no Todo Item to update");
    }
  } else {
    alert("Please enter a valid Todo item to update");
  }
});

btnDelete.addEventListener("click", () => {
  let firstElement = list.firstElementChild;

  if (firstElement) {
    list.removeChild(firstElement);
  } else {
    alert("There is no Todo Item to delete");
  }
});
