// merge two array without using any inbuilt method

const concat = (arr1, arr2) => {
    let m = arr1.length;
    let n = arr2.length;

    for (let i = 0; i < n; i++) {
        arr1[i+m] = arr2[i]
    }
    console.log(arr1);
}


let arr1 = [1, 2, 3,7];
let arr2 = [4, 5, 6,9,8,6];
concat(arr1, arr2)