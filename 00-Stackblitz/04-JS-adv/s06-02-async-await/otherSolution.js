async function fetchUserData(userID) {
  const url = `https://jsonplaceholder.typicode.com/users/${userID}`;

  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Error en la solicitud: ${response.status}`);

    const user = await response.json();
    return {
      name: user.name,
      email: user.email,
      city: user.address.city,
    };
  } catch (error) {
    console.error('Error fetching: ', error);
    return null;
  }
}
async function fetchUsers(userIds) {
  const userPromises = userIds.map((id) => fetchUserData(id));
  const users = await Promise.all(userPromises);
  logUsers(users.filter((user) => user));
}

function logUsers(users) {
  users.forEach((user) => {
    console.log(
      `Nombre: ${user.name}, Email: ${user.email}, Ciudad: ${user.city}`
    );
  });
}

const users = [1, 2, 3];
fetchUsers(users);
