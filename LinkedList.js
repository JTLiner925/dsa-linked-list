class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  //insert item to first of Linked List
  //must create new instance,
  //put 'item' "value" in place of this.head
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    //it this.head is empty then run insertFirst function
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      //create variable to equal this.head
      //as long as the next node (tempNode.next) itsn't empty
      //change tempNode to equal the next node in the list and keep going
      //when the list finally hits the end
      //create new instance of _Node and insert the new value at the end of the list
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) {
    //create variable that is set to the head (start)
    let currNode = this.head;
    //if list is empty return null
    if (!this.head) {
      return null;
    }
    //loop through  the list, as long as currNode.value
    //doesn't equal the 'item'
    while (currNode.value !== item) {
      // if 'item' is not in the list
      if (currNode.value !== null) {
        return null;
      }
      // if value is not null then you go to the next 'item'
      // and do this until item equals 'item'
      else {
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }

  insertBefore(item, beforeItem) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === beforeItem) {
      this.insertFirst(item);
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== beforeItem) {
      previousNode = currNode;
      currNode = currNode.next;
      console.log(currNode.value, previousNode.value);
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }

    previousNode.next = new _Node(item, currNode);
  }
  insertAfter(item, afterItem) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === afterItem) {
      this.head = new _Node(item, this.head.next);
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== afterItem) {
      previousNode = currNode;
      currNode = currNode.next;
      console.log(currNode.value, previousNode.value);
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }

    currNode.next = new _Node(item, currNode.next);
  }
  insertMiddle() {}
  remove(item) {
    //if no items in the list return null
    if (!this.head) {
      return null;
    }
    //if the item is the first item in the list
    //change head to next item in list
    //and therefore removing it
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //create variable for first item in list
    let currNode = this.head;
    //when you go through list and want to keep track of previous item
    let previousNode = this.head;
    //as long as currNode doesn't equal null AND
    // doesn't equal the item you're looking for
    while (currNode !== null && currNode.value !== item) {
      //change previousNode to the currNode in list and
      //change currNode to the next item in the list
      //this will run until the criteria is met
      previousNode = currNode;
      currNode = currNode.next;
    }
    //if you go through the list and cannot find the item
    //will run console.log of 'item not found'
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    //when you finally find the item to remove
    //it loops following logic previously stated
    //when it is found then you say the
    //previous items' 'next item' is the current 'next item'
    //essentially cropping out the item, skipping it

    previousNode.next = currNode.next;
  }
  size() {
    let count = 0;

    if (!this.head) {
      return count;
    }
    let currNode = this.head;
    while (currNode !== null) {
      currNode = currNode.next;
      count++;
    }
    return count;
  }

  isEmpty() {
    return this.head === null;
  }
}
function findThirdFromEnd(list){
  if (list.size() < 3) {
    return null;
  }


}
function main() {
  let list = new LinkedList();
  let newList = new LinkedList();
  list.insertFirst('Apollo');
  list.insertFirst('Boomer');
  list.insertFirst('Helo');
  list.insertFirst('Husker');
  list.insertFirst('Starbuck');
  list.insertFirst('Tauhida');
  list.remove('Husker');
  list.insertBefore('Athena', 'Tauhida');
  list.insertAfter('Yikes', 'Helo');
  newList.isEmpty();
  // newList.size();
  // list.size();
  console.log(list.size());
  console.log(newList.size());
}
main();
