//1. Create a function called setLocalStorageItem that takes two parameters, key and value, and uses the localStorage.setItem() method to set the given key-value pair

function setLocalStorageItem(){
    localStorage.setItem("name","anushka")
}
console.log(setLocalStorageItem())

//2. Create a function called getLocalStorageItem that takes a key parameter and uses the localStorage.getItem() method to retrieve the value

function getLocalStorageItem(){
   const elem = localStorage.getItem("name")
   console.log(elem)
}
console.log(setLocalStorageItem())