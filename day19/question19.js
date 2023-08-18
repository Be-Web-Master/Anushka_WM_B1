//19. Write a program to check if a given year is a leap year or not.

function leapYear(year){
    if((year%4 === 0)&&(year%100 !== 0)||(year%400 === 0)){
        console.log("leap year")
    }else console.log("not a leap year")
}
leapYear(2001)