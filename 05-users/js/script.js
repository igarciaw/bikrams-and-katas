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
        <li class="user-container">
            <div class="user-info-container">
                <ul class="user-data-container">
                    <li><strong>Nombre:</strong> ${name}</li>
                    <li><strong>Edad:</strong> ${randomAge()}</li>
                    <li><strong>Username:</strong> ${username}</li>
                    <li><strong>Teléfono:</strong> ${phone}</li>
                    <li><strong>Email:</strong> ${email}</li>
                </ul>
                    <img src="./assets/img/${id}.jpeg" alt="Foto de perfil ID="${id}" />
            </div>
            <ul class="company-info-container">
                <li><strong>Compañía:</strong> ${company.name}</li>
                <li><strong>Dirección:</strong> ${address.street}, ${address.suite}, ${address.city}<li>
            </ul>
      </li>
        `;
  });
}
