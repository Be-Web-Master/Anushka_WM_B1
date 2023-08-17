//12.  Implement a function that uses the reduce method to calculate the sum of all elements in an array.

function arrayGen(num){
    const outputArr = []
    for(let i=0; i<= num ; i++){
        outputArr.push(i)
    }
    return outputArr
}
let arr = arrayGen(5)
let sum =0;
let result = arr.reduce((acc,currentValue) =>{
    return acc + currentValue
},sum)
console.log(result)