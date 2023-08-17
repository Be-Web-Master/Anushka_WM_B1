//1.  Using a for and forEach loop, write a program that prints the squares of the numbers from 1 to 10.


//for
// for(let i=1; i<=10; i++){
//     console.log(i ** 2)
// }


//forEach
function arrayGen(num){
    const outputArr = []
    for(let i=0; i<= num ; i++){
        outputArr.push(i)
    }
    return outputArr
}
let arr = arrayGen(10)
// arr.forEach(elem => {
//     console.log(elem ** 2)
// })

//While
let i=1
while(i<=arr.length){
    console.log(i ** 2)
    i++
}