//1.Create a function that takes a number and returns a string representation with exactly 2 digits after the decimal point. (Method: .toFixed())

// function returnString(num){
//     return num.toFixed(2)
// }
// console.log(returnString(28.45625))

//2. Write a function that takes a number and returns a string representation with 3 significant digits. (Method: .toPrecision())

// function returnString(num){
//     return num.toPrecision(3)
// }
// console.log(returnString(28.45625))

//3. Implement a function that takes a number in form of string and returns its integer value. (Method: .parseInt())

// function returnString(num){
//     return parseInt(num)
// }
// console.log(returnString(28.45625))

//4. Create a function that takes a number in form of string and returns its floating-point value. (Method: .parseFloat())

// function returnString(num){
//     return parseFloat(num)
// }
// console.log(returnString(24.5625))

//5. Write a function isFinite , that returns true if a given number is finite. (Method: .isFinite())

// function isFiniteNum(num){
//     return isFinite(1000/num)
// }
// console.log(isFiniteNum(1))

//6. Implement a function that checks if a given value is an integer. (Method: .isInteger())

// function isIntegerNum(num){
//     return Number.isInteger(num)
// }
// console.log(isIntegerNum(1.4555))

//7. Create a function that checks if a given value is not a number. (Method: .isNaN())


// function isNaNNum(num){
//     return isNaN(num)
// }
// console.log(isNaNNum(1))
// console.log(isNaNNum())

//8. Write a function that checks if a given value is within the safe integer range in JavaScript. (Method: Number.isSafeInteger())

// function isSafe(num){
//     return Number.isSafeInteger(num)
// }
// console.log(isSafe(1.25))

//9. Create a function that takes a number as input and checks if it is within the range of the largest and smallest floating-point numbers. Return true if it's within the range, otherwise return false. (Method: Number.MAX_VALUE, Number.MIN_VALUE)

function minMaxValue(num){
    const x = Number.MAX_VALUE,
    y= Number.MIN_VALUE;
    if(num<=x && num>=y){ return true}
    else{return false}
}
console.log(minMaxValue(23335))

//10.Write a function that takes a number as input and checks if it is within the range of the largest and smallest integers. Return true if it's within the range, otherwise return false. (Method: Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)

function minMaxInteger(num){
    const x = Number.MIN_SAFE_INTEGER,
    y= Number.MAX_SAFE_INTEGER;
    if(num<=y && num>=x){ return true}
    else{return false}
}
console.log(minMaxInteger(420.365))

//11. Implement a function that takes a number as input and returns true if it equals negative infinity, otherwise return false. (Method: Number.NEGATIVE_INFINITY)

// function negativeInfinite(num){
//     if(num === Number.NEGATIVE_INFINITY) {return true}
//     else return false
// }
// console.log(negativeInfinite(-Number.MAX_VALUE))
// console.log(negativeInfinite(-Number.MAX_VALUE * 2))

//12.Create a function that takes a number as input and returns true if it equals positive infinity, otherwise return false. (Method: Number.POSITIVE_INFINITY)

// function positiveInfinite(num){
//     if(num === Number.POSITIVE_INFINITY) {return true}
//     else return false
// }
// console.log(positiveInfinite(Number.MAX_VALUE))
// console.log(positiveInfinite(Number.MAX_VALUE * 2))