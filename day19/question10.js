//10. Modify an array of numbers using the forEach loop to double each value in place.

let arr = [1,2,3,4,5]
const arr1 = []
for (const key of arr) {
   arr1.push(key*2)
}
console.log(arr1)