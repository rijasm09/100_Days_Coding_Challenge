class Node {
    constructor(data) {
        this.value = data;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    // 1 ---> 2 ---> 3 ---> 4
    append(data) {
        const myNode = new Node(data);

        if (this.length == 0) {
            this.top = myNode;
        } else {
            let holdingPointer = this.top;
            this.top = myNode
            myNode.next = holdingPointer;
        }
        this.length++
    }

    display() {
        console.log(this.top);
    }
    // here it will detach the element so that it goes to garbage values.
    remove() {
        const newTop = this.top.next
        this.top = newTop
        this.length--
    }
}

const myStack = new Stack();
myStack.append(1)
myStack.append(2)
myStack.append(3)
myStack.append(4)
// myStack.remove()
myStack.display();


