//7.  Write a function that takes an array of numbers and calculates the sum of even numbers using a for...of loop.

function arrayGen(num){
    const outputArr = []
    for(let i=0; i<= num ; i++){
        outputArr.push(i)
    }
    return outputArr
}
let arr = arrayGen(10)
let sum =0 
for (const num of arr) {
    if(num % 2 === 0){
        sum += num
    }
}
console.log(sum)