function linkedListToArray(head) {
    let current = head;
    let array = [];
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }