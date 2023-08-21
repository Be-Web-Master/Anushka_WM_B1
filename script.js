//1. Create a function saveToSessionStorage that takes two parameters, key and value, and uses the setItem method to save the given key-value pair in sessionStorage.

function saveToSessionStorage (key, value){
     sessionStorage.setItem(key,value)
}
saveToSessionStorage("name","anushka")

console.log(saveToSessionStorage("age","21"))

//2. Write a function getSessionStorageItem that takes a key parameter and uses the getItem method to retrieve the value associated with that key from sessionStorage.

function getSessionStorageItem(key){
    return sessionStorage.getItem(key)
}
console.log(getSessionStorageItem("age"))

//3. Design a function removeSessionStorageItem that takes a key parameter and uses the removeItem method to remove the corresponding key-value pair from sessionStorage.

function removeSessionStorageItem (key){
    sessionStorage.removeItem(key)
}
removeSessionStorageItem("name")
console.log(getSessionStorageItem("name"))
console.log(getSessionStorageItem("age"))

//4. Construct a function clearSessionStorage that uses the clear method to remove all the stored data in sessionStorage.

function clearSessionStorage (){
    sessionStorage.clear()
}
clearSessionStorage()
console.log(getSessionStorageItem("age"))


//5. Create a function getSessionStorageKeyByIndex that takes an index parameter and uses the key method to retrieve the key at that index from sessionStorage.

function getSessionStorageKeyByIndex(idx){
    sessionStorage.key(idx)
}
console.log(getSessionStorageKeyByIndex(0))

//6. Write a function getSessionStorageLength that uses the length property to return the number of key-value pairs currently stored in sessionStorage.

function getSessionStorageLength (){
    return sessionStorage.length
}
console.log(getSessionStorageLength())