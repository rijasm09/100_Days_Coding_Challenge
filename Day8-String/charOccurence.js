// const charOccurence = (string) => {
//     newStr = "";
//     count = 1;
//     for (let i = 0; i < string.length; i++) {
//         if (string.charAt(i) === string.charAt(i + 1)) {
//             count++
//         } else {
//             newStr += (count + string.charAt(i));
//             count = 1;
//         }
//     }
//     console.log(newStr);
// }


// charOccurence("aaabbc")

const charOccurence = (string) => {
    newStr = "";
    count = 1;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i+1]) {
            count++
        } else {
            newStr += (count + string[i]);
            count = 1;
        }
    }
    console.log(newStr);
}

charOccurence("aaabbc")