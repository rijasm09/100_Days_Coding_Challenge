const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let n = i;
        for (let j = n - 1; j >= 0; j--, n--) {
            if (arr[n] < arr[j]) {
                let temp = arr[n]
                arr[n] = arr[j]
                arr[j] = temp
            }
        }
    }
}

const insertionSort1 = (arr)=>{
   for (let i = 0; i < arr.length; i++) {
    let numberToInsert = arr[i]
      let j = i-1;
      while (j >=0 && arr[j] > numberToInsert) {
        arr[j+1] = arr[j]
        j = j-1;
      }    
      arr[j+1] = numberToInsert;
   }
}


let arr = [2, 4, 1, 9, 3, 7, 2];
let arr1 = [2,-3,9,4,-6,7];

insertionSort(arr);
console.log(arr);

insertionSort1(arr1);
console.log(arr1);