// In javascript they are not anly predefined stack and queue
// A constructor is a special method that is automatically called when 
// an object of a class is created. It is used to initialize the state of 
// an object and allocate memory for the object
// The constructor is automatically called when an object of 
// the class is created, passing the parameters provided in the object 
// creation to the constructor.


class Stack {
    constructor() {
        this.array = [];
    }
    peek() {
        console.log("peek : ",this.array[this.array.length - 1]);
    }
    push(value) {
        this.array.push(value);
        return this; 
    }
    pop() {
       this.array.pop();
    }
    display() {
        console.log(this.array);
    }
}


const myStack = new Stack();
myStack.push(10)
myStack.push(20)
myStack.push(30)
myStack.display()
myStack.peek()
myStack.pop()
console.log("after pop: ");
myStack.display()
