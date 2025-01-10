const principalLink = 'https://rickandmortyapi.com/api/character?page=1';
let apiInfo = { totalPages: null, prevLink: null, nextLink: null };

const logo = document.querySelector('.logoImg');
const prevPgBtn = document.getElementById('prev-page');
const nextPgBtn = document.getElementById('next-page');
const firstPgBtn = document.getElementById('first-page');
const lastPgBtn = document.getElementById('last-page');
const pageInput = document.getElementById('pageInput');
const goToPageBtn = document.getElementById('goToPageBtn');
const goToPageMsgError = document.querySelector('.goToPageMsgError');

function fetchAndPrint(link) {
  goToPageMsgError.textContent = '';

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
      const currentPage = link.split('=')[1];
      const lastPage = data.info.pages;

      printNumberButtons(currentPage, lastPage);
      activeInactiveButtons();
    })
    .catch((error) => {
      console.error('Error en la solicitud:', error);
    });
}
function printCharacters(charactersArray) {
  // reset current print
  const charactersUlList = document.getElementById('character-list');
  // charactersUlList.innerHTML = '';
  charactersUlList.replaceChildren();

  charactersArray.forEach((character) => {
    // img
    const newImg = document.createElement('img');
    newImg.src = character.image;
    newImg.alt = `Image of ${character.name}`;

    // name
    //// intro
    const nameIntro = document.createElement('strong');
    nameIntro.classList.add('strong');
    nameIntro.textContent = 'Name: ';
    //// descr
    const nameDescr = document.createTextNode(character.name);
    //// join
    const name = document.createElement('p');
    name.appendChild(nameIntro);
    name.appendChild(nameDescr);

    // species
    //// intro
    const speciesIntro = document.createElement('strong');
    speciesIntro.classList.add('strong');
    speciesIntro.textContent = 'Species: ';

    //// descr
    const speciesDescr = document.createTextNode(character.species);
    //// join
    const species = document.createElement('p');
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
function printNumberButtons(currentPage, lastPage) {
  const parsedActPg = parseInt(currentPage);
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

  function handleButtonClick(event) {
    const buttonNumber = event.target.textContent;
    fetchAndPrint(
      `https://rickandmortyapi.com/api/character?page=${buttonNumber}`
    );
  }

  numberOfButtons.forEach((number) => {
    const newPgBtn = document.createElement('button');
    newPgBtn.id = `btn-pg-${number}`;
    newPgBtn.classList.add('btn-page');

    if (number === parsedActPg) {
      newPgBtn.classList.add('active');
    }
    newPgBtn.textContent = number;
    newPgBtn.addEventListener('click', handleButtonClick);
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

function handleGoToPageClick() {
  const pageNumber = parseInt(pageInput.value);

  if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > apiInfo.totalPages) {
    goToPageMsgError.textContent = `Error: introduce un número entre 1 y ${apiInfo.totalPages}`;
    return;
  }
  fetchAndPrint(`https://rickandmortyapi.com/api/character?page=${pageNumber}`);
}

pageInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    handleGoToPageClick();
  }
});

logo.addEventListener('click', () => fetchAndPrint(principalLink));
firstPgBtn.addEventListener('click', () => fetchAndPrint(principalLink));
prevPgBtn.addEventListener('click', () => fetchAndPrint(apiInfo.prevLink));
nextPgBtn.addEventListener('click', () => fetchAndPrint(apiInfo.nextLink));
lastPgBtn.addEventListener('click', () =>
  fetchAndPrint(
    `https://rickandmortyapi.com/api/character?page=${apiInfo.totalPages}`
  )
);
goToPageBtn.addEventListener('click', handleGoToPageClick);

fetchAndPrint(principalLink);
