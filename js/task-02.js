const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

const itemMurkup = ingredients.map((ingredient) => `<li class = "item">${ingredient}</li>`) .join("");

console.log(itemMurkup)

ingredientsList.insertAdjacentHTML("afterbegin", itemMurkup) 
console.log(ingredientsList)
