class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      return (this.head = newNode);
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  getsize() {
    let current = this.head;
    let count = 0;
    while (current) {
      current = current.next;
      count++;
    }
    return count;
  }
  addAt(index, data) {
    if (index < 0 || index > this.getsize()) return;
    let current = this.head;
    if (index == 0) {
      return this.addFirst(data);
    }
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    const newNode = new Node(data);
    newNode.next = current.next;
    current.next = newNode;
  }

  removeHead() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeTail() {
    if (!this.head) return;
    if (!this.head.next) return (this.head = null);
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  findMiddle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.val;
  }

  removeMiddle() {
    let slow = this.head;
    let fast = this.head;
    let prev = null;
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    prev.next = prev.next.next;
  }
  reverseLinkedList() {
    let prev = null;
    let current = this.head;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  deleteNthfromBack(n) {
    if (!this.head) return;
    if (this.getsize() < n) return;

    let slow = this.head;
    let fast = this.head;
    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }
    if (!fast) return (this.head = this.head.next);
    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
    slow.next = slow.next.next;
  }

  findSumTarget(target) {
    const map = new Map();
    let current = this.head;
    while (current) {
      let pair = target - current.val;
      if (map.has(pair)) {
        return { node1: map.get(pair), node2: current };
      }
      map.set(current.val, current);
      current = current.next;
    }
    return -1;
  }
  findNode(data) {
    let current = this.head;
    while (current) {
      if (current.val == data) return current;
      console.log('her');

      current = current.next;
    }
  }

  deleteDuplicates() {
    let current = this.head;
    const set = new Set();
    while (current.next) {
      if (set.has(current.next.val)) {
        if (!current.next) return (current.next = null);
        current.next = current.next.next;
      } else {
        current = current.next;
      }
      set.add(current.val);
    }
  }

  display() {
    if (!this.head) return;
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.addLast(1);
ll.addLast(2);
ll.addLast(3);
ll.addLast(4);
ll.addLast(5);
ll.addLast(6);
ll.addLast(3);
ll.addLast(4);
ll.addLast(5);
ll.addLast(6);
ll.deleteDuplicates();
ll.display();

////////////////////////////////////////////////////////////////////////////////
//////Doubly Linked List
class Dnode {
  constructor(data) {
    this.val = data;
    this.prev = null;
    this.next = null;
  }
}
class DoubliList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new Dnode(data);
    if (!this.head) return (this.head = newNode);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
  addLast(data) {
    if (!this.head) return this.addFirst(data);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    const newNode = new Dnode(data);
    newNode.prev = current;
    current.next = newNode;
  }
  insertAfterNode(node, data) {
    let findNode = null;
    let current = this.head;
    while (current) {
      if (current.val == node) {
        findNode = current;
        break;
      }
      current = current.next;
    }
    if (!findNode) return;
    if (!findNode.next) return this.addLast(data);
    const newNode = new Dnode(data);
    current.next.prev = newNode;
    newNode.next = current.next;
    newNode.prev = current;
    current.next = newNode;
  }

  reverse() {
    let current = this.head;
    let temp = null;
    //1-2-3-4-5
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      current = current.prev;
    }
    this.head = temp.prev;
    // 1--2---3
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

// const dl = new DoubliList();
// dl.addFirst(3);
// dl.addFirst(2);
// dl.addFirst(1);
// dl.addLast(4);
// dl.addLast(5);
// dl.addLast(6);

// dl.display();
