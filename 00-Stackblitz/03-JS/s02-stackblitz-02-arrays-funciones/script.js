//ARRRAYS
//--> DESPUÉS DE ESTA LÍNEA TU CÖDIGO
const numeros = [1, 2, 3, 4, 5];
const texto = [
  'hola',
  'esto',
  'es',
  'un',
  'texto',
  'de',
  'un',
  'código',
  'de',
  'una',
  'chorrada',
  'hola',
  'de',
  'nuevo',
  'ya',
  'no',
  'sé',
  'qué',
  'escribir',
  'jaja',
];
const mixto = [1, 'esto', true, [3, 'a'], { clave: 'valor' }];

//CONDICIONALES
//--> DESPUÉS DE ESTA LÍNEA TU CÖDIGO
function checkIfisANumber(num) {
  let boolean = typeof num === 'number';
  return boolean;
}

function wordOnArray(word, array) {
  for (const element of array) {
    if (element === word) {
      return true;
    }
  }
  return false;
}

//FUNCIONES
//--> DESPUÉS DE ESTA LÍNEA TU CÖDIGO

// Crea una función que sume dos argumentos si son números

function sumaSiNumeros(a, b) {
  checkIfisANumber(a) && checkIfisANumber(b)
    ? console.log(a + b)
    : console.log('Error: comprueba que sean números');
}

sumaSiNumeros(1, 2);
sumaSiNumeros(1, mixto[1]);

// Crea una función que al pasarle una palabra valide si existe dentro del array "texto"

function wordOnTexto(word) {
  let isInTexto = wordOnArray(word, texto) ? 'SÍ' : 'NO';

  console.log(
    `La palabra "${word}" ${isInTexto} se encuentra en el array "texto"`
  );
}

wordOnTexto('texto');
wordOnTexto('hol');

// Crea una función que valide si el resultado de la suma de todos los números del array "numeros" es igual al número que se pasa como argumento a la función

function totalSum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
function guessTheNumber(number, array) {
  number === totalSum(array)
    ? console.log('HAS ACERTADO')
    : console.log('HAS FALLADO');
}
guessTheNumber(1, numeros);
guessTheNumber(15, numeros);
