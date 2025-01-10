const principalLink = 'https://rickandmortyapi.com/api/character?page=1';
let apiInfo = { totalPages: null, prevLink: null, nextLink: null };

const logo = document.querySelector('.logoImg');
const prevPgBtn = document.getElementById('prev-page');
const nextPgBtn = document.getElementById('next-page');
const firstPgBtn = document.getElementById('first-page');
const lastPgBtn = document.getElementById('last-page');

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

      apiInfo.prevLink = data.info.prev;
      apiInfo.nextLink = data.info.next;
      apiInfo.totalPages = data.info.pages;
      const actualPage = link.split('=')[1];
      const lastPage = data.info.pages;

      printNumberButtons(actualPage, lastPage);
      activeInactiveButtons();
    })
    .catch((error) => {
      console.error('Error en la solicitud:', error);
    });
}
function printCharacters(charactersArray) {
  // reset ul
  const charactersUlList = document.getElementById('character-list');
  // charactersUlList.innerHTML = '';
  charactersUlList.replaceChildren();

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

    //print
    charactersUlList.appendChild(newCharacterCard);
  });
}
function printNumberButtons(actualPage, lastPage) {
  const parsedActPg = parseInt(actualPage);
  const parsedLastPage = parseInt(lastPage);

  let numberOfButtons = [];
  let startNumber;
  if (parsedActPg < 3) {
    startNumber = 1;
  } else if (parsedActPg + 2 >= parsedLastPage) {
    startNumber = parsedLastPage - 4;
  } else {
    startNumber = parsedActPg - 2;
  }
  for (let i = 0; i < 5; i++) {
    numberOfButtons.push(startNumber);
    startNumber++;
  }

  const buttonsDiv = document.querySelector('.buttons-page');
  buttonsDiv.replaceChildren();
  const fragment = document.createDocumentFragment();

  numberOfButtons.forEach((number) => {
    const newPgBtn = document.createElement('button');
    newPgBtn.id = `btn-pg-${number}`;
    newPgBtn.classList.add('btn-page');

    if (number === parsedActPg) {
      newPgBtn.classList.add('active');
    }
    newPgBtn.textContent = number;
    fragment.appendChild(newPgBtn);
  });
  buttonsDiv.appendChild(fragment);
}
function activeInactiveButtons() {
  if (apiInfo.prevLink === null) {
    prevPgBtn.setAttribute('disabled', '');
    firstPgBtn.setAttribute('disabled', '');
  } else {
    prevPgBtn.removeAttribute('disabled');
    firstPgBtn.removeAttribute('disabled');
  }

  if (apiInfo.nextLink === null) {
    nextPgBtn.setAttribute('disabled', '');
    lastPgBtn.setAttribute('disabled', '');
  } else {
    nextPgBtn.removeAttribute('disabled');
    lastPgBtn.removeAttribute('disabled');
  }
}

fetchAndPrint(principalLink);
logo.addEventListener('click', () => fetchAndPrint(principalLink));
prevPgBtn.addEventListener('click', () => fetchAndPrint(apiInfo.prevLink));
nextPgBtn.addEventListener('click', () => fetchAndPrint(apiInfo.nextLink));
firstPgBtn.addEventListener('click', () => fetchAndPrint(principalLink));
lastPgBtn.addEventListener('click', () =>
  fetchAndPrint(
    `https://rickandmortyapi.com/api/character?page=${apiInfo.totalPages}`
  )
);
