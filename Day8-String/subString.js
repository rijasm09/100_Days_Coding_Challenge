// find if the string exists in the parent string


const substring = (string1, str) => {
    let result = string1.indexOf(str)

    if (result !== -1) {
        return (console.log("Substring is present in the parent string"))
    } else {
        return (console.log("Substring is not present"))
    }
}

const string1 = "hello how are you";
const str = "aree";
substring(string1, str)