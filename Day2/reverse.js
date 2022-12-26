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

    // [10,20,30,40]
    reverse() {
        let first = this.head
        let second = first.next
        this.tail = this.head
        while (second) {
            let temp = second.next  //temp = 30
            second.next = first
            
            first= second //first = 20
            second = temp //second = 30
        }
        this.head.next = null //head was at 10 on reversing it should it should point to null
        this.head = first  // now head = 40
    }                     

}

const myList = new LinkedList(10)
myList.append(20);
myList.append(30);
myList.append(40);
myList.reverse();

console.log(myList);