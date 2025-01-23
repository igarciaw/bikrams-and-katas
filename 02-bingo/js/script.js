//buttons
const drawBallBtn = document.querySelector('.draw-ball-btn');
const playBtn = document.querySelector('.play-btn');
const cardPlays = 20;

//containers
const ballsContainer = document.querySelector('.js-balls-container');
let ballsNumbers = [];
const cardContainer = document.querySelector('.js-card-container');
const cardNumbers = numbersGenerator(cardPlays);

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

// renders
function renderBallsNumbers() {
  ballsContainer.innerHTML = '';
  ballsNumbers.forEach((number) => {
    ballsContainer.innerHTML += `<li class="number">${number}</li>`;
  });
}
function renderCardNumbers() {
  cardContainer.innerHTML = '';
  let count = 0;
  cardNumbers.forEach((number) => {
    if(ballsNumbers.includes(number)){
       (cardContainer.innerHTML += `<li class="number number-match">${number}</li>`);
       count++;
       } else {
       (cardContainer.innerHTML += `<li class="number">${number}</li>`);
    }      
  });
  if (count === cardPlays){
    bingo();
  }
}

function drawBall() {
  numbersGenerator(1, ballsNumbers);
  renderBallsNumbers();
  renderCardNumbers();
}

let myInterval;
function autoDrawBall() {
  if (playBtn.textContent === 'Autoplay') {
    myInterval = setInterval(drawBall, 500);
    playBtn.textContent = 'Pause';
  } else {
    clearInterval(myInterval);
    playBtn.textContent = 'Autoplay';
  }
}

function bingo() {
  clearInterval(myInterval);
  drawBallBtn.disabled = true;
  playBtn.disabled = true;
  const msg = document.querySelector('.msg');
  msg.style.display = 'block';
}

//listeners
drawBallBtn.addEventListener('click', drawBall);
playBtn.addEventListener('click', autoDrawBall);

//init
renderCardNumbers();