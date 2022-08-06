const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(`.gallery`)

const imgMurkup = images.map((img) =>
  `<li class = "item"> 
    <img src = ${img.url} width = 400 height = 300 alt = "${img.alt}">
  </li>`).join("");

gallery.insertAdjacentHTML("afterbegin", imgMurkup)
gallery.style.padding = "0"
gallery.style.listStyle = "none"
gallery.style.display = "flex"
gallery.style.justifyContent = "center"
gallery.style.gridGap = "30px"



