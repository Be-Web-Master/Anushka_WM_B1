//Linear Search

function linearSearch(arr,searchedValue){
    // for(let i= 0;i<arr.length;i++){
    //     if(searchedValue === arr[i]){
    //         return i
    //     }
    // }

    arr.forEach((element,idx) => {
        if(element === searchedValue) return idx
        
    });
    return -1
}
// console.log(linearSearch([1,2,3,1,2,4],1))

//Binary Search

function binarySearch(arr, searchedValue){
    let start = 0, end= arr.length-1,
     mid = Math.floor((start+end)/2)
     while(arr[mid] !== searchedValue && start <= end){
        if(arr[mid] < searchedValue){
            start = mid + 1
        }else{
            end = mid -1
        }
        mid = Math.floor((start+end)/2)
     }
     if(arr[mid] === searchedValue){
        return mid;
     }
     return -1
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,0,10,20,30,40,50],90))