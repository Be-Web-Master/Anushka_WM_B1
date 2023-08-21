//2. Design a form with a single input field and a submit button. When the form is submitted, display an alert with the text entered in the input field (Event: submit).

const form = document.getElementById("form")

// const input = document.getElementById("input")

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    // console.log(event)
    alert(event.target.inutText.value)
})
