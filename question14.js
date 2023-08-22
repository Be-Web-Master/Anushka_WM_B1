//14. Create a list of 4 items with different ID. When any of the list items are clicked, log the text content of the clicked item to the console.

const head = document.getElementsByClassName("head")[0]

head.addEventListener("click",(event)=>{
    event.preventDefault();
    // console.log(event)
    // console.log(event.target.attributes.id)
    console.log(event.target.outerText)

})