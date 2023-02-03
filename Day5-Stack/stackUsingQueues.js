// How to implement Stacks using Queues

class MyStack {
    arr;
    constructor() {
        this.arr = [];
    }

    push(x){
        this.arr.push(x);
        for (let i = 0; i < this.arr.length - 1; i++) {
            this.arr.push(this.arr.shift())
        }
    }

    pop() {
        return this.arr.shift()
    }

    top() {
        return this.arr[0]
    }

    empty() {
        return this.arr.length === 0
    }
}
