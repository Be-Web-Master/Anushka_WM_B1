//1. Create an empty Set called mySet.
const mySet = new Set()

//2. Add the following values to mySet: 1, 2, 3, 4, 5.

mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(4)
mySet.add(5)
console.log(mySet)

//3. Check if mySet contains the value 3. Return true if it exists, otherwise return false.
// if(mySet.has(3)) console.log(true)
// else console.log(false)

//4. Loop through all the values in mySet and log them to the console.

// for (const value of mySet) {
//     console.log(value)
// }

//5. Remove the value 4 from mySet.

mySet.delete(4)
console.log(mySet)

//6. Create another Set called secondSet and add the values 3, 4, 5, 6, 7 to it.

const secondSet = new Set();
secondSet.add(3)
secondSet.add(4)
secondSet.add(5)
secondSet.add(6)
secondSet.add(7)
console.log(secondSet)

//7. Find the intersection of mySet and secondSet, and store the result in a new Set called intersectionSet.

function interSection(mySet,secondSet){
    const intersectionSet = new Set()
    for (const elem of secondSet) {
        if(mySet.has(elem)) intersectionSet.add(elem)
    }
    return intersectionSet
}
console.log(interSection(mySet,secondSet))

//8. Find the union of mySet and secondSet, and store the result in a new Set called unionSet.

function union(mySet,secondSet){
    const unionSet = new Set(mySet)
    for (const elem of secondSet) {
        unionSet.add(elem)
    }
    return unionSet
}
console.log(union(mySet,secondSet))

//9. Clear all the values from mySet.

mySet.clear()
console.log(mySet)

//10. Check if mySet is empty. Return true if it is empty, otherwise return false.

if(mySet.size) console.log(true)
else console.log(false)