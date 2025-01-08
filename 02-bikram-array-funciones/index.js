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
function ordenarArray(arrayDeNumeros) {
  let newSortedArray = arrayDeNumeros.sort((a, b) => a - b);
  return newSortedArray;
}

function obtenerPares(arrayDeNumeros) {
  let newEvenArray = arrayDeNumeros.filter((num) => num % 2 === 0);
  return newEvenArray;
}

function pintarArray(array) {
  let newArray = '[' + array.join(', ') + ']';
  return newArray;
}

function arrayMapi(array, func) {
  let newArray = array.map(func);
  return newArray;
}
arrayMapi([1, 2, 3], (el) => el + 1);

function eliminarDuplicados(array) {
  const data = new Set(array);
  const result = [...data];
  const result2 = Array.from(data);
  return result2;
}
console.log(eliminarDuplicados([1, 1, 2, 2, 3, 3, 4, 4]));

// Iteraciones
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
const holaMundo = ['Hola', 'Mundo'];
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
const arrayDeArrays = [
  [756, 'nombre'],
  [225, 'apellido'],
  [298, 'direccion'],
];

// Funciones

function multiplicacion(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function division(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function esPar(numero) {
  return numero % 2 === 0;
}
function resta(a, b) {
  return a - b;
}
const arrayFunciones = [suma, resta, multiplicacion];

// Mezclando arrays y funciones
function ordenarArray2(arrayDeNumeros) {
  return arrayDeNumeros.sort((a, b) => b - a);
}

function obtenerImpares(arrayDeNumeros) {
  return arrayDeNumeros.filter((num) => num % 2 !== 0);
}

function sumarArray(arrayNumerico) {
  return arrayNumerico.reduce((acc, num) => acc + num);
}

function multiplicarArray(arrayNumerico) {
  return arrayNumerico.reduce((acc, num) => acc * num);
}
