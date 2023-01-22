class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    print() {
        let current = this.head
        while (current) {
            console.log(current.value);
            current = current.next;
        }
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
    
    getLen() {
        let temp = this.head;
        let len=0;
        while(temp!=null){
            len++
            temp = temp.next
        }
        console.log("length of linked list =" +len);
    }

}

const myList = new LinkedList(10)
myList.append(20);
myList.append(30);
myList.append(40);
myList.print()
// myList.sum()
myList.getLen()

console.log(myList);