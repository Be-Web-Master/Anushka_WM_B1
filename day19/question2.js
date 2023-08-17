//2. Implement a for loop to generate and print the first n terms of the Fibonacci sequence.

// function printFibonacci(n) {
//     let a = 0, b = 1, c;
//     console.log(a);
//     console.log(b);
//     for (let i = 2; i < n; i++) {
//       c = a + b;
//       console.log(c);
//       a = b;
//       b = c;
//     }
//   }
//   printFibonacci(10);

// function printFibonacci(n){
//     let a= 0 , b=1, i=2,c;
//     console.log(a)
//     console.log(b)
//     while(i<n){
//         c= a + b;
//         console.log(c)
//         a = b;
//         b = c
//         i++
//     }
// }
// printFibonacci(10)

function arrayGen(num){
    const outputArr = []
    for(let i=1; i<= num ; i++){
        outputArr.push(i)
    }
    return outputArr
    // console.log(outputArr)
}
let arr = arrayGen(10)
let array = [0,1]
arr.forEach(elem =>{
    
})