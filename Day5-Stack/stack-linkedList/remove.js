class Node {
    constructor(data) {
        this.head = data
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    append(data) {
        const myNode = new Node(data)

        if (this.length === 0) {
            this.top = myNode
        } else {
            let holdingPointer = this.top
            this.top = myNode
            myNode.next = holdingPointer
        }
        this.length++
    }
    display() {
        console.log(this.top);
    }
    remove() {
        const newTop = this.top.next
         this.top = newTop
         this.length--
    }
}

const myStack = new Stack();
myStack.append(5)
myStack.append(10)
myStack.append(15)
myStack.append(20)
myStack.append(25)
myStack.remove()
myStack.display()



