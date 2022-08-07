const categoriesList = document.querySelector('#categories')
const categoriesListItem = categoriesList.querySelectorAll(`.item`)

console.log(`Number of categories: ${categoriesList.querySelectorAll(`.item`).length}`)

categoriesListItem.forEach((item => console.log(`Category: ${item.firstElementChild.textContent} 
Elements: ${item.lastElementChild.children.length}`)))

// console.log("")
// console.log(`Category: ${categoriesList.children[0].firstElementChild.textContent}`)
// console.log(`Elements: ${categoriesList.children[0].lastElementChild.children.length}`)

// console.log("")
// console.log(`Category: ${categoriesList.children[1].firstElementChild.textContent}`)
// console.log(`Elements: ${categoriesList.children[1].lastElementChild.children.length}`)

// console.log("")
// console.log(`Category: ${categoriesList.children[2].firstElementChild.textContent}`)
// console.log(`Elements: ${categoriesList.children[2].lastElementChild.children.length}`)


