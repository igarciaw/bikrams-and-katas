let pageNumber = 1;
function getApiLink(pageNumber) {
  return `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
}
function printCharacters(characters) {
  characters.forEach((character) => {
    // reset ul
    const charactersUlList = document.getElementById('character-list');
    charactersUlList.innerHTML = '';
    // img
    const newImg = document.createElement('img');
    newImg.src = character.image;
    newImg.alt = `Image of ${character.name}`;

    // name
    const nameIntro = document.createElement('strong');
    nameIntro.classList.add('strong');
    nameIntro.textContent = 'Name: ';
    const nameDescr = document.createTextNode(character.name);

    const name = document.createElement('p');
    name.appendChild(nameIntro);
    name.appendChild(nameDescr);
    name.appendChild(nameDescr);

    // species
    const speciesIntro = document.createElement('strong');
    speciesIntro.classList.add('strong');
    speciesIntro.textContent = 'Species: ';
    const speciesDescr = document.createTextNode(character.species);

    const species = document.createElement('p');
    species.appendChild(speciesIntro);
    species.appendChild(speciesIntro);
    species.appendChild(speciesDescr);

    // new card
    const newCharacterCard = document.createElement('li');
    newCharacterCard.appendChild(newImg);
    newCharacterCard.appendChild(name);
    newCharacterCard.appendChild(species);
    charactersUlList.appendChild(newCharacterCard);
  });
}
function fetchAndPrint(link) {
  let characters = [];
  console.log(characters);

  fetch(link)
    .then((response) => response.json())
    .then((data) => {
      for (const result of data.results) {
        let newCharacter = {};
        newCharacter.name = result.name;
        newCharacter.species = result.species;
        newCharacter.image = result.image;
        characters.push(newCharacter);
      }
      printCharacters(characters);
    })
    .catch((error) => {
      console.error('Error en la solicitud:', error);
    });
}

function prevPage() {
  if (pageNumber > 1) {
    pageNumber--;
    fetchAndPrint(getApiLink(pageNumber));
  }
}
function nextPage() {
  if (pageNumber < 42) {
    pageNumber++;
    fetchAndPrint(getApiLink(pageNumber));
  }
}

const prevPgBtn = document.getElementById('prev-page');
const nextPgBtn = document.getElementById('next-page');
prevPgBtn.addEventListener('click', prevPage);
nextPgBtn.addEventListener('click', nextPage);

fetchAndPrint(getApiLink(pageNumber));