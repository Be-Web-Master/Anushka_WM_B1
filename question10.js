// 10.Create a div of full 100vh and 100vw width and when user right click on div then changes background color to a random color on each click.

const newDiv = document.getElementById("new-div")
var randomColor = Math.floor(Math.random()*16777215).toString(16);
newDiv.addEventListener("contextmenu",()=>{
    newDiv.style.backgroundColor= "#"+randomColor
})