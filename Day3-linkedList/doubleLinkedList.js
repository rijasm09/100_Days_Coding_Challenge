class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insert at the end of the list
    append(data) {
        const newNode = new Node(data);

        if (!this.head) { //ie if this.head === null
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current);
            current = current.next;
        }
    }

    // Delete a node
    delete(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                if (current === this.head && current === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) {
                    this.head = this.head.next;
                    this.head.prev = null;
                } else if (current === this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
            }
            current = current.next;
        }
    }
}

const myDoubleList = new DoublyLinkedList();
myDoubleList.append(1);
myDoubleList.append(2);
myDoubleList.append(3);
myDoubleList.append(4);
myDoubleList.append(5);
myDoubleList.delete(5);
myDoubleList.print();
//   console.log(myDoubleList);
