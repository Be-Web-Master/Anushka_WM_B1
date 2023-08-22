const arr = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,70]
function binarySearch(arr,searchedValue){
    let start = 0, end = arr.length-1,
    mid = Math.floor((start+end)/2)
    while(arr[mid] !== searchedValue && start <= end){
        if(arr[mid] < searchedValue){
            start = mid+1
        }else end = mid-1
        mid = Math.floor((start+end)/2)
    }
    if(arr[mid] === searchedValue) return mid
    return -1
}
console.log(binarySearch(arr,72))