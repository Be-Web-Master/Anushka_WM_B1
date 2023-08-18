// 14. Without using substring, Extract a substring from a given string based on start and end indices using loops.

function subString(idx1,idx2){
    let string="", str="I am anushka";
    for(let i=idx1; i<idx2; i++){
        string +=  str[i]
    }
    console.log(string)
}
subString(2,5)