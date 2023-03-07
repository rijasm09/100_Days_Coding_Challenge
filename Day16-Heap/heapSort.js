class HeapSort {
  constructor(array) {
      this.array = array;
  }

  sort() {
      let n = this.array.length;

      // CREATING A MAX HEAP
      //   i = Math.floor(n / 2) - 1 //to get the last parent
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
          this.heapify(n, i);
      }

      //SORTING
    //   swap the last and first and reheapify and then i--
    // it will go on sorting from the last
      for (let i = n - 1; i >= 0; i--) {
          let temp = this.array[0];
          this.array[0] = this.array[i];
          this.array[i] = temp;
          this.heapify(i, 0);
      }

      return this.array;
  }

  heapify(n, i) {
      let largest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;

      if (left < n && this.array[left] > this.array[largest]) {
          largest = left;
      }

      if (right < n && this.array[right] > this.array[largest]) {
          largest = right;
      }

      if (largest !== i) {
          let temp = this.array[i];
          this.array[i] = this.array[largest];
          this.array[largest] = temp;
          this.heapify(n, largest);
      }
  }
}

const arr = [32, 6, 41, 22, 63];
const heapSort = new HeapSort(arr);
console.log(heapSort.sort());