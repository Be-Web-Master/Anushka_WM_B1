//8. Use the for...of loop to iterate through an array of strings and concatenate them into a single sentence.

const str = ['anushka', 'arzoo', 'aastha', 'sakshee']
let newArr
for (const key of str) {
    newArr = str.join(" ")
}
console.log(newArr)