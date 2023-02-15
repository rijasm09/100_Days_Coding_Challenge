class Stack {
  constructor() {
    this.array = [];
  }
  push(value) {
    if (this.array.length < 5) {
      this.array.push(value)
      // console.log("array length", this.array.length);
    } else {
      console.log("stack overflow");
    }
  }
  pop() {
    if (this.array.length) {
      this.array.pop()
      // console.log("array length", this.array.length);
    } else {
      console.log("stack underflow");
    }
  }


}

const myStack = new Stack();
myStack.push(10);
myStack.pop();
myStack.pop();

