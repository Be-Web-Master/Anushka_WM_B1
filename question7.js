//7. Create a text input element. Implement a keydown event listener that alerts "Key pressed!" when any key is pressed in the input field (Event: keydown).

const inputArea = document.getElementById("textArea")

inputArea.addEventListener("keydown", ()=>{
    alert("Key pressed!")
})