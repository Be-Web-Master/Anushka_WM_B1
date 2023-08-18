//21. Using loop, Create a function that takes a string as input and returns the reverse of that string.

function reverseString(str){
    let reversestr =""
    for(let i= str.length -1; i>=0; i--){
        reversestr += str[i]
    }
    console.log(reversestr)
}
let str = "dghdfsgj"
reverseString(str)