//buttons
const drawBallBtn = document.querySelector('.draw-ball-btn');
const playBtn = document.querySelector('.play-btn');

//containers
const ballsContainer = document.querySelector('.js-balls-container');
let ballsNumbers = [];
const cardContainer = document.querySelector('.js-card-container');
const cardNumbers = numbersGenerator(20);

//functions
function getRandomInt() {
  return Math.floor(Math.random() * 100 + 1);
}
function numbersGenerator(quantity, numbers = []) {
  const newLength = numbers.length + quantity;

  for (let i = 0; numbers.length < newLength; i++) {
    let number = getRandomInt();
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers;
}
function renderBallsNumbers() {
  ballsContainer.innerHTML = '';
  ballsNumbers.forEach((number) => {
    ballsContainer.innerHTML += `<li class="number">${number}</li>`;
  });
}
function renderCardNumbers() {
  cardContainer.innerHTML = '';
  cardNumbers.forEach((number) => {
    ballsNumbers.includes(number)
      ? (cardContainer.innerHTML += `<li class="number match-match">${number}</li>`)
      : (cardContainer.innerHTML += `<li class="number">${number}</li>`);
  });
}

function drawBall() {
  numbersGenerator(1, ballsNumbers);
  renderBallsNumbers(ballsContainer, ballsNumbers);
  renderCardNumbers();
}

//listeners
drawBallBtn.addEventListener('click', drawBall);

//init
renderCardNumbers();
