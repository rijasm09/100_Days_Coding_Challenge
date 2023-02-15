function isPrime(num) {
    if (num < 2) {
        return true
    }
    for (let i = 2; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function checkStack(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            result.push(array[i], " is prime")
        } else {
            result.push(array[i], " not prime")
        }
    }
    console.log(result);
}

let array = [2, 3, 4, 5, 6, 7, 8, 9, 10]
checkStack(array)