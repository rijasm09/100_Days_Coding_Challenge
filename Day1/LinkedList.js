class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.length = 1;
    }
    append(data) {   //in linked list each node is stored as an object
                    //here append is an object
        const newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
    }
}
const myList = new LinkedList(10)
myList.append(20)
myList.append(30)
console.log(myList);                               
                              