const btn = document.querySelector('.js-btn');
const jokeListContainer = document.querySelector('.js-joke-list');
const deleteAllBtn = document.querySelector('.js-delete-all-btn');
let jokeListItems = JSON.parse(localStorage.getItem('jokeList')) || [];

function getJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((data) => {
      jokeListItems.push(data.value);
      setLSAndprint();
    })
    .catch((error) => {
      console.error('Error en la solicitud:', error);
    });
}
function setLS() {
  if (jokeListItems.length > 0) {
    localStorage.setItem('jokeList', JSON.stringify(jokeListItems));
  } else {
    localStorage.removeItem('jokeList');
  }
}
function printJokeList() {
  jokeListContainer.innerHTML = '';
  jokeListItems.forEach((joke, i) => {
    jokeListContainer.innerHTML += `
      <li>
          <p>${joke}</p>
          <div id="${i}"class="js-delete-joke">x</div>
      </li>
      `;
  });
}
function printDeleteAllBtn() {
  if (jokeListItems.length > 0) {
    deleteAllBtn.classList.remove('hidden');
  } else {
    deleteAllBtn.classList.add('hidden');
  }
}
function setLSAndprint() {
  setLS();
  printJokeList();
  printDeleteAllBtn();
}

function deleteJoke(ev) {
  console.log(ev.target.id);
  jokeListItems.forEach((joke, i) => {
    if (i == ev.target.id) {
      jokeListItems.splice(i, 1);
      setLSAndprint();
    }
  });
}
btn.addEventListener('click', getJoke);
jokeListContainer.addEventListener('click', deleteJoke);
deleteAllBtn.addEventListener('click', () => {
  jokeListItems = [];
  setLSAndprint();
});
printJokeList();
