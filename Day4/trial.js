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
            head: data,
            next: this.head
        }
        this.head = newNode;
        this.length++
    }

    traversing(req) {
        let counter = 0;
        let currentNode = this.head;
        while (counter != req) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode
    }


    insert(index, data) {
        const newNode = {
            value: data,
            next: null
        }
        const leaderNode = this.traversing(index - 1)
        const nextNode = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = nextNode;
        this.length++

    }
    delete(index) {

        let leaderNode = this.traversing(index - 1);
        const unwantedNode = leaderNode.next;
        const nextNode = unwantedNode.next;
        leaderNode.next = nextNode;
        this.length--
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current);
            current = current.next;
        }
    }
    reverse() {
        first = this.head;
        second = first.next;
        this.tail = this.head;
        while (second) {
            temp = second.next;
            second.next = first;
            first = second;
            second = temp
        }
        this.head.next = null;
        this.head = first

    }
    getLen() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next
        }
        console.log("length", count);
        return count;
    }
    middle() {
        let length = this.getLen();
        let middleLength = length / 2;
        let count = 0;
        let current = this.head;
        while (count < parseInt(middleLength)) {
            current = current.next;
            count++;
        }
        console.log("middle node", current);
    }
}
const myList = new LinkedList(10)
myList.append(16)
myList.append(25)
myList.prepend(5)
myList.insert(3, 12)
console.log("linked list");
myList.print();
// myList.delete(2)
console.log("middle one");
myList.middle()
// console.log(myList);    