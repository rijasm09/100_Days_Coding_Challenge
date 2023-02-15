class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 1;
    }
    peek() {
        console.log("top element", this.top);
    }
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = this.top;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this
    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }
    display() {
        let current = this.top;
        while (current) {
            console.log(current);
            current = current.next;
        }
    }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.display();
myStack.peek();
myStack.pop();
console.log("after popping:");
myStack.display();
