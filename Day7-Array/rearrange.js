// function rearrange(arr) {
//     let temp = []
//     let flag = true
//     let end = arr.length
//     let start = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (flag) {
//             temp[i] = arr[--end]
//         } else {
//             temp[i] = arr[start++]
//         }
//         flag = !flag
//     }
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = temp[i]
//     }
//     console.log(arr);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7]
// rearrange(arr)

// [7, 1, 6, 2,5, 3, 4]




const rearrange = (arr) => {
    let n = arr.length;
    let arr1 = Array(n);
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            arr1[i] = arr[n - 1 - i / 2];
        } else {
            arr1[i] = arr[i / 2];
            
        }
    }
    return arr1;
}

let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(rearrange(arr))
