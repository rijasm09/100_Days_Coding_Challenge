

function encode(str, key) {
    let newKey = key % 26;
    let charArray = ""
    for (let i = 0; i < str.length; i++) {
        let letterPosition = str.charCodeAt(i) + newKey
        if (letterPosition <= 122) {
            charArray += String.fromCharCode(letterPosition)
        } else {
            charArray += String.fromCharCode(96 + letterPosition % 122)
        }
    }

    console.log(charArray);
}

encode("haz", 2)


// This function appears to be a simple implementation of a Caesar Cipher encryption method.
// The Caesar Cipher is a type of shift cipher that is used to encrypt a message by shifting
// the letters of the alphabet a certain number of places (referred to as the key).

// The function takes two parameters: a string (str) which is the message that needs to
// be encrypted and an integer (key) which represents the number of places to shift the letters.

// The function starts by calculating a new key by taking the remainder of the key divided by
// 26 (newKey = key % 26). This is done to ensure that the key is within the range of the alphabet (0-25).

// Then the function creates an empty string called charArray which will be used to
// store the encrypted message.

// The function then uses a for loop to iterate over each character in the input string.
// For each character, the function uses the charCodeAt() method to get the Unicode code point of
// the character and adds the new key to it.

// If the new letter position is less than or equal to 122 (which is the Unicode code point of
//     the lowercase letter "z"), the function uses the fromCharCode() method to convert the new
//     letter position back to a character and adds it to the charArray string.

// If the new letter position is greater than 122, the function uses the fromCharCode() method
// to convert the new letter position to the corresponding character in the alphabet by adding
// 96 to the letter position and taking the remainder of it divided by 122.

// Finally, the function logs the encrypted message stored in the charArray variable.

// It's worth noting that this encryption method is easy to crack as it only shift the letters
// by a fixed amount, and it doesn't take into account the uppercase letters or special characters