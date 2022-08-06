function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector(".change-color");
console.log(colorBtn)
const bodyEl = document.querySelector("body")
console.log(bodyEl)
const colorValue = document.querySelector(".color")
  
colorBtn.addEventListener("click", () => {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`
  console.log(bodyEl)
  
  colorValue.textContent = bodyEl.style.backgroundColor
})
