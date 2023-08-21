//6. Create a paragraph of text. Add a contextmenu event listener that displays an alert saying "Right-clicked!" when the user right-clicks on the paragraph (Event: contextmenu).

const para = document.getElementsByTagName("p")[0]

para.addEventListener("contextmenu", ()=>{
    alert("Right-clicked!")
})