//1. Create a button element. When the button is clicked, change the text of the button to "Clicked!" (Event: click).

const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    btn.innerText = "clicked"
})

console.log(btn)