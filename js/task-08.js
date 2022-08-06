const loginForm = document.querySelector(".login-form")

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const {elements: { email, password }} = event.currentTarget;

  if (email.value.length == 0 || password.value.length == 0) {
    alert("Complete all empty field")
  } else { 
    
    const userData = {
    email: email.value,
    password: password.value
    }

    console.log(userData)

    event.currentTarget.reset();
  }
})