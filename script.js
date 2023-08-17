// const arr = [43,61,88,28,92,16,34,59,71];
// const bubbleSort = (arr) => {
    //     const length = arr.length;
    //     for(let i=0; i<length; i++){
        //         for(let j=0; j<length; j++){
            //             if(arr[i] < arr[j]){
//                 let temp = arr[i];
//                 arr[i] = arr[j]
//                 arr[j] = temp;
//             }
//         }
//     }
//     console.log(arr)
// }
// bubbleSort(arr)

// const arr = [43,61,88,28,92,16,34,59,71];
// const selectionSort = (arr) =>{
//     console.log(arr)
//     for(let i=0; i<arr.length; i++){
//         let minIndex = i;
//         console.log({minIndex})
//         let temp = arr[i]
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[j] < arr[minIndex]){
//                 console.log(arr[j], arr[minIndex])
//                 // console.log(arr[minIndex])
//                 minIndex = j;
//                 console.log(minIndex)
//             }
//         }
//         arr[i] = arr[minIndex]
//         arr[minIndex] = temp;
//         console.log(arr)
//     }
//     console.log(arr)
// }
// selectionSort(arr)

// const arr = [43,61,88,28,92,16,34,59,71];
// const insertionSort = (arr) =>{
//     for(let i=1 ; i<arr.length; i++){
//         //3
//         let current = arr[i];
//         //28
//         let j= i-1;
//         //j=2 88
//         while(j>=0 && arr[j]>current){
//             arr[j+1] = arr[j];
//             //3 = 88 2 = 88
//             j--
//             // console.log({j})
//         }
//         arr[j+1] = current
//         console.log({current})
//         console.log(arr)
//     }
//     console.log(arr)
// }
// insertionSort(arr)

const arr =  [6,8,11,9,3,5,15,1];
let seperate = arr.map(num => [num])
console.log(seperate)

function mergeSort(arr1, arr2){
    let i1 = 0, i2 =0, resultArr=[];
    if(arr1[i1] > arr2[i2]){
        resultArr.push(arr2[i2])
        if(arr2.length-1 !== i2) {++i2}
        else{resultArr.push(arr1.slice(i1))}
    }else{
        resultArr.push(arr1[i1])
        if(arr2.length-1 !== i1) ++i1
        else{resultArr.push(arr2.slice(i2))}
    }
}
mergeSort(seperate)