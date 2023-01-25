// convert given string to binary form

const binaryConverstion = (str) => {

    let binary = ""

    for (let i = 0; i < str.length; i++) {

        asc = str[i].charCodeAt(0)
        let bin = ""
        while (asc >= 1) {
            if (asc % 2 === 1) {
                bin += 1;
                r = 1;
            } else {
                bin += 0;
                r = 0;
            }
            asc = (asc - r) / (2);
        }
        let split = bin.split("");
        split = split.reverse();
        bin = split.join("");
        binary += bin + " "
    }
    console.log(binary);
}


const str = "geeks"
binaryConverstion(str)


// The worst case time complexity of this function is O(nk),

// where n is the length of the input string and k is the
// average number of bits needed to represent the ASCII value
//  of each character in the string. This is because the function
//  iterates through each character in the input string and
//   performs a while loop for each character to convert
//   the ASCII value to binary, which takes k iterations on average.
//   Therefore, the total number of iterations is nk.