const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const itemMurkup = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item")
  liEl.textContent = ingredient
  return liEl
})

ingredientsList.append(...itemMurkup)
console.log(ingredientsList)
