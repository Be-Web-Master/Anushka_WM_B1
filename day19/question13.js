//13. Write a program that finds the maximum value in an array of numbers using the reduce method.

function arrayGen(num){
    const outputArr = []
    for(let i=0; i<= num ; i++){
        outputArr.push(i)
    }
    return outputArr
}
let arr = arrayGen(5)
let initialValue =0;
let result = arr.reduce((acc,currentValue) =>{
    if(currentValue > acc){
        return currentValue
    }
    return acc
},initialValue)
console.log(result)