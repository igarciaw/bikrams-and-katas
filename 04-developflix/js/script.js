import peliculas from './peliculas.js';

const divAction = document.getElementById('genero-28');
const divThriller = document.getElementById('genero-53');
const divAdventure = document.getElementById('genero-12');

function printFilms(genero, div) {
  const getFilms = peliculas.filter((film) =>
    film.genre_ids.find((genre) => genre === genero)
  );
  getFilms.forEach((film) => {
    div.innerHTML += `<div class="film-container"><h3>${film.title}</h3><img src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="Poster of ${film.title}" /></div>`;
  });
}
printFilms(28, divAction);
printFilms(53, divThriller);
printFilms(12, divAdventure);
