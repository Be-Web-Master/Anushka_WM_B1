//11. Write a function that takes an array of numbers and returns a new array containing only the prime numbers using the filter method.

function arrayGen(num){
    const outputArr = []
    for(let i=0; i<= num ; i++){
        outputArr.push(i)
    }
    return outputArr
}
let arr = arrayGen(10)

const prime = arr.filter((elem) => {
        for(let i=2; i<elem; i++){
            if(elem % i ===0){
                return false;
            }
            return elem !== 1
        }
    })


console.log(prime)