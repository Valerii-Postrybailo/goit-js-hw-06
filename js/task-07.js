const inputEl = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')

inputEl.value = 16;

inputEl.addEventListener("input", (event) => {
  spanText.style.fontSize = `${event.currentTarget.value}px`;
  console.log(event.currentTarget.value)
})