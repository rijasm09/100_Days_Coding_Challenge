
function removeDuplicates(arr) {
    // console.log(...new Set(arr));
    return [...new Set(arr)];
}

// Usage example
let myArray = [1, 2, 3, 1, 2, 3, 4];
let uniqueArray = removeDuplicates(myArray);
console.log(uniqueArray); // Output: [1, 2, 3, 4]


// In this example, the removeDuplicates function takes an array as
//  an argument and returns a new array with the duplicate elements removed.
//  The function uses the Set constructor to create a new set
//  from the input array, which automatically removes any duplicate elements.
//  Then, the spread operator (...) spreads the elements of the set into
//  a new array. The unique array is returned as the result.

// You can test this function with different arrays as an input and
// ee how it removes the duplicate elements.

// This function is efficient, easy to understand and preserves
// the order of the elements.


// /////////////////////////////////////////


// function removeDuplicates(arr) {
//     var uniqueArr = [];
//     for (var i = 0; i < arr.length; i++) {
//       if (uniqueArr.indexOf(arr[i]) === -1) {
//         uniqueArr.push(arr[i]);
//       }
//     }
//     return uniqueArr;
//   }
  
  
  // This function uses a for loop to iterate through the input array, 
  // and checks if each element is already in the uniqueArr using 
  // the indexOf() method. If the element is not found in the uniqueArr,
  //  it is added to the uniqueArr. The function returns the uniqueArr,
  //   which contains only unique elements from the input array.
  
  // Note: This method is not efficient for large arrays, since indexOf() is
  //  O(n) time complexity.
//   worst case time complexity = O(n^2)


/////////////////////////////////////////////////////

var removeDuplicates = function(nums) {
  let i=0;
  for(let j=1;j<nums.length;j++){
    
      if(nums[j]!==nums[i]){
          nums[i]=nums[j]
          i++
      }
  }
return i+1;

};