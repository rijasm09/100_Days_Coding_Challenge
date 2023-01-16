// In javascript they are not anly predefined stack and queue
// A constructor is a special method that is automatically called when 
// an object of a class is created. It is used to initialize the state of 
// an object and allocate memory for the object
// The constructor is automatically called when an object of 
// the class is created, passing the parameters provided in the object 
// creation to the constructor.

class stack {
    constructor() {
        this.array = [];
    }
    append(data){
        this.array.push(data)
    }
    display(){
        console.log(this.array);
    }
    peek(){
        let top = this.array[this.array.length-1]
        console.log(top);
    }
    remove(){
        this.array.pop()
    }
}

const myStack = new stack();
myStack.append(5);
myStack.append(10);
myStack.append(15);
myStack.append(20);
myStack.append(25);
myStack.display();
console.log("top");
myStack.peek();
console.log("new stack after pop from top");
myStack.remove();
myStack.display();

