function reverseString(string) {

    let stack = [];
    for (let i = 0; i < string.length; i++) {
        stack.push(string[i]);
    }

    let reversedString = "";
    while (stack.length > 0) {
        reversedString += stack.pop();
        console.log("reversed string",reversedString);
    }
    return reversedString;
}

let originalString = "hello";
let reversedString = reverseString(originalString);
console.log(reversedString); // Output: "olleh"

