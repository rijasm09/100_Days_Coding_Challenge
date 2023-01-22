var head;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function pushNode(new_data) {
    var new_node = new Node(new_data);
    new_node.next = head;
    head = new_node;
}

function printNode() {
    tnode = head;
    while (tnode != null) {
        console.log(tnode.data);
        tnode = tnode.next;
    }
}

function getLen() {
    temp = head;
    length = 0;
    while (temp != null) {
        length++
        temp = temp.next
    }
    return length;
}

function printMiddle() {
    if (head != null) {
        let length = getLen();
        var temp = head;
        let middleLength = length / 2;
        while (parseInt(middleLength) != 0) {
            temp = temp.next;
            middleLength--;
        }
        console.log("middleElement is " + temp.data);
    }
}
// OR
function  middle() {
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

for (let i = 5; i > 0; i--) {
    pushNode(i);
    printNode();
    printMiddle();
    middle();
}