//1. Creating Polyfill of map()
//map takes three parameters arr , callback function and
// this arg. and callback also takes three parameters Element, index, array

// function myMap(arr, callBack, thisArg){
//     //agr hum callback nhi denge ya uske bajaye kuch denge to error throw hoga
//     if(!arr || Array.isArray(arr)){
//         return new Error('not an array')
//     }
//     if (!callBack || typeof callBack !== 'function'){
//         return new Error(`${callBack} is not a function`)
//     }
//     const resultArr= [];
//     for(let i=0; i<arr.length; i+=1){
//         const arrElem = callBack(arr[i], i, arr)
//         resultArr.push(arrElem)
//     }
//     return resultArr
// }

// const callFunc = (el, idx , arr) => {
//     return el ** idx + arr.length
// }
// console.log(myMap([1,2,3,4,5]), callFunc)


// console.log([1,2,3,4,5].map((el, idx, arr) => {
//     return el ** idx + arr.length
// }))

//2.   filter

// function myFilter(arr, callBack){
//     if(!arr || !Array.isArray(arr)){
//         return new Error('not an array')
//     }
//     if (!callBack || typeof callBack !== 'function'){
//         return new Error(`${callBack} is not a function`)
//     }
//     const resultArr= [];
//     for(let i=0; i<arr.length; i+=1){
//         const arrElem = callBack(arr[i],i,arr)
//         if(arrElem){
//             resultArr.push(arr[i])   
//         } 
//         // resultArr.push(arrElem)   
//     }
//     return resultArr
// }

// const callFunc = (num) => {
//     return num>2
// }
// console.log(myFilter([1,2,3,4,5], callFunc))

//3.  forEach()

// function myMap(arr, callBack, thisArg){
//         if(!arr || !Array.isArray(arr)){
//             return new Error('not an array')
//         }
//         if (!callBack || typeof callBack !== 'function'){
//             return new Error(`${callBack} is not a function`)
//         }
//         for(let i=0; i<arr.length; i+=1){
//             callBack(arr[i], i, arr)
//         }
//     }
    
//     const callFunc = (el, idx , arr) => {
//         return el ** idx + arr.length
//     }
//     console.log(myMap([1,2,3,4,5], callFunc))

//4. reduce()--- it takes 4 parameter(arr, callback,initVlaue,thisAeg(optional)) and also callback take 4 parameter(acc,elem, indx,array)

function myReduce(arr, callBack, initValue, thisArg){
    let accToBe, startIdx;
    if(!initValue !== undefined){
        if(!arr.length) return initValue
        accToBe = initValue
        startIdx = 0
    }
    if(!initValue === undefined && !arr.length) return new Error("cannot run reduce with initValue")
    if(!initValue === undefined && arr.length){
        accToBe = arr[0]
        startIdx = 1
    }
    for(let i=startIdx; i<arr.length; i++){
        accToBe = callBack(accToBe, arr[i], i, arr)
    }
    return accToBe
}
function logic(acc, elem, idx , arr){
    return acc + elem
}
//for initValue
console.log(myReduce([], logic,0))
// for array
// console.log(myReduce([1,2,3,4,5], logic,10))