// "4. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

function palindromString(str){
    let str2 =''
    for(let i=str.length-1; i>=0;i--){
        str2 += str[i]
    }  
    if(str === str2){
        console.log("It is a palindrome string")
    }else console.log( "It is not a palindrome string")
}
const str = 'moma'
palindromString(str)