// To print fibonacci series


// const fiboncacci = (n) => {
//     const fib = [0, 1]

//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     console.log(fib);
// }

// fiboncacci(7);

// o/p : [0, 1, 1, 2,3, 5, 8]

// O(T) : O(n)

// //////////////////////////////////////////////////////

// USING ------------------------- RECURSION

// METHOD 1: My method

// const fib = [0, 1];

// const fiboncacci = (i, n) => {
//     if (i < n) {
//         fib[i] = fib[i - 1] + fib[i - 2]
//         i++;
//         fiboncacci(i,n);
//     } else {
//         return fib[i]
//     }
// }

// fiboncacci(2, 7)
// console.log(fib);

// METHOD 2: to print nth element in fibonacci series

const fibonacci = (n) => {
    if (n == 1) {
        return 0;
    } else if (n == 2 || n == 3) {
        return 1;
    } else {
        return (fibonacci(n - 1) + fibonacci(n - 2))
    }
}

console.log(fibonacci(6));

// Complexity : O(2^n)

// here in each step it get divides into 2 children 
//  This is because the function calls itself repeatedly, each time with a slightly smaller input, 
// until it reaches the base case. However, each time the function is called, it creates a new call stack, 
// leading to a large number of function calls for large input values. 
// This is known as the recursive call tree and the large number of function calls is what causes the exponential time complexity.



