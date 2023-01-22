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
            console.log(current);
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

    // [10,20,30,40]
    reverse() {
        let first = this.head
        let second = first.next
        this.tail = this.head
        // while is used to link 20 --> 10, so it start from 20 and continues till 40
        while (second) {
          
            let temp = second.next  //temp = 30, here we got the reference to third pointer
            second.next = first // in the next of 20  we store 10 ie 20 --> 10, and then 30 --> 20 , 40 --> 30 
            // so we observe that it is in pairs , to get the third value ie 30 to pair it to 20 initially we store 20 to temp
            first = second //first = 20
            second = temp //second = 30 so that in second iteration we consider 30 & 40 and fourth iteration 40 & null.
        }

        this.head.next = null //head was at 10 on reversing it should it should point to null
        this.head = first  // now head = 40
    }


}

const myList = new LinkedList(10)
myList.append(20);
myList.append(30);
myList.append(40);
myList.print()
console.log("reverse linkedlist");
myList.reverse();
myList.print()

console.log(myList);



