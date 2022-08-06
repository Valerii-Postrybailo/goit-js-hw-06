const counter = {

  counterValue: 0,

  increment() {
    this.counterValue += 1;
  },

  decrement() {
    this.counterValue -= 1; 
  },
};

const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]')
const counterMeaning = document.querySelector("#value")

const decrementFunction = () => {
  counter.decrement();
  counterMeaning.textContent = counter.counterValue
};

const incrementFunction = () => {
  counter.increment();
  counterMeaning.textContent = counter.counterValue
};

decrement.addEventListener("click", decrementFunction);

increment .addEventListener("click", incrementFunction);
