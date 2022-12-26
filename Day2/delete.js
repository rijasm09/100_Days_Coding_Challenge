class LinkedList {

    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
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

    traversing(req) {
        let counter = 0
        let currentNode = this.head
        while (counter != req) {
            counter++
            currentNode = currentNode.next
        }
        return currentNode
    }

    insert(index, data) {
        const newNode = {
            value: data,
            next: null
        }
        const leaderNode = this.traversing(index - 1)
        const nextNode = leaderNode.next

        leaderNode.next = newNode;
        newNode.next = nextNode;
        this.length++
    }

    delete(index) {
        const leaderNode = this.traversing(index - 1)
        const unwantedNode = leaderNode.next
        const nextNode = unwantedNode.next

        leaderNode.next = nextNode
        this.length--
    }
}

const myList = new LinkedList(10);
myList.append(20)
myList.append(30)
myList.append(40)
myList.insert(1, 15)
myList.delete(1);

console.log(myList);