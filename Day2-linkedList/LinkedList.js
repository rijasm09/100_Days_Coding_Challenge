class LinkedList {

    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.length = 1;
    }

    append(data) {

        const newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
    }

    prepend(data) {
        const newNode = {
            value: data,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
    }
}
const myList = new LinkedList(10)
myList.append(25)
myList.append(30)
myList.prepend(5)
console.log(myList);
