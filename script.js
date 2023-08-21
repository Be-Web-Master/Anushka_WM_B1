const btn = document.getElementById("btn")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const age = document.getElementById("age")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const male = document.getElementById("male")
const female = document.getElementById("female")
const errorMessage = document.getElementsByClassName("error")[0];

function checkedAge(input) {
    // console.log(input)
    if (input === 'age' && age.value < 18) {
        errorMessage.innerText = "age should be grater than 18"
    }
    else if (input === 'phone' && phone.value.length != 10) {
        errorMessage.innerText = "no. should have 10 digit"

    }
    else {
        errorMessage.innerText = ""

    }
}

function submitDetails(event) {

    event.preventDefault();
    console.log(
        {
            firstName: firstName.value,
            lastName: lastName.value,
            age: age.value,
            phone: phone.value,
            email: email.value,
            gender: female.checked ? "female" : "male"
        }
    )
}
btn.addEventListener("click", () => {
    if (errorMessage.innerText !== "") {
        btn.innerText = "Clicked"
        btn.style.backgroundColor = "green"
    }
       
})
