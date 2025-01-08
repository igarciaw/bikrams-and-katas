let btn = document.getElementById('obtenerChiste');
let paragraph = document.getElementById('chiste');

function getJoke() {
  fetch('https://v2.jokeapi.dev/joke/Programming?lang=es')
    .then((response) => response.json())
    .then((data) => {
      if (data.type === 'single') {
        console.log(data.joke);

        paragraph.textContent = data.joke;
      }
      if (data.type === 'twopart') {
        console.log(data.setup + ' ' + data.delivery);

        paragraph.textContent = data.setup + ' ' + data.delivery;
      }
    })
    .catch((error) => {
      console.error('Error en la solicitud:', error);
    });
}

btn.addEventListener('click', getJoke);
