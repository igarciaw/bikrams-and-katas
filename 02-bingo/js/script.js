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
function rendernumbers(container, array) {
  container.innerHTML = '';
  array.forEach((element) => {
    container.innerHTML += `<li class="number id="${element}">${element}</li>`;
  });
}
function drawBall() {
  numbersGenerator(1, ballsNumbers);
  rendernumbers(ballsContainer, ballsNumbers);
}

//listeners
drawBallBtn.addEventListener('click', drawBall);

//init
rendernumbers(cardContainer, cardNumbers);
