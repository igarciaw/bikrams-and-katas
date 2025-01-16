'use strict';

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20,
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21,
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22,
      },
    ],
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23,
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24,
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25,
      },
    ],
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26,
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27,
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

// TÚ CÓDIGO AQUÍ
const container = document.querySelector('.js-result');
container.innerHTML += '<ul></ul>';

//  1 Pintar en pantalla los nombres de las promos
function renderPromoNames(array) {
  for (let i = 0; i < array.length; i++) {
    container.children[0].innerHTML += `<li>${array[i].name}</li>`;
  }
}
// renderPromoNames(promos);

// 2 Pintar en pantalla las letras de las promos y los nombres de las promos
function renderPromoLettersAndNames(promos) {
  for (const promo of promos) {
    container.children[0].innerHTML += `
    <li>
      <p>Nombre: ${promo.name}</p>
      <p>Promo: ${promo.promo}</p>
    </li>
    `;
  }
}
// renderPromoLettersAndNames(promos)

// 3 Pintar en pantalla las letras de las promos, los nombres de las promos y el número de alumnas
function renderPromoLettersNamesAndNumberOfStudents(promos) {
  promos.forEach((promo) => {
    container.children[0].innerHTML += `
    <li>
      <p>Nombre: ${promo.name}</p>
      <p>Promo: ${promo.promo}</p>
      <p>Número de alumnas: ${promo.students.length}</p>
    </li>
    `;
  });
}
// renderPromoLettersNamesAndNumberOfStudents(promos);

// 4 Pintar en pantalla los nombres de las promos y los nombres y la edad de las alumnas
function renderPromoNamesAndStudentsNamesAge(promos) {
  promos.forEach((promo) => {
    let students = '';
    for (const student of promo.students) {
      students += `<li>${student.name}, ${student.age}</li>`;
    }

    container.children[0].innerHTML += `
    <li>
      <p>Nombre: ${promo.name}</p>
      <ul>
        ${students}
      </ul>
    </li>`;
  });
}
// renderPromoNamesAndStudentsNamesAge(promos);

// 5 Pintar en pantalla los nombres de las promos y los nombres, la edad y el id de las alumnas
function renderPromoNamesAndStudentsNamesAgeID(promos) {
  promos.forEach((promo) => {
    let students = '';
    for (const student of promo.students) {
      students += `<li id=${student.id}>${student.name}, ${student.age}</li>`;
    }

    container.children[0].innerHTML += `
    <li>
      <p>Nombre: ${promo.name}</p>
      <ul>
        ${students}
      </ul>
    </li>`;
  });
}

// renderPromoNamesAndStudentsNamesAgeID(promos);

// 6 Pintar en pantalla los nombres de las promos y los nombres, la edad y el id de las alumnas que tenga edad par
function renderPromoNamesAndStudentsNamesEvenAgeID(promos) {
  promos.forEach((promo) => {
    let students = '';
    for (const student of promo.students) {
      if (student.age % 2 === 0) {
        students += `<li id=${student.id}>${student.name}, ${student.age}</li>`;
      }
    }

    container.children[0].innerHTML += `
    <li>
      <p>Nombre: ${promo.name}</p>
      <ul>
        ${students}
      </ul>
    </li>`;
  });
}
// renderPromoNamesAndStudentsNamesEvenAgeID(promos);

// 7 Pintar en pantalla los nombres de las promos y los nombres la edad y el id de las alumnas que trabajan en Google
function renderPromoNamesAndStudentsOnGoogleNamesAgeID(promos) {
  promos.forEach((promo) => {
    let students = '';
    for (const student of promo.students) {
      if (studentsWorkingInGoogle.includes(student.id)) {
        students += `<li id=${student.id}>${student.name}, ${student.age}</li>`;
      }
    }

    container.children[0].innerHTML += `
    <li>
      <p>Nombre: ${promo.name}</p>
      <ul>
        ${students}
      </ul>
    </li>`;
  });
}
// renderPromoNamesAndStudentsOnGoogleNamesAgeID(promos);

// 8 Pintar en pantalla los nombres de las promos y los nombres, la edad, el id de las alumnas y pintar el id de la alumna en consola cuando se haga click en una de ellas
const resultElement = document.querySelector('.js-result');
renderPromoNamesAndStudentsNamesAgeID(promos);
resultElement.addEventListener('click', (ev) => console.log(ev.target.id));
