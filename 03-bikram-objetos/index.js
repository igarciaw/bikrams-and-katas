const Coche = {
  marca: 'Toyota',
  modelo: 'Yaris',
  matricula: '1234DYJ',
};

const Casa = {
  codPostal: '12006',
  calle: 'Pintor Oliet',
  portal: '1',
  piso: '2',
};

const FullStackDeveloper = {
  lenguajes: ['JSON', 'python', 'php'],
  proyectos: ['rick y morty', 'pokemon', 'developflix'],
};

const Perro = {
  nombre: 'Marte',
  raza: 'Pastor alemán',
  color: 'marrón',
  edad: '15',
  ladrar: () => console.log('ladrar'),
  popo: () => Math.random() * 3,
};

let marcaPortatil = Portatil.marca;
let marcaPortatil2 = Portatil['marca'];
let grupos = Concierto.grupos;
let RGB = [Led.rojo, Led.verde, Led.azul];

Portatil.modelo = 'P345';
console.log(Concierto);

Concierto.cartelera.push("Guns N' Roses");
Concierto.fecha = new Date();
Impresora.imprimiendo = {
  nombreArchivo: undefined,
  copias: undefined,
  numPaginas: undefined,
};

const Noticia = { titular: undefined, cuerpo: undefined };
const Persona = { nombre: undefined, apellidos: undefined, edad: undefined };
const Avion = {
  numPasajeros: undefined,
  despegar: () => console.log('despegando'),
  volar: function () {
    console.log('llegando al destino');
  },
  aterrizar: () => console.log('aterrizando'),
};
const Paquete = { contenido: [] };
const Pais = {
  numHabitantes: undefined,
  continente: undefined,
  gentilicio: undefined,
};
const codError = O_Error.codigo;
const integrantes = Grupo.integrantes;
const nivelesTinta = Impresora.tinta;
const pixeles = Pantalla.pixeles;
const especificaciones = Movil['especificaciones'];

Grupo.numIntegrantes = 5;
Pantalla.dimensiones = '1920x1080';
Led.encendido = true ? false : true;
Movil.temperatura = '20º';
