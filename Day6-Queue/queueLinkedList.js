class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 1;
    }
    peek(){
        console.log("peek: ",this.first);
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
            this.length++;
        }
    }
    dequeue(){
        if (!this.first) {
            return null
        }
        if (this.first === this.last) {
            this.last === null
        }
        this.first = this.first.next;
        this.length--;
    }
    display() {
       let current = this.first;
       while (current) {
        console.log(current);
        current = current.next;
       }
    }
}


const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.display();
console.log("after dequeueing : ");
myQueue.peek();
myQueue.dequeue();
myQueue.display();