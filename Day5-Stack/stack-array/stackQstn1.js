// given an array if second element greater than first
// element push second element or push -1

function operate(array) {
    let result = [];
    for (let i = 0; i < array.length-1; i++) {
        if (array[i + 1] > array[i]) {
            result.push(array[i + 1])
        } else {
            result.push(-1)
        }
    }
    console.log(result);
}


let array = [2, 10,3,2,4,6,3,4,67,2,4]
operate(array)