const board = document.querySelector('#pixel-board');
const btnGenerateBoard = document.querySelector('#generate-board');
const btnClearBoard = document.querySelector('#clear-board');
const colors = document.querySelectorAll('.color');
const eraser = document.querySelector('.eraser');
const newColor = document.querySelector('#new-colors');

// Calculo para criar paleta de cores aleatórias, créditos ao pessoal que me ajudou
const generateRandomColor = () => {
  // source https://www.codegrepper.com/code-examples/javascript/generate+random+rgb+color+javascript
  const r = () => Math.random() * 256 >> 0;
  const color = `rgb(${r()}, ${r()}, ${r()})`;
  return (color);
}

// Gera as cores e chama a função para randomizar elas
const generateColors = () => {
  const colorOne = document.querySelector('#colorOne');
  const colorTwo = document.querySelector('#colorTwo');
  const colorThree = document.querySelector('#colorThree');
  const colorFour = document.querySelector('#colorFour');

  colorOne.style.backgroundColor = 'rgb(0, 0, 0)';
  colorOne.classList.add('selected');
  colorTwo.style.backgroundColor = generateRandomColor();
  colorThree.style.backgroundColor = generateRandomColor();
  colorFour.style.backgroundColor = generateRandomColor();
}

const changeColorWhenClicked = ({ target }) => {
  const findSelectedClass = document.querySelector('.selected');
  const getColorFromClass = findSelectedClass.getAttribute('style').split(':')[1];
  const color = getColorFromClass.substring(1, getColorFromClass.length - 1);
  const div = target;
  div.style.backgroundColor = color;
}

const resetStyleBoard = () => {
  board.innerHTML = '';
}

const setStyleforBoard = (input)  => {
  board.style.gridTemplateColumns = `repeat(${input}, 40px)`;
  board.style.gridTemplateRows = `repeat(${input}, 40px)`;
}

//Verifica o valor do input e retorna qual será o tamanho dele
const checkValuesFromInput = ({ value }) => {
  if (value < 5) value = 5;
  if (value > 50) value = 50;
  return value;
}

// gera o tamanho do quadro com o input recebido
const generatePixelSize = (input) => {
  for (let index = 0; index < input * input; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.addEventListener('click', changeColorWhenClicked);
    board.appendChild(pixel);
  }
}

// Verifica se é a primeira vez que a tela está sendo renderizada ou valor recebido pelo input
const generatePixels = (isFirstTime = true) => {
  if (isFirstTime !== true) {
    const number = checkValuesFromInput(document.querySelector('#board-size'));
    resetStyleBoard();
    generatePixelSize(number);
    setStyleforBoard(number);
  } else {
    resetStyleBoard();
    generatePixelSize(5);
    setStyleforBoard(5);
  }
}

const setSelectedClass = (colorSelected) => {
  const palleteColors = colors;
  eraser.classList.remove('selected');
  for (let index = 0; index < palleteColors.length; index += 1) {
    palleteColors[index].classList.remove('selected');
  }
  colorSelected.classList.add('selected');
}

const checkInputAndThenGeneratePixels = () => {
  const checkInput = document.querySelector('#board-size');

  if (checkInput.value === '') {
    alert('Board inválido!');
  } else {
    generatePixels(false);
  }
}

const clearBoardAndFillPixelsWithWhite = () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

function setSelectedColorFunctionInPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', changeColorWhenClicked);
  }
}

window.onload = () => {
  generateColors();
  generatePixels();

  btnClearBoard.addEventListener('click', () => {
    clearBoardAndFillPixelsWithWhite();
  });

  btnGenerateBoard.addEventListener('click', () => {
    checkInputAndThenGeneratePixels();
  });

  colors.forEach((color) => {
    color.addEventListener('click', ({ target }) => setSelectedClass(target));
  });

  eraser.addEventListener('click', ({ target }) => setSelectedClass(target));
  newColor.addEventListener('click', generateColors);

  setSelectedColorFunctionInPixel();
};
