//5. Design a form with an input field. Implement a focus event listener that changes the input's border color to blue when it gains focus (Event: focus).

const inputText = document.getElementById("inputText")
inputText.style.outline = "none"

inputText.addEventListener("focus",()=>{
    inputText.style.borderColor="blue"
})