// Compare two Arrays (polyfill of Array.prototype.every)
// — create a function that takes 2 args: arr1, arr2
// — this function returns either true or false, if each element of both the arrays are equal with ===

let arr1=[1,2,3,4,5]
let arr2=[1,3,3,4,5]
function compareArr(arr1,arr2){
    let check
    if(arr1.length === arr2.length)
    {
        for(let i=0;i<arr1.length;i++){
            if(arr1[i] === arr2[i]) check = "true"
            else return check = "false"
        }
    }

    else return check = "length is not equal"
    return check
}
console.log(compareArr(arr1,arr2))