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

    traversing(req) {
        let counter = 0;
        let currentNode = this.head;
        while (counter != req) {
            counter++;
            currentNode = currentNode.next
        }
        return currentNode
    }

    insert(index, data) {
        const newNode = {
            value: data,
            next: null
        }
        const leaderNode = this.traversing(index - 1); //this since we are calling a 
        const nextNode = leaderNode.next               //class function

        leaderNode.next = newNode;
        newNode.next = nextNode;
        this.length++
    }

}
const myList = new LinkedList(10)
myList.append(25)
myList.append(30)
myList.prepend(5)
myList.insert(1, 7)

console.log(myList);
