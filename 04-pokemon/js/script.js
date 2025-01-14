const btn = document.getElementById('get-pokemon');
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

function getPokemon() {
  let pokemonSelected = document.getElementById('pokemon-select').value;

  fetch(`${baseUrl}${pokemonSelected}`)
    .then((response) => response.json())
    .then((data) => {
      let pokemonData = {};
      pokemonData.name = data.name;
      pokemonData.imageUrl = data.sprites.front_default;
      pokemonData.height = data.height;
      pokemonData.weight = data.weight;
      pokemonData.types = [];
      data.types.forEach((element) => {
        pokemonData.types.push(element.type.name);
      });
      printPokemon(pokemonData);
    })
    .catch((error) => {
      console.log(error);
    });
}

function printPokemon(pokemonData) {
  const dataDiv = document.querySelector('.data');
  dataDiv.innerHTML = `
    <img src="${pokemonData.imageUrl}" alt="Image of ${pokemonData.name}">
    <p>Nombre: ${pokemonData.name}</p>
    <p>Altura: ${pokemonData.height}</p>
    <p>Peso: ${pokemonData.weight}</p>
    <p>Tipo: ${pokemonData.types.join(', ')}</p>
  `;
}
btn.addEventListener('click', getPokemon);
