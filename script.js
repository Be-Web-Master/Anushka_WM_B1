const submitButton = document.getElementById("btn")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const age = document.getElementById("age")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const male = document.getElementById("male")
const female = document.getElementById("female")
const errorMessage = document.getElementById("error");

function validatePhoneNumber(){ error.innerText = phone.value.length !== 10 ? "number length should be 10" : ""; }
function validateAge(){ error.innerText = age.value < 18 ? "Your age should be greater or equal to 18" : ""; }

function handleOnSubmit(event) {

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
    if (errorMessage.innerText !== "") {
        submitButton.innerText = "Clicked"
        submitButton.style.backgroundColor = "green"
    }
}
