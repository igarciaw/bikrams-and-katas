// bonus: eliminar chiste + eliminar todos los chistes

const btn = document.querySelector('.js-btn');
const jokeListContainer = document.querySelector('.js-joke-list');
let jokeListItems = JSON.parse(localStorage.getItem('jokeList')) || [];

function printJokeList() {
  jokeListContainer.innerHTML = '';
  jokeListItems.forEach((joke) => {
    jokeListContainer.innerHTML += `<li>${joke}</li>`;
  });
}
function getJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((data) => {
      jokeListItems.push(data.value);
      localStorage.setItem('jokeList', JSON.stringify(jokeListItems));
      printJokeList();
    })
    .catch((error) => {
      console.error('Error en la solicitud:', error);
    });
}

btn.addEventListener('click', getJoke);
printJokeList();
