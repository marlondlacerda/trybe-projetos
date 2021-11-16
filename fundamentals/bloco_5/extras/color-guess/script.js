const ball = '.ball';

const answer = document.querySelector('#answer');
const ballsContainer = document.querySelector('#balls-container');
const colorSelected = document.querySelector('#rgb-color');
const sumPoints = document.querySelector('#score');
const resetGame = document.querySelector('#reset-game');
const hardMode = document.querySelector('#hard-mode');
const hardModeStatus = document.querySelector('#hard-status');

const removeRgbText = (text) => text.replace('rgb', '');

const randomColorGenerator = () => {
  // source https://www.codegrepper.com/code-examples/javascript/generate+random+rgb+color+javascript
  const r = () => Math.random() * 256 || 0;
  return `rgb(${r()}, ${r()}, ${r()})`;
};

const selectAColor = () => {
  const balls = document.querySelectorAll(ball);
  // source https://stackoverflow.com/questions/7595557/selecting-a-random-html-element-using-javascript-only
  const ballIndex = Math.floor(Math.random() * balls.length);
  return removeRgbText(balls[ballIndex].style.backgroundColor);
};

const ballMaker = () => {
  const numberOffBalls = hardModeStatus.innerText === 'ON' ? 12 : 6;

  const balls = document.querySelectorAll(ball);
  balls.forEach((element) => {
    element.remove();
  });

  for (let index = 0; index < numberOffBalls; index += 1) {
    const buttonBall = document.createElement('button');
    buttonBall.style.backgroundColor = randomColorGenerator();
    buttonBall.className = 'ball';
    ballsContainer.appendChild(buttonBall);

    const x = buttonBall.clientHeight;
    buttonBall.className = 'ball fadeIn'
  }
};

const changePointsColor = () => {
  sumPoints.innerText < 0 ? sumPoints.className = 'red-shadow' :
  sumPoints.innerText > 0 ? sumPoints.className = 'green-shadow' : 
  sumPoints.className = '';

}
const inpector = (selected) => {
  const balls = document.querySelectorAll(ball);
  const answerSelected = document.querySelector('#rgb-color').innerText;

  balls.forEach((element) => {
    const button = element;
    button.disabled = true;
  });

  if (selected === answerSelected) {
    answer.innerText = 'Acertou!';
    const points = hardModeStatus.innerText === 'ON' ? 6 : 3;
    sumPoints.innerText = parseInt(sumPoints.innerText, 10) + points;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    sumPoints.innerText = parseInt(sumPoints.innerText, 10) - 1;
  }

  changePointsColor()
};

const newGame = () => {
  const balls = document.querySelectorAll(ball);
  answer.innerText = 'Escolha uma cor';
  ballMaker();
  colorSelected.innerText = selectAColor();
  balls.forEach((element) => {
    const button = element;
    button.disabled = false;
  });
};

const changeMode = () => {
  const status = hardModeStatus.innerText;
  if (status === 'ON') {
    hardModeStatus.innerText = 'OFF';
    hardModeStatus.className = 'red-shadow';
  } else {
    hardModeStatus.className = 'ON';
    hardModeStatus.className = 'green-shadow';
  }

  hardModeStatus.innerText = status === 'ON' ? 'OFF' : 'ON';
  ballMaker();
  colorSelected.innerText = selectAColor();
  answer.innerText = 'Escolha uma cor';
};

window.onload = () => {
  ballMaker();
  colorSelected.innerText = selectAColor();

  ballsContainer.addEventListener('click', ({ target }) => {
    if (target.tagName === 'BUTTON') {
      target.className = 'ball selected';
      const selected = removeRgbText(target.style.backgroundColor);
      inpector(selected);
    }
  });

  resetGame.addEventListener('click', () => newGame());

  hardMode.addEventListener('click', () => changeMode());
};
