//1. Create a function called setLocalStorageItem that takes two parameters, key and value, and uses the localStorage.setItem() method to set the given key-value pair

function setLocalStorageItem(key,value){
    localStorage.setItem(key, value)
}
setLocalStorageItem("name","anushka")
setLocalStorageItem("age","21")
console.log(localStorage.getItem("name"))
console.log(localStorage.getItem("age"))

//2. Create a function called getLocalStorageItem that takes a key parameter and uses the localStorage.getItem() method to retrieve the value

//3. Create a function called removeLocalStorageItem that takes a key parameter and uses the localStorage.removeItem() method to remove the corresponding key-value pair from localStorage.

function removeLocalStorageItem(key){
    localStorage.removeItem(key)
}
console.log(removeLocalStorageItem("name"))
console.log(localStorage.getItem("name"))

//4. Create a function called clearLocalStorage that uses the localStorage.clear() method to remove all the data stored in localStorage.

function clearLocalStorage (){
    localStorage.clear()
}
clearLocalStorage()
console.log(localStorage.getItem("name"))

//5. Create a function called getLocalStorageLength that uses the localStorage.length property to return the number of key-value pairs currently stored in localStorage.

function getLocalStorageLength(){
    return localStorage.length;
}
console.log(getLocalStorageLength())

//6. Create a function called getLocalStorageKeyByIndex that takes an index parameter and uses the localStorage.key() method to return the key at that index from localStorage.

function getLocalStorageKeyByIndex(idx){
    return localStorage.key(idx)
}
console.log(getLocalStorageKeyByIndex(0))