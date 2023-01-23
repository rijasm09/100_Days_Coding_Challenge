function print2largest(arr, n) {

    largest1 = largest2 = Number.MIN_VALUE;

    for (let i = 0; i < n; i++) {
        if (arr[i] > largest1) {
            largest2 = largest1
            largest1 = arr[i]
        } else if (arr[i] > largest2) {
            largest2 = arr[i]
        }
    }
    return largest2
}



let arr = [12, 35, 1, 10, 34, 1];
let n = arr.length;
console.log(print2largest(arr, n));

// output : 34

// Time Complexity = O(n)
// Space Complexity = O(1)