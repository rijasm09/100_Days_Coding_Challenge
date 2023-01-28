class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 1;
    }
    append(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
    }
    prepend(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      this.length++
    }


    print() {
        let current = this.head;
        while (current) {
            console.log(current);
            current = current.next;
        }
    }
    getLen(){
        let current = this.head
        let length = 0
        while (current) {
            length++
            current = current.next
        }
        console.log(length);
    }
    traversing(req){
        let current = this.head
        let counter = 0
        while (counter === req) {
            current = current.next
            counter++
        }
        return current;
    }

    delete(index){
       let leaderNode = this.traversing(index-1)
       let unwantedNode = leaderNode.next
       let nextNode = unwantedNode.next;
       leaderNode.next = nextNode
       this.length--
    }
    
    insert(index,data){
        let leaderNode = this.traversing(index-1);
        let newNode = new Node(data);
        let nextNode = leaderNode.next 
        leaderNode.next = newNode;
        newNode.next =  nextNode;
        this.length++
    }
         
}

const myList = new LinkedList;
myList.append(1)
myList.append(2)
myList.append(3)
myList.prepend(4)
myList.print()
myList.getLen()

myList.delete(2)
myList.print()
myList.getLen()

myList.insert(2,33)
myList.print()
myList.getLen()