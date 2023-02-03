const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let n = i;
        for (let j = n - 1; j >= 0; j--, n--) {
            if (arr[j] > arr[n]) {
                let temp = arr[j]
                arr[j] = arr[n]
                arr[n] = temp
            }
        }
    }
    console.log("sorted Array : ", arr);

    
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] !== arr[arr.length - 1]) {
            console.log("secondLargest: ", arr[i]);
            break;
        }
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            console.log("secondSmallest: ", arr[i]);
            break;
        }
    }
}


let arr = [2, -3, 9, 4, -6, 7];
console.log(arr);

insertionSort(arr);
