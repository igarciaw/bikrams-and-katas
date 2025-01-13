const estudiante = {
  nombre: 'Ana',
  edad: 20,
  ciudad: 'Madrid',
  calificaciones: {
    matematicas: 85,
    historia: 90,
    ingles: 75,
  },
};

const copyOfStudent = { ...estudiante };
console.log(copyOfStudent);

const { nombre, edad } = estudiante;
console.log(nombre, edad);

copyOfStudent.ciudad = 'Barcelona';
console.log(copyOfStudent);

// const nuevasCalificaciones = { valenciano: 50 };
// copyOfStudent.calificaciones = { ...copyOfStudent.calificaciones , ...nuevasCalificaciones };
// console.log(copyOfStudent);

const nuevasCalificaciones = {
  ...copyOfStudent.calificaciones,
  valenciano: 50,
};
copyOfStudent.calificaciones = nuevasCalificaciones ;
console.log(copyOfStudent);
