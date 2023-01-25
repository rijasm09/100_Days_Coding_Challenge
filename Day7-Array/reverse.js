// reverse an array

// function reverseArray(arr) {
//     return arr.reverse();
//   }
  
//   let myArray = [1, 2, 3, 4, 5];
//   console.log(reverseArray(myArray));
  
  // Output: [5, 4, 3, 2, 1]

  
//   or

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
    return arr;
  }
  
  let myArray = [1, 2, 3, 4, 5];
  console.log(reverseArray(myArray)); // Output: [5, 4, 3, 2, 1]
  
