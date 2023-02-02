const bubbleSort = (arr) => {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                swapped = true
            }
        }
    } while (swapped);

}

let arr = [2, 4, 1, 9, 3, 7, 2];
bubbleSort(arr);
console.log(arr);

// Time Complexity = O(n^2)