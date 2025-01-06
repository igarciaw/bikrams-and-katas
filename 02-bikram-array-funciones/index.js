let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [
  [0, 1, 2],
  ['a', 'b', 'c'],
];
// Funciones
function suma(a, b) {
  return a + b;
}
function potenciacion(a, b) {
  return a ** b;
}
function separarPalabras(string) {
  let array = string.split(' ');
  return array;
}

function repetirString(string, number) {
  return string.repeat(number);
}

function esPrimo(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// arrays y funciones
