let link = 'https://rickandmortyapi.com/api/character/?page=1';

let characters = [];
fetch(link)
  .then((response) => response.json())
  .then((data) => {
    for (const result of data.results) {
      const newCharacter = {};
      newCharacter.name = result.name;
      newCharacter.species = result.species;
      newCharacter.image = result.image;
      characters.push(newCharacter);
    }
  })
  .catch((error) => {
    console.error('Error en la solicitud:', error);
  });
function printCharacters() {
  characters.forEach((character) => {
    const newLi = document.createElement('li');
    const newNameP = document.createElement('p');
    newNameP.innerText = character.name;
    const newSpeciesP = document.createElement('p');
    newSpeciesP.innerText = character.species;
    const newImg = document.createElement('img');
    newImg.src = character.image;
    newLi.appendChild(newNameP);
    newLi.appendChild(newSpeciesP);
    newLi.appendChild(newImg);
    const charactersUlList = document.getElementById('character-list');
    charactersUlList.appendChild(newLi);
  });
}
const btn = document.getElementById('next-page');
btn.addEventListener('click', printCharacters);
