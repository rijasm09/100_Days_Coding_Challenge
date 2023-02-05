const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let n = i;
        for (let j = n - 1; j >= 0; j--,n--) {
            if (arr[n] < arr[j]) {
                let temp = arr[n]
                arr[n] = arr[j]
                arr[j] = temp
            }
        }
    }
}


let arr = [2, 4, 1, 9, 3, 7, 2];
insertionSort(arr);
console.log(arr);