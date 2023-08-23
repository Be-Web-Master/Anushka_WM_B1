const getData = document.getElementById("btn")

// getData.addEventListener("click",async () =>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const data = await response.json()
//     console.log(data)
// })

getData.addEventListener("click",()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response)=> response.json())
    .then((data)=> console.log(data))
    .catch((error)=> console.log(error))
})