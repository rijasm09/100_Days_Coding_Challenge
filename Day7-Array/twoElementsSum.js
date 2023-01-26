// to check if sum of two elements in an array will be the target value

const twoSum = (arr,target) => {
    let numSet = new Set();

    for (let i = 0; i < arr.length; i++) {

        if (numSet.has(target-arr[i])) {
            let j = arr.indexOf(target-arr[i]);
            console.log(arr[j],arr[i]);
        }        
        numSet.add(arr[i])
    }
}


let arr = [3, 5, 2, 4,8,6]
twoSum(arr, 7)