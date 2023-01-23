// const print3largest = (arr) => {
//     arr.sort((a, b) => b - a)
//     console.log(arr.sort((a, b) => b - a));
//     return arr.slice(0,3)
// }


// let arr = [5, 10, 3, 44, 1, 16, 33];
// console.log(print3largest(arr));

// Time Complexity = average case time complexity of O(n log n) but worst case of O(n^2)
// Space Complexity = O(1)

// o/p : 

// [44, 33, 16, 10,5,  3,  1]
// [ 44, 33, 16 ]



//     OR : Second Method (More Efficient)

const print3largest = (arr, n) => {

    largest1 = largest2 = largest3 = -Infinity;

    for (let i = 0; i < n; i++) {

        if (arr[i] > largest1) {
            largest3 = largest2
            largest2 = largest1
            largest1 = arr[i]
        } else if (arr[i] > largest2) {
            largest3 = largest2
            largest2 = arr[i]
        } else if (arr[i] > largest3) {
            largest3 = arr[i];
        }
    }
    return [largest1, largest2, largest3]
}



let arr = [5, 10, 3, 44, 1, 16, 33];
let n = arr.length;

console.log(print3largest(arr, n));
// output : [ 44, 33, 16 ]

// Time Complexity = O(n)
// Space Complexity = O(1)