//24. Truncate a given string to a specified length and add an ellipsis at the end using loops.
function stringTruncate(str,maxLen){
    let str2=""
    for(let i=0; i<=maxLen ;i++){
           str2 += str[i]
        }
        return str2+"..."
    // console.log(str)       
}
const str = "gfdghdhjkj"
let ans = stringTruncate(str,3)
console.log(ans)