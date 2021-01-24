class nodeFactory {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    //setting up default values
    //head is null by default because we want the list to start empty

    this.head = null;
    this.size = 0;
  }

  //insert first node

  insertFirst(data) {
    this.head = new nodeFactory(data, this.head);
    this.size++;
  }

  //insert last node

  insertLast(data) {
    let node = new nodeFactory(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  //insert at index

  insertAtIndex(data, index) {
    //edge cases
    //if index is out of range//
    if (index > 0 && index > this.size) {
      return;
    }
    //if first index
    if (index === 0) {
      const ll = new LinkedList();
      ll.insertFirst(800);
    }
    //standard cases
    let newNode = new nodeFactory(data);
    let current, previous;

    //set current to first
    current = this.head;
    let count = 0;

    //this loop is going to take us around our nodes
    //until we reach the specified index
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    previous.next = newNode;
    newNode.next = current;

    this.size++;
  }

  //get at index

  getAtIndex(index) {
    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;

      if (count === index) {
        console.log(current.data);
      }
    }
    return null;
  }

  //remove at index

  removeAtIndex(index) {
    //if index is out of range//

    if (index < 0 && index > this.size) {
      return null;
      console.log(`${index} is out of range`);
    }

    let count = 0;
    let current = this.head;
    let previous;

    //removing first index//

    if (index === 0) {
      current = current.next;
    } else {
      //loop that finds index position
      while (index > count) {
        previous = current;
        current = current.next;
        count++;
      }
      //point node stored in previous to current.next
      previous.next = current.next;
    }

    this.size--;
  }

  //clear the list

  clearList() {
    this.head = null;
    this.size = 0;
  }

  //remove last

  removeLast() {
    let count = 0;
    let current = this.head;
    let previous;

    console.log(this.size);
    while (count + 1 < this.size) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = null;
  }

  //split linked list at index return first half//

  splitListReturnFirst(index) {
    let count = 0;
    let current = this.head;
    let previous;

    while (index > count) {
      previous = current;
      current = current.next;
      count++;
    }
    current.next = null;
  }

  //print list data
  printListData() {
    let currentNode = this.head;

    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAtIndex(2, 2);
ll.printListData();
console.log("Old LL");
ll.getAtIndex(3);
ll.removeAtIndex(1);
console.log("new LL");
ll.printListData();
console.log("removing last node");
ll.removeLast();
ll.printListData();
console.log("split list");
ll.splitListReturnFirst(0);
ll.printListData();
console.log("split list return last");
ll.splitReturnLast(1);
ll.printListData();
console.log("killing Linked List");
ll.clearList();
ll.printListData();
