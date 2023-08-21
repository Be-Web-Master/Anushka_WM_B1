let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let age = document.getElementById("age")
let phone = document.getElementById("phone")
let male = document.getElementById("male")
let female = document.getElementById("female")
let errorMessage = document.getElementsByClassName("error")[0]

const validateInput = (input)=>{
    console.log(input)
    if(input === 'age' && age.value<18 ){
        errorMessage.innerText= "Age Should be greater than 18"
    }else if(input === 'phone' && phone.value.length !== 10){
        errorMessage.innerText= "Phone number Should have 10 digit"
    }else{
        errorMessage.innerText = ""
    }
}

const handleFormSubmit = (event)=>{
    event.preventDefault();
    console.log({
        firstName : firstName.value,
        lastName: lastName.value,
        age: age.value,
        phone : phone.value,
        email : email.value,
        gender: male.checked ? "male":"female"
    })
}
