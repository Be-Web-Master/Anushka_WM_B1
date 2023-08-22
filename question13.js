//13. Write a program that counts the number of times a user clicks anywhere on the page and displays the count in an element with the ID "clickCount".

const click = document.getElementById("clickcount")
let count = 0
window.addEventListener("click",()=>{
    count += 1
    // console.log(count += 1)
    click.innerText = `${count}`
})