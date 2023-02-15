class Queue {
    

    constructor() {
        this.arr = []
    }

    enqueue(data) {
        this.arr.push(data)
    }

    dequeue() {
        if (this.arr.length > 0) {
            let value = this.arr.shift()
            console.log("Popped element is ", value);

        } else {
            console.log("Queue is empty");
        }
    }
    
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
console.log(queue);