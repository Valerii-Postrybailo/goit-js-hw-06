const userInputName = document.querySelector('#name-input')
const userOutputName = document.querySelector('#name-output')

userInputName.addEventListener("input", (event) => {
  userOutputName.textContent = event.currentTarget.value;

  if (event.currentTarget.value == "") {
    userOutputName.textContent = "Anonymous"
  }
}) 


