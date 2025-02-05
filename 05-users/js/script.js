let htmlUserList = document.querySelector('.js-user-list');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
    renderUsers(users);
  })
  .catch((error) => {
    console.error('Error en la solicitud:', error);
  });

function randomAge() {
  return Math.floor(Math.random() * 30) + 25;
}

function renderUsers(users) {
  users.forEach(({ id, name, username, email, address, phone, company }) => {
    htmlUserList.innerHTML += `
        <li>
            <img src="./assets/img/${id}.jpeg" alt="Foto de perfil ID="${id}" />
            <p>Nombre: ${name}</p>
            <p>Edad: ${randomAge()}</p>
            <p>Username: ${username}</p>
            <p>Teléfono: ${phone}</p>
            <p>Email: ${email}</p>
            <p>Compañía: ${company.name}</p>
            <p>Dirección: ${address.street}, ${address.suite}, ${
      address.city
    }</p>
      </li>
        `;
  });
}
