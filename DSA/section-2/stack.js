class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    if (this.isEmpty()) return 'Stack Undeflow';
    return this.pop();
  }

  isEmpty() {
    return this.stack.length == 0;
  }
}

//////////////////////////////////////////////
///Reverse a string using stack

function reverseString(str) {
  let stack = [];
  str.split(' ').forEach(word => word.length && stack.push(word));

  let final = '';
  while (stack.length) {
    final += stack.pop() + ' ';
  }

  return final.trim();
}

/////////////////////////////////////////////////
///Stack using queue

function stackUsingQueue() {
  //[1,2,3,4]
  class Stack {
    constructor() {
      this.q1 = [];
      this.q2 = [];
    }

    push(data) {
      while (this.q1.length) {
        this.q2.push(this.q1.shift());
      }
      this.q1.push(data);
      while (this.q2.length) {
        this.q1.push(this.q2.shift());
      }
    }
    shift() {
      return this.q1.shift();
    }
  }
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  console.log(stack.q1);
}
stackUsingQueue();

///////////////////////////////////////////////////
//SORT A STRING USING STACK

function sortString(str) {
  const stack = str.split('');
  const stack2 = [];
  while (stack.length) {
    const top = stack.pop();

    while (stack2.length && stack2[stack2.length - 1] > top) {
      stack.push(stack2.pop());
    }
    stack2.push(top);
  }
  return stack2.join('');
}
