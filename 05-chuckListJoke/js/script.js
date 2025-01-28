// al hacer click en el botón traer un chiste de la api
// mostrar en pantalla y guardar en LS
// al recargar mantener los chistes generados anteriormente
// bonus: eliminar chiste + eliminar todos los chistes

const btn = document.querySelector('.js-btn');
const jokeListContainer = document.querySelector('.js-joke-list');
let jokeListItems = [];

function getJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((data) => {
      jokeListItems.push(data.value);
      jokeListContainer.innerHTML = '';
      jokeListItems.forEach((joke) => {
        jokeListContainer.innerHTML += `<li>${joke}</li>`;
      });
    })
    .catch((error) => {
      console.error('Error en la solicitud:', error);
    });
}

btn.addEventListener('click', getJoke);
