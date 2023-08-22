//11. Create a button and when user click on button then it show a modal with user's name, age, gender and email with a "Close" text on the top right side and hide modal click of this text.

const btn = document.getElementById("btn")
const newDiv = document.getElementById("new-div")
const closeBtn = document.getElementById("close")

btn.addEventListener("click",()=>{
    newDiv.style.opacity = "1"
})
closeBtn.addEventListener("mousedown",()=>{
    newDiv.style.opacity = "0"
})