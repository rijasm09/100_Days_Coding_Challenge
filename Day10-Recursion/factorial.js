// Factorial of Number..

// const factorial = (n) => {
//     let f = 1;
//     for (let i = 2; i <= n; i++) {
//         f = f * i
//     }
//     return f;
// }

// console.log(factorial(5));

// The worst-case time complexity of this code is O(n),
// as the number of iterations in the for loop is directly proportional to the input value of n.
// Each iteration performs a constant amount of work (multiplying by two numbers and reassigning the result to a variable),
// so the overall time complexity is linear.   


// USING --------- RECURSION  : 

// let fact = 1;

const factorial = (n) => {

    if (n == 1) {

        return 1
    } else {
        return (n * factorial(n - 1))
    }
}

console.log(factorial(5));

// The worst-case complexity of this implementation of the factorial function is O(n) or linear time.
// This is because the function is called recursively n times, and each call performs a constant amount of
// work (multiplying by n and decrementing n), resulting in a total of n * constant = O(n) operations.
