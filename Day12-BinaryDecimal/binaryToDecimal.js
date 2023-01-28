function binaryToDecimal(num) {
    let length = num.toString().length;
    let decimal = 0;
    for (let i = 0; i < length; i++) {
        let rem = num % 10
        if (rem !== 0) {
            decimal += (rem * (2 ** i))
        }
        num = Math.floor(num / 10)        
    }
    console.log(decimal);

}

let binary = 1110000
binaryToDecimal(binary)