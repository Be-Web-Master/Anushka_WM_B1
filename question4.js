//4. Create a text input element. Add a blur event listener that alerts "Input blurred!" when the user clicks away from the input field (Event: blur).

const input = document.getElementById("input")
input.addEventListener("blur", ()=>{
    alert("Input blurred")
})