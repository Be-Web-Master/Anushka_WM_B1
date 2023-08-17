//4. Create a do...while, for, forEach, map loop that calculates and prints the factorial of a given number.

function arrayGen(num){
    const outputArr = []
    for(let i=1; i<= num ; i++){
        outputArr.push(i)
    }
    return outputArr
    // console.log(outputArr)
}
let arr = arrayGen(5)
// let factorial = 1
// const map = arr.map((elem) =>{
//     return factorial*=elem
//  })
// console.log(map)


//forEach

arr.forEach(elem =>{
    factorial*=elem
    console.log(factorial)
})


//for

// function calculateFactorial(num){
//     let factorial = 1
//     for(let i=1; i<=num; i++){
//         factorial *= i;
//     }
//     console.log(factorial)
// }
// calculateFactorial(4)


//do....while

// function calculateFactorial(num){
//     let factorial=1,i=num
//     do{
//         factorial *= i;
//         i--
//     }while(i>=1)
//     console.log(factorial)
// }
// calculateFactorial(4)