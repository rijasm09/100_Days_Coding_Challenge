pushZerosToEnd = (arr, n) => {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] != 0) {
            arr[count++] = arr[i] //after insertion count++
        }
    }
    while (count < n) {
        arr[count++] = 0  //aftr assigning count++
    }
}


let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
let n = arr.length;

pushZerosToEnd(arr, n);

console.log("Array after pushing all zeros to end of array :<br>");
for (let i = 0; i < n; i++)
    console.log(arr[i] + " ");

// output : 1 9 8 4 2 7 6 9 0 0 0 0

// Time Complexity = O(n)
// Space Complexity = O(1)