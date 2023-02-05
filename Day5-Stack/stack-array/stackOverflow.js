class Stack {
    constructor(s) {
      this.sp = -1;
      this.stack = [];
      this.size = s;
    }
    push(value) {
      if (this.sp > this.size - 1) {
        console.log("stack out");
      } else {
        this.sp++;
        this.stack.push(value);
      }
      console.log(this.stack);
    }
    pop() {
      this.stack.pop();
      this.length--;
    }
  }
  
  let mystack = new Stack(5);
  mystack.push(10);
  mystack.push(70);
  mystack.push(50);
  mystack.push(40);
  mystack.push(40);
  mystack.push(40);
  mystack.push(40);
  mystack.push(40);
  
  // console.log();