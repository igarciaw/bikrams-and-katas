// bonus: eliminar chiste + eliminar todos los chistes

const btn = document.querySelector('.js-btn');
const jokeListContainer = document.querySelector('.js-joke-list');
let jokeListItems = JSON.parse(localStorage.getItem('jokeList')) || [];

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

function deleteJoke(ev) {
  console.log(ev.target.id);
  jokeListItems.forEach((joke, i) => {
    if (i == ev.target.id) {
      jokeListItems.splice(i, 1);
      localStorage.setItem('jokeList', JSON.stringify(jokeListItems));
      printJokeList();
    }
  });
}
btn.addEventListener('click', getJoke);
jokeListContainer.addEventListener('click', deleteJoke);

printJokeList();
