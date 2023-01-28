class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 1;
    }
    append(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
    }
    insertSecondLastPositon(data){
        let current = this.head;
        let count = 1
        while (count < this.length-2) {
            current = current.next;
            count++
        }
        console.log("insdie",current);
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current);
            current = current.next;
        }
    }
}

const myList = new LinkedList;
myList.append(1)
myList.append(2)
myList.append(4)
myList.insertSecondLastPositon(3)
myList.print()
