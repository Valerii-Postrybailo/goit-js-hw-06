const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const liEl = document.createElement("li");
  liEl.classList.add("item")

const itemMurkup = ingredients.map((ingredient) => document.createElement("li").textContent = `${ingredient}`)

console.log(...itemMurkup)
console.log(liEl)
ingredientsList.append(liEl)

liEl.append(...itemMurkup)
console.log(ingredientsList)
