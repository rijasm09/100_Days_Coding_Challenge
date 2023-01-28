function binaryRecursion(num) {
    if (num === 0) {
        return 0
    }
    return ((num % 2) + 10 * binaryRecursion(Math.floor(num / 2)))
}

let dec = 112
console.log(binaryRecursion(dec))
