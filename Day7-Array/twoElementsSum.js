// // to check if sum of two elements in an array will be the target value

const twoSum = (arr,target) => {
    let numSet = new Set();

    for (let i = 0; i < arr.length; i++) {     // O(n)

        if (numSet.has(target-arr[i])) {          //O(1)
            let j = arr.indexOf(target-arr[i]);
            console.log(arr[j],arr[i]);
        }        
        numSet.add(arr[i])
    }
}


let arr = [3, 5, 2, 4,8,6]
twoSum(arr, 7)

// final complexity = O(n)


// function twoSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] + arr[i + 1] === target) {
//             return [i, i + 1]
//         }
//     }
//     return []
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(twoSum(arr, 5));
