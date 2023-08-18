//25. Find and print the longest word in a sentence using loops.


function longestWord(str){
    let chunck = str.split(" "),
    maxlen =0,
    longestword =""
    for(let i=0;i<chunck.length ; i++){
        if(chunck[i].length > maxlen){
            maxlen = chunck[i].length
            // console.log({maxlen})
            longestword = chunck[i]
            // console.log({longestword})
            
        }
    }
    console.log(longestword)
    // console.log(maxlen)
    
}
const str ="i am anushka"
longestWord(str)