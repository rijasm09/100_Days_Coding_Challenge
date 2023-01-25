// compare 2 strings whether they both are equal


//  Without using inbuilt method
const compareString = (str1, str2) => {
    let count = 0
    for (let i = 0; i < str1.length; i++) {
         if (str1[i] === str2[i]) {
            count++
         }        
    }
    if (count === str1.length) {
        return(console.log("Both are Same"))
    } else{
        console.log("Both are not same");
    }
}


const string1 = "Rijass"
const string2 = "Rijas"
compareString(string1, string2)

//  O(T) = O(n)



// Using compare Method

function compare(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase())
        console.log("The strings are similar");
    else
        console.log("The strings are not similar");
}

const str1 = "Anandhu"
const str2 = "Anandhu"
compare(string1, string2)