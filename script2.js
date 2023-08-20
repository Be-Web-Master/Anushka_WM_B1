//1. Create an empty WeakMap called myWeakMap.

const myWeakMap = new WeakMap()

//2.Create two object keys: key1 and key2. Set key1 as the key and { data: “Value 1” } as the value in myWeakMap.

let key1 ={}
let key2 = {}

myWeakMap.set(key1, "value 1")
console.log(myWeakMap)

//3. Check if myWeakMap has a key for key1. Return true if it exists, otherwise return false.

// if(myWeakMap.has(key1)) console.log(true)
// else console.log(false)

//4. Get the value associated with key2 from myWeakMap.
// console.log(myWeakMap.get(key2))

//5. Create a function addToWeakMap that takes a WeakMap and a key-value pair as arguments, and adds the pair to the WeakMap.

function addToWeakMap(){
    const secondWeakMap = new WeakMap();
    const key1 = {}
    const key2 = {}
    secondWeakMap.set(key1,"value1")
    secondWeakMap.set(key2,"value2")
    console.log(secondWeakMap)
}
addToWeakMap()

//6. Create a new object key key3 and a value { data: “Value 3” }. Use the addToWeakMap function to add this pair to myWeakMap.

const key3 = {}