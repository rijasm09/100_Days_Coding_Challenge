class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class bubbleSort {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    sortNew(){
        let current = this.head.data;
        // console.log(current);
        for (let i = current; i < this.length-1; ) {

             for (let j = current; j < this.length; ) {
                  if (j > j.next.data) {
                    let temp = j.next.data;
                    j.next.data = j;
                    j = temp;
                  }  
                  j = j.next.data;   
             }      
             i = i.next.data;      
        }
    }
    display(){
        let current = this.head;
        while (current) {
            console.log(current);
            current = current.next
        }
    }

}


const sort = new bubbleSort();
sort.push(4)
sort.push(1)
sort.push(6)
sort.push(3)
sort.sortNew()
sort.display()