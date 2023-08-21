//8. Design an input field. Implement a keyup event listener that displays an alert with the current value of the input field whenever a key is released (Event: keyup). 

const inputText = document.getElementById("inputText")
inputText.addEventListener("keyup",(event)=>{
    event.preventDefault();
    alert(event.target.value)
})