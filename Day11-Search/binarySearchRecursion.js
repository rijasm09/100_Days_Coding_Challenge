function binarySearchRec(arr, target, start, end) {
    if (start <= end) {
        let middle = Math.floor(start + (end - start / 2))
        if (arr[middle] === target) {
            return middle
        } else if (arr[middle] > target) {
            return binarySearchRec(arr, target, start, middle - 1)
        } else if (arr[middle] < target) {
            return binarySearchRec(arr, target, middle + 1, end)
        }
    }
    return -1
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(binarySearchRec(arr, 4, 0, arr.length - 1))
export { }