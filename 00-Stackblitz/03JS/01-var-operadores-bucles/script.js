'use strict';

var numU = 1;
let texto = 'esto es una cadena de texto';
numU = 50;
const array = [1, 2, 3, 'texto'];
let numD = 2;

console.log(
  'suma: ',
  numU + numD,
  ', resta: ',
  numU - numD,
  ', multi: ',
  numU * numD,
  ', div: ',
  numU / numD,
  ', resto: ',
  numU % numD
);

/////////////////// Calcular total ///////////////////

let numeros = [7, 0, -1, 2, 5, 80, 7, 0, 2, 2];

function totalNumers(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}
function forOfTotalNumbers(numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

console.log('total del array de números: ', totalNumers(numeros));
console.log('total con bucle for of: ', forOfTotalNumbers(numeros));

/////////////////// Buscar el número maś alto ///////////////////

function higherNumberForOf(arrayOfNumbers) {
  let value = arrayOfNumbers[0];
  for (const number of arrayOfNumbers) {
    /*  if (value < number) {
      value = number;
    } */
    value = value < number ? number : value;
  }
  return value;
}
// con forEach
function higherNumberForEach(array) {
  let value = array[0];
  array.forEach((number) => {
    value = value < number ? number : value;
  });
  return value;
}
// otra opción más elegant pero no eficiente en caso de ser muy grande el array
function higherNumberMathMax(arrayOfNumbers) {
  return Math.max(...arrayOfNumbers);
}
// con reduce
function higherNumberReduce(arrayOfNumbers) {
  let higher = arrayOfNumbers.reduce((max, current) =>
    current > max ? current : max
  );
  return higher;
}

console.log('valor más alto con for of: ', higherNumberForOf(numeros));
console.log('con forEach: ', higherNumberForEach(numeros));
console.log('con math.max: ', higherNumberMathMax(numeros));
console.log('con reduce: ', higherNumberReduce(numeros));

/////////////////// Operar sobre cada elemento del array ///////////////////

function sumaOResta(array) {
  for (const number of array) {
    if (number === 5) {
      let result = number + 1;
      console.log(number, ' es igual a 5. El resultado es ', result);
    } else if (number > 5) {
      let result = number + 1;
      console.log(number, ' es mayor a 5. El resultado es ', result);
    } else {
      let result = number - 1;
      console.log(number, ' es menor a 5. El resultado es ', result);
    }
  }
}
/* sumaOResta(numeros); */

function sumaORestaForEachv1(array) {
  array.forEach((element) => {
    let compareValue = 10;
    let result = element >= compareValue ? element + 1 : element - 1;
    let operator =
      element === compareValue ? 'igual' : element > 5 ? 'mayor' : 'menor';
    console.log(
      `v1: ${element} es ${operator} a ${compareValue}. El resultado es ${result}`
    );
  });
}
// primero he comparado con un valor fijo, después he añadido el "compareValue" para hacerlo más adaptable

// la siguiente función la he creado antes de añadir el "compareValue", y la he hecho porque creo que es más fácil de leer aunque ocupa más espacio
function sumaORestaForEachv2(array) {
  array.forEach((element) => {
    let compareValue = 10;
    let result = 0;
    let operator = '';

    if (element >= compareValue) {
      result = element + 1;
      operator = element === compareValue ? 'igual' : 'mayor';
    } else {
      result = element - 1;
      operator = 'menor';
    }
    console.log(
      `v2: ${element} es ${operator} a ${compareValue}. El resultado es ${result}`
    );
  });
}

sumaORestaForEachv1(numeros);
sumaORestaForEachv2(numeros);

//////// contar elementos del array ///////////

function totalElements(array) {
  let acc = 0;
  for (let i = 0; i < array.length; i++) {
    acc += 1;
  }
  return acc;
}
console.log(numeros.length, totalElements(numeros));

/////// cuántas veces se repite un número ////////////
function cuantasVecesSeRepite(array) {
  // primero sacamos un listado de valores únicos
  let newArray = [array[0]];
  for (const element of array) {
    if (newArray.indexOf(element) === -1) {
      newArray.push(element);
    }
  }
  console.log(array);
  console.log(newArray);

  // después comprobamos cuántas veces se repite cada valor
  for (const newElement of newArray) {
    let count = 0;
    for (const element of array) {
      if (newElement === element) {
        count += 1;
      }
    }
    console.log(`El número ${newElement} sale ${count} veces`);
  }
}
cuantasVecesSeRepite(numeros);
