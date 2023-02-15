// TO CHECK WETHER THE NUMBER OF ZEROES AND ONES IN AN ARRAY ARE EQUAL

class Stack {
    constructor() {
        this.arr = []
    }
    push(value) {
        this.arr.push(value)
    }
    // count() {
    //     let count = 0;
    //     let n = this.arr.length;
    //     for (let i = 0; i < n; i++) {
    //         if (this.arr[this.arr.length - 1] === 1) {
    //             count++;
    //         } else {
    //             count--;
    //         }
    //         this.arr.pop()
    //         // console.log(this.arr);
    //         // console.log(count);
    //     }
    //     console.log("count",count);
    //     if (count === 0) {
    //         console.log("numer of 0s and 1s are equal");
    //     } else {
    //         console.log("both are not equal");
    //     }
    // }
    count() {
        let count = 0;
        while (this.arr.length > 0) {
            if (this.arr.pop() === 1) {
                count++
            } else {
                count--
            }
            console.log(this.arr);
        }
        if (count === 0) {
            console.log("same");
        } else {
            console.log("different");
        }
    }

}

const myStack = new Stack();
myStack.push(1)
myStack.push(1)
myStack.push(0)
myStack.push(0)
myStack.push(0)
myStack.push(1)
myStack.push(1)
myStack.count()