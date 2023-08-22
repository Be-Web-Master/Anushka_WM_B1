//1. Count the occurrences of a value in an array
// — create a function that takes 2 args: arr, value
// — this function returns a number, that is count of number of times the value has appeared in arr

function valueCount(arr, value){
    let count = 0
    // for(let i=0;i<arr.length;i++){
    //     if(value === arr[i]){
    //         count++
    //     }
    // }
    
    // arr.forEach(element => {
    //     if(element === value){
    //         count++
    //     }
    // });

    for (const elem of arr) {
        if(elem === value){
            count++
        }
    }
    return count
}
console.log(valueCount([23,23,24,26],23))