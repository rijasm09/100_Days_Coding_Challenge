const swappingWords = (str) => {
     let newStr = str.split(" ")
     let temp = newStr[0];
     newStr[0] = newStr[1];
     newStr[1] = temp;
     str = newStr.join(" ")
     console.log(str);
}

let str = "Good Morning"
console.log(str);
swappingWords(str)