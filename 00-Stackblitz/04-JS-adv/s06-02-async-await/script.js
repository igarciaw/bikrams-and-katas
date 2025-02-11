async function getUserData(userID) {
  const url = `https://jsonplaceholder.typicode.com/users/${userID}`;

  const userData = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const user = {
        name: data.name,
        email: data.email,
        city: data.address.city,
      };
      return user;
    })
    .catch((error) => {
      console.error('Error en la solicitud:', error);
    });

  return userData;
}

// getUserData(1).then(console.log);

Promise.all([getUserData(1), getUserData(2), getUserData(3)]).then((values) => {
  values.forEach((value) =>
    console.log(
      `Nombre: ${value.name}, Email: ${value.email}, Ciudad: ${value.city}`
    )
  );
});
