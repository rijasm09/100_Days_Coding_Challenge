const prime = (n) => {
    let z;
    for (let i = 2; i <= Math.sqrt(n); i++) {     //for (let i = 2; i <= n/2; i++)  => in this case complexity is O(n/2)
        if (n % i == 0) {
            return(console.log(n," is a not prime number"))
        } else {
            z =1;
        }
    }
    if (z==1) {
        console.log(n,"is a prime number");
    }
}

prime(13);
prime(14);
prime(17);

// The worst-case time complexity of this code is O(sqrt(n)). 
// The for loop runs from 2 to sqrt(n) and in the worst-case scenario (when the input number is a prime number), 
// the function has to check each number in that range. Since the range is from 2 to sqrt(n), 
// the number of iterations of the loop is sqrt(n), which is why the time complexity is O(sqrt(n)) 
// which is more efficient than the previous one as sqrt(n) < n/2 for all n>4