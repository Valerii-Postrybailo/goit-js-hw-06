const textInput = document.querySelector("input");
const textNeededLength = document.querySelector('input[data-length = "6"]')

// console.log(textNeededLength.dataset.length) 

// console.log(textInput.textContent.length === 0)

textInput.addEventListener("blur", (event) => {
  // console.log(event.currentTarget.value.length)
  // console.log(textNeededLength.dataset.length)
  
  // console.log(textNeededLength.dataset.length == event.currentTarget.value.length)
  
  if (textNeededLength.dataset.length == event.currentTarget.value.length){
    textInput.classList.remove("invalid")
    textInput.classList.add("valid")
  } else {
    textInput.classList.remove("valid")
    textInput.classList.add("invalid")
  }
})


