const inputData = document.getElementById("inputData")
const dataDiv = document.getElementById("newData")
async function submitForm(event) {
    event.preventDefault()
    if(inputData.value>=0 && inputData.value<=200){
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${inputData.value}`)
        const data = await response.json() 
        dataDiv.innerHTML = `<p><strong>${data.id}:</strong> ${data.title}<p>`
        // dataDiv.append(newData)

    }else{
        console.log("error")
    }
}