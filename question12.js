//12.  Open sidebar on click a "Open Modal" and then change button text to "Close Modal", When user clicks on "Close Modal" the hide modal and change text to "Open Modal".


const sideBar = document.getElementById("side-bar")
const btn = document.getElementById("btn")
let flag = 0
btn.addEventListener("click",()=>{
    if(flag === 0){
        btn.innerText = "Close Modal"
        sideBar.style.display = "block"
        flag = 1
    }else{
        btn.innerText = "Open Modal"
        sideBar.style.display = "none"
        flag = 0
    }
})

