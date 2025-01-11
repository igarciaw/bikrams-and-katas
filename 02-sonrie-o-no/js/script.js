const body = document.querySelector('.body');
const container = document.querySelector('.big-face');
const updateBtn = document.querySelector('.get-face');
const faceSelect = document.querySelector('.face-select');

function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

function update() {
  const faceValue = faceSelect.value;
  const randomColor = getRandomInt() % 2 === 0 ? '#ffcc00' : '#ff9900';

  container.textContent = faceValue;
  body.style.backgroundColor = randomColor;
}

updateBtn.addEventListener('click', getFaceValue);