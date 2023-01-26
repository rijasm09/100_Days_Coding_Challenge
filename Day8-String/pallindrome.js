// to check wether a given string is pallindrome or not


const pallindrome = (str) => {
    let flag = 1;
    let n = str.length-1 ;
    for (let i = 0; i < (str.length)/2; i++) {
        if (str[i] !== str[n--]) {
            flag = 0; 
        }
    }
    console.log(flag);
    if (flag === 1) {
        return(console.log("given string is a pallindrome"))
    } else {
        return(console.log("given string is NOT a pallindrome"))
    }
}


let str = "malayalam"
pallindrome(str);


// The worst-case time complexity of the above function
//  is O(n/2) or O(n) because the for loop iterates through 
//  half of the length of the input string and performs a 
//  constant amount of operations in each iteration.