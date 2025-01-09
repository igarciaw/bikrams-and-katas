//Aquí tu código
// Crea unun botón y añádele un ID. => button
// Crea un DIV debajo de ese botón con otro ID => movable
// Crea un Promt para introducir tu nombre
// Cuando se haga clic en el botón, En el DIV que has creado debe aparecer un saludo "Hola (aqui el nombre que se haya introducido en el prompt), recuerda que JS mola mucho".

const div = document.getElementById('movable');
const button = document.getElementById('button');

function printMsg() {
  /* div.textContent = `Hola ${promptInput}, recuerda que JS mola mucho`; */
  div.innerText = `Hola ${promptInput}, recuerda que JS mola mucho`;
  div.style.backgroundColor = 'rgb(176, 132, 218)';
}

let promptInput = prompt('Introduce tu nombre');
button.addEventListener('click', printMsg);
