// Get the unique values of an array
// — create a function that takes 1 args: arr
// — this function returns a new array of values from arr, only those which occur only once in that array

function uniqueValue(arr){
    let frequency = {}
    arr.forEach((elem,i,arr) => frequency[elem]=0);
    return frequency
}
console.log(uniqueValue([1,2,3,4,1,2,6,7,8]))