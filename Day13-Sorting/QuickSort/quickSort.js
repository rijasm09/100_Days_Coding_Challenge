function quicksort(arr) {
    quickSortHelper(arr, 0, arr.length - 1)
    return arr
}

// ///////////////////////////////////////////////////////////////////////////////

function quickSortHelper(arr, start, end) {
    if (start >= end) {
        // If this is the case, the function returns and does nothing. 
        //This is because a portion of the array with only one element is already sorted.

        return
    }

    let pivot = start
    let left = start + 1
    let right = end

    while (left <= right) {
        if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
            swap(arr, left, right)
            left++
            right--
        }
        if (arr[left] <= arr[pivot]) {
            left++
        }
        if (arr[right] >= arr[pivot]) {
            right--
        }
    }
    swap(arr, right, pivot)
    quickSortHelper(arr, start, right - 1)
    quickSortHelper(arr, right + 1, end)
}

// ///////////////////////////////////////////////////////////////////////////

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let arr = [38, 43, 41, 56, 12, 11, 22, 44]
console.log(quicksort(arr));