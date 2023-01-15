class LinkedList {
    constructor(data) {
        this.head = {
            value : data,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }
}
const myLinkedList = new LinkedList(30)
console.log(myLinkedList);