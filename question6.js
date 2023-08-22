// merge sort
const arr =  [6,8,11,9,3,5,15]
const seperate = arr.map(num => [num])
// console.log(seperate)

function mergeSort(arr1,arr2){
    const idx1 = 0, idx2 = 0 , resultArr = []
    if(arr1[idx1] > arr2[idx2]) {
        resultArr.push(arr2[idx2])
        if(arr2.length -1 === idx2) resultArr.push(...arr1.slice(idx1))
        else idx2++
    }else{
        resultArr.push(arr1[idx1])
        if(arr1.length -1 === idx1) resultArr.push(...arr2.slice(idx2))
        else idx1++
    }
    console.log(resultArr)
}
function seperatetwoArr(seperate){
    let i1=0,i2=1
    const resultArr1 = []
    while(i1< seperate.length && i2<seperate.length){
        const mergeArr = mergeSort(seperate[i1],seperate[i2])
        resultArr1.push(mergeArr)
        if(i1 === seperate.length-3){
            i1 += 1
            resultArr1.push(seperate[i1])
            return resultArr1
        }
        else i1 += 2
        // if(i2 === seperate.length-1){
        //     return resultArr1
        // }
        // i1 += 2;
        i2 += 2;
    }
}
console.log(seperatetwoArr(seperate))



