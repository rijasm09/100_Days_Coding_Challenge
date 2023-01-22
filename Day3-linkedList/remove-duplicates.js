// Javascript program to remove duplicates from a sorted linked list


class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
       const newNode = new Node(data);
       if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
       }
       else {
        this.tail.next = newNode;
        this.tail = newNode;
       }
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current);
            current = current.next
        }
    }
    removeDuplicates() {
        let current = this.head;
        while (current) {
            let temp = current
            while (temp && temp.data === current.data) {
                temp = temp.next
            }
            current.next = temp;
            current = current.next;
        }
    }    

}

const myList = new linkedList;
myList.append(1)
myList.append(2)
myList.append(2)
myList.append(3)
myList.append(3)
myList.append(4)
myList.append(5)
myList.removeDuplicates(5)
myList.print()
