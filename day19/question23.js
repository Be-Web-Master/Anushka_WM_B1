// 23. Convert a given string to uppercase using a loop.

function upperCase(str){
    let str2 = "";
    for (const char of str) {
        let value = char.charCodeAt();
        // console.log(value)
        if(value>=97 && value<=122){
            str2 += String.fromCharCode(value-32)
        }else str2 += char
    }
    console.log(str2)
}
const str ="hgdsfghjk"
upperCase(str)