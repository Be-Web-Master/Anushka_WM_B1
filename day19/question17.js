//17. Write a function that takes a positive integer as input and returns the sum of its digits each raised to the power of the number of digits in the original integer.

function sumOfDigit(num){
    let total =0,rem;
    let n=""+num , len=n.length
    // console.log(len)
    while(num>0){
        rem = num%10;
        total += Math.pow(rem,len);
        num = Math.floor(num/10)
    }
    console.log(total)

}
sumOfDigit(123)
