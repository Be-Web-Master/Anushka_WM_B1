//3.  Write a program that uses a while loop to count down from a user-input number to 1. Print each countdown value.

function userInput(num){
    let i =num
    for(i;i>=1;i--){
        console.log(i)
    }
    // while(i>=1){
    //     console.log(i)
    //     i--
    // }
}
userInput(20)


function arrayGen(num){
    const outputArr = []
    for(let i=num; i>= 1 ; i--){
        outputArr.push(i)
    }
    return outputArr
}
let arr = arrayGen(10)
arr.forEach(elem =>{
    console.log(elem)
})