class Queueu {
  constructor() {
    this.queue = [];
  }

  enqueu(data) {
    this.queue.push(data);
  }

  dequeue() {
    if (this.queue.length == 0) return 'Queue is empty';
    return this.queue.shift();
  }
}

///////////////////////////////////////
///Queue using stack

function queueUsingStack() {
  class Queue {
    constructor() {
      this.stack = [];
      this.stack2 = [];
    }

    enqueu(data) {
      this.stack.push(data);
    }
    dequeue() {
      if (!this.stack2.length) {
        while (this.stack.length) {
          this.stack2.push(this.stack.pop());
        }
      }
      return this.stack2.pop();
    }
  }
  const queue = new Queue();
  queue.enqueu(1);
  queue.enqueu(2);
  queue.enqueu(3);
  queue.enqueu(4);
  console.log(queue.dequeue());
}
queueUsingStack();
