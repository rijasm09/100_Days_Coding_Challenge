
function binaryConverstion(num) {
    let rem = []
    let i = 0
    while (num > 0) {
        rem[i++] = num % 2
        num = Math.floor(num / 2)
    }

    for (let i = rem.length - 1; i >= 0; i--) {
        console.log(rem[i]);
    }
}

let num=  112
binaryConverstion(112)

