//OBJETOS
//--> DESPUÉS DE ESTA LÍNEA TU CÖDIGO
let persona1 = {
    nombre: 'Paquito',
    edad: 13,
    altura: '50',
    trabajo: 'el mundo',
    presentacion: function () {
      console.log(
        `${this.nombre} tiene ${this.edad}, mide ${this.altura} cm y trabaja en ${this.trabajo} `
      );
    },
  };
  
  let persona2 = {
    nombre: 'Marita',
    edad: 35,
    altura: '150',
    trabajo: 'su coche',
    presentacion: function () {
      console.log(
        `${this.nombre} tiene ${this.edad}, mide ${this.altura} cm y trabaja en ${this.trabajo} `
      );
    },
  };
  
  let persona3 = {
    nombre: 'Lorin',
    edad: 31,
    altura: '180',
    trabajo: 'la luna',
    presentacion: function () {
      console.log(
        `${this.nombre} tiene ${this.edad}, mide ${this.altura} cm y trabaja en ${this.trabajo} `
      );
    },
  };
  
  const personas = [persona1, persona2, persona3];
  
  function olderThan30(array) {
    for (const element of array) {
      if (element['edad'] > 30) {
        element.presentacion();
        console.log(`Esta es ${element.nombre} y tiene ${element.edad}.`);
      }
    }
  }
  
  olderThan30(personas);
  
  //CONDICIONALES
  //--> DESPUÉS DE ESTA LÍNEA TU CÖDIGO
  
  function overThan(a, b, operator, maxValue) {
    function overThanMsg(result, value) {
      if (result === value) {
        console.log(`${result} es igual que ${value}`);
      } else if (result > value) {
        console.log(`${result} es mayor que ${value}`);
      } else {
        console.log(`${result} es menor que ${value}`);
      }
    }
    result = 0;
    if (operator === 'suma') {
      result = a + b;
      overThanMsg(result, maxValue);
    } else if (operator === 'multiplicar') {
      result = a * b;
      overThanMsg(result, maxValue);
    } else if (operator === 'modulo') {
      result = a % 2;
      result === 0
        ? console.log(`${result} es par`)
        : console.log(`${result} es impar`);
    }
  }
  
  overThan(1, 9, 'suma', 30);
  overThan(1, 90, 'suma', 30);
  overThan(10, 9, 'multiplicar', 300);
  overThan(1, 9, 'modulo', 30);
  overThan(2, 9, 'modulo', 30);
  