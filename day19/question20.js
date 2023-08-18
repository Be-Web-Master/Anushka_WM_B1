//20. Write a program to reverse a given number.


function reverseNumber(num){
    let rem,rest = 0
    while(num > 0){
        rem= num%10
        rest= rest*10 + rem
        num = Math.floor(num/10)
    }
    console.log(rest)
}
reverseNumber(456)