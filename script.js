//1. Create an empty Map called myMap.

const myMap = new Map();

//2. Add the following key-value pairs to myMap: "name" - "John", "age" - 25, "city" - "New York".

myMap.set('name','John')
myMap.set('age','25')
myMap.set('city','NewYork')
console.log(myMap)

//3. Check if myMap has a key "age". Return true if it exists, otherwise return false.

// if(myMap.has("age"))console.log("true")
// else console.log("false")

//4. Get the value associated with the key "city" from myMap.

// console.log(myMap.get("city"))

//5. Loop through all the key-value pairs in myMap and log them to the console.

// for (const key of myMap) {
//     console.log(key)
// }

//6. Remove the key "name" from myMap.

// console.log(myMap.delete("name"))
// console.log(myMap)

//7. Get the number of key-value pairs in myMap.
// console.log(myMap.size)

//8.Create a new Map called secondMap and add the same key-value pairs as myMap to it.

const secondMap = new Map();
secondMap.set('name','John')
secondMap.set('age','25')
secondMap.set('city','NewYork')
console.log(secondMap)

//9. Merge the key-value pairs from secondMap into myMap.

const result = new Map([...secondMap, ...myMap])
console.log(result)

//10. Clear all the key-value pairs from myMap.

myMap.clear()
console.log(myMap)