// Cesear cipher with a key of 1

// passwords 
let password1 = 'mypassword'
let password2 = 'monkey'
let password3 = 'dog'

// function to encode a password
function encodeString(string) {
    const key = 1
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let encodedString = ""
    for (let i = 0; i < string.length; i++) {
        encodedString += alphabet[(alphabet.indexOf(string[i]) + key)]
    }
    return encodedString
}

// function to decode a password
function decodeString(encodedString, key) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let decodedString = ""
    for (let i = 0; i < encodedString.length; i++) {
        decodedString += alphabet[(alphabet.indexOf(encodedString[i]) - key)]
    }
    return decodedString
}

console.log(encodeString(password1))
console.log(encodeString(password2))
console.log(encodeString(password3))

console.log(decodeString(encodeString(password1), 1))
console.log(decodeString(encodeString(password2), 1))
console.log(decodeString(encodeString(password3), 1))