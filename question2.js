// Get indices of all occurrences of a value in an array (almost polyfill of Array.prototype.findIndex)
// — create a function that takes 2 args: arr, value
// — this function returns a an array of numbers, where each number is the index position of the value in arr

function valueOccurrences(arr,value){
    let indices = []
    // for(let i=0; i<arr.length; i++){
    //     if(value === arr[i]){
    //         indices.push(i)
    //     }
    // }
    arr.forEach((element,idx) => {
        if(value === element){
            indices.push(idx)
        }
    });
    return indices
}
console.log(valueOccurrences([23,56,56,87,87],56))