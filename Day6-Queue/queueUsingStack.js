// How to implement Queue using Stack


class Queue {

    constructor() {
        this.arr = []
    }

    push(x) {
        this.arr.push(x)
        for (let i = 0; i < this.arr.length - 1; i++) {
            this.arr.push(this.arr.shift())
        }
    }

    pop() {
        return this.arr.pop()
    }

    peek() {
        return this.arr[this.arr.length - 1]
    }

    empty() {
        return this.arr.length === 0
    }
    display() {
        console.log(this.arr);
    }
}

const myQueue = new Queue();
myQueue.push(10);
myQueue.push(20);
myQueue.push(30);
myQueue.push(40);
myQueue.display();
console.log("after pop: ");
myQueue.pop();
myQueue.display();