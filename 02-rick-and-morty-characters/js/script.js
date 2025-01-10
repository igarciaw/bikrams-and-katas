const principalLink = 'https://rickandmortyapi.com/api/character';
let apiInfo = { totalPages: 0, prevLink: null, nextLink: null };

const logo = document.querySelector('.logo');
const prevPgBtn = document.getElementById('prev-page');
const nextPgBtn = document.getElementById('next-page');

function fetchAndPrint(link) {
  let characters = [];
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
      apiInfo.totalPages = data.info.pages;
      apiInfo.prevLink = data.info.prev;
      apiInfo.nextLink = data.info.next;
      activeInactiveButtons();
    })
    .catch((error) => {
      console.error('Error en la solicitud:', error);
    });
}
function printCharacters(charactersArray) {
  // reset ul
  const charactersUlList = document.getElementById('character-list');
  charactersUlList.innerHTML = '';
  //   charactersUlList.replaceChildren();

  charactersArray.forEach((character) => {
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
function activeInactiveButtons(){
  apiInfo.prevLink === null
  ? prevPgBtn.setAttribute('disabled', '')
  : prevPgBtn.removeAttribute('disabled');

  apiInfo.nextLink === null
  ? nextPgBtn.setAttribute('disabled', '')
  : nextPgBtn.removeAttribute('disabled');
}

fetchAndPrint(principalLink);
logo.addEventListener('click', () => fetchAndPrint(principalLink));
prevPgBtn.addEventListener('click', () => fetchAndPrint(apiInfo.prevLink));
nextPgBtn.addEventListener('click', () => fetchAndPrint(apiInfo.nextLink));

