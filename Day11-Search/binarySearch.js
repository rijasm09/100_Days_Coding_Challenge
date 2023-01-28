const binarySearch = (arr, t) => {
    let leftIndex = 0
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);
        if (arr[middleIndex] === t) {
            return (middleIndex)
        } if (t <= arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1;
}



let arr = [-5, 2, 4, 6, 10];
console.log(binarySearch(arr, 10));