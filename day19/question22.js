//22. Create a program that counts the occurrence of each character in a given string and displays the character count.

function characterCount(str,char){
    let count ={},
    loopString = str.split('');

    for(let i=0; i<loopString.length; i++){
        if(count[loopString[i]]){
            count[loopString[i]] += 1
        }else{count[loopString[i]] = 1}
    }
    return {count , char: count[char]}
}
console.log(characterCount("rfghyfgh","h"))