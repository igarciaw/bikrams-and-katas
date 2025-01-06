const array = [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4];
console.log('array: ', array);

// Filtrar números pares con el método filter
const even = array.filter((num) => num % 2 === 0);
console.log('even: ', even);

// Duplicar todos los números con el método map
const duplicate = array.map((num) => num * 2);
console.log('duplicate: ', duplicate);

//Sumar todos los números con el método reduce
const sum = array.reduce((acc, num) => acc + num);
console.log('sum: ', sum);

// Ordenar los números de menor a mayor
const arraySort = [1, 8, 90, 5, 3, 10, 2, 9, 100];
arraySort.sort(); // ordena por el primer caracter que encuentra
console.log('arraySort: ', arraySort);
arraySort.sort((a, b) => a - b); //ordena calculando
console.log('arraySort: ', arraySort);

console.log('array: ', array);
// Comprobar si todos los números son mayores que 0 con el método every
console.log(
  'every > 0: ',
  array.every((value) => value > 0)
);
console.log(
  'every > -2: ',
  array.every((value) => value > -2)
);

// Comprueba si al menos un elemento del array es mayor de 100 con el método some.
console.log(
  'some > 100: ',
  array.some((value) => value > 100)
);

// Comprueba si todos los elementos del array cumplen con la condición de ser menores de 50 con every.
console.log(
  'every < 50: ',
  array.some((value) => value < 50)
);

// Encontrar el primer número mayor o igual a 5 con el método find
const findHigherEqualFive = array.find((value) => value >= 5);
console.log('findHigherEqualFive: ', findHigherEqualFive);

// Encuentra el índice de un elemento en el array o el último índice si hay duplicados con indexOf y lastIndexOf
const findIndex = array.findIndex((value) => value === 4);
console.log('findIndex: ', findIndex);
const findLastIndex = array.lastIndexOf(4);
console.log('findLastIndex: ', findLastIndex);

// Crear un nuevo array con los números impares con filter
const odd = array.filter((value) => value % 2 !== 0);
console.log('odd: ', odd);

// Crea otro array de números y concatenalo con el primer array
const otroArray = [1, 3, 5, 8, 52, 84, 8];
const concat = array.concat(otroArray);
console.log("concat: ", concat);

