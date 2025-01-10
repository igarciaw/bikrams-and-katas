// Esta es otra solución. Si quieres comprobar este código cambia en index.html el src del script a scriptsolution.js
const characterList = document.getElementById("character-list")
const prevBtn = document.getElementById("prev-page")
const nextBtn = document.getElementById("next-page")

const urlBase = "https://rickandmortyapi.com/api/character/?page="
let page = 1

const getCharacters = () => {
  console.log("esta es la página actual", page)
  characterList.innerHTML = ""
  if(page === 1) {
    prevBtn.disabled = true
    prevBtn.classList.add("disabled")
  } else {
    prevBtn.disabled = false
    prevBtn.classList.remove("disabled")
  }
  fetch(`${urlBase}${page}`)
  .then(
    response => {
      if (!response.ok){
          throw new Error ("No ha funcionado")
      }
      return response.json()
    })
  .then(data => {
    let characters = data.results;
    
    characters.forEach(character => {
      const template = 
      `
      <li class="">
        <img src=${character.image} alt=${character.name} />
        <div class="text">
          <h2><span>name:</span> ${character.name}</h2>
          <p><span>species:</span> ${character.species}</p>
        </div> 
      </li>
      `
      characterList.innerHTML += template
    });
  }).catch(err => console.error(err))
}

const changePage = (clickValue) => {
  clickValue
  getCharacters()
}

nextBtn.addEventListener("click", () => changePage(page++))
prevBtn.addEventListener("click", () => changePage(page--))


getCharacters()