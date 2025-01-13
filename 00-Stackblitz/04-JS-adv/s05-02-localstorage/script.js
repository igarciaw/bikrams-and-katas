localStorage.setItem('nombre', 'Pepito');
localStorage.setItem('edad', '20');
localStorage.setItem('profesion', 'soldador');
localStorage.setItem('CP', '50897');
localStorage.setItem('ciudad', 'Acapulco');
localStorage.setItem('telefono', '158458');

function getData() {
  const nombre = localStorage.getItem('nombre');
  const edad = localStorage.getItem('edad');
  const profesion = localStorage.getItem('profesion');
  const CP = localStorage.getItem('CP');
  const ciudad = localStorage.getItem('ciudad');
  const telefono = localStorage.getItem('telefono');
  const mensaje = `Hola, me llamo ${nombre}, tengo ${edad} años, trabajo como ${profesion}. Vivo en ${ciudad} con CP ${CP} y mi número es ${telefono}`;
  console.log(mensaje);
}
getData();
localStorage.setItem('ciudad', 'Akasaka');
getData();

localStorage.removeItem('CP');
localStorage.removeItem('telefono');
getData();

localStorage.clear();
getData();
