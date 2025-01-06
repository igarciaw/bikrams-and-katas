let variableSinValor;
let booleano1 = true;
let booleano2 = false;
const PI = 3.14;
const TAU = 2 * PI;

let booleanoAnd = booleano1 && booleano2;
let booleanoNot = !booleano1;
let booleanoMix0 =
  (booleano1 || booleano2) && (booleano1 || (booleano1 && !booleano2));

let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

// bucles
let contarHasta10_2 = 0;
for (let i = 0; i < 10; i++) {
  contarHasta10_2 += 1;
}

let postI = 0;
let postJ = 0;

let contador = 0;
while (contador < 11) {
  postI += postJ++;
  contador++;
}

let sumaPares = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    sumaPares = sumaPares + i;
  }
}

let variableValorNumerico = 7;
const MiNombre = 'Irene';
const MiNumeroFav = 8;

let booleanoOr = booleano1 || booleano2;
let booleanoMix1 =
  (booleano1 && TAU / 2 === PI) || variableValorNumerico >= MiNumeroFav;
let seisNoEsNueve = 6 !== 9;
let booleanoMix2 = -(MiNumeroFav * TAU) < variableValorNumerico > 0;
//  Operadores
let valorSuma = MiNumeroFav + variableValorNumerico;
let valorResta = MiNumeroFav - variableValorNumerico;
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;
let valorDivision = MiNumeroFav / 3;
// Bucles
let contarHasta10 = 0;
while (contarHasta10 < 100) {
  contarHasta10++;
  if (contarHasta10 === 10) {
    break;
  }
}

let preI = 0;
let preJ = 0;

for (let i = 0; i < 11; i++) {
  preI += ++preJ;
}

let sumaImpares = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    sumaImpares += i;
  }
}
