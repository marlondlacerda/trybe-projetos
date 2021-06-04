// Define a cor preta como selecionada ao iniciar o site
function blackSelected() {
  const black = document.querySelector('.color');
  black.classList.add('selected');
}
// ============================ // ================================================= //

// Função para escolher a cor do balde e pintar os pixels
function pincel(click) {
  const colorSelected = document.querySelector('.selected');
  const clack = click;
  if (clack.target.classList.contains('color') && clack.target !== colorSelected) {
    colorSelected.classList.remove('selected');
    clack.target.classList.add('selected');
  } else if (clack.target.classList.contains('pixel')) {
    const corAtual = colorSelected.style.backgroundColor;
    clack.target.style.backgroundColor = corAtual;
  }
}
// ============================ // ================================================= //

// Função com objetivo de criar Listas ordenadas com os Baldes de Tintas para o usuário Selecionar.
function criadorDePaletas(cPaleta, cores) {
  for (let index = 0; index <= 3; index += 1) {
    const li = document.createElement('li');

    for (let j = 0; j < cores.length; j += 1) {
      li.className = 'color';
      li.style.backgroundColor = cores[index];
      cPaleta.appendChild(li);
    }
  }
}
// ============================ // ================================================= //

// CRIA O QUADRO E OS DIVS QUE REPRESENTARÁ OS PIXELS
function criadordeQuadro() {
  const board = document.querySelector('#pixel-board');

  for (let index = 0; index < 25; index += 1) {
    const divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    board.appendChild(divPixel);
  }
}
// ============================ // ================================================= //

function eraseAllButton() {
  const balde = document.querySelector('.balde');
  const eraseAll = document.createElement('button');
  eraseAll.setAttribute('id', 'clear-board');
  eraseAll.innerHTML = 'Limpar';
  balde.appendChild(eraseAll);

  eraseAll.addEventListener('click', () => {
    const quadroBranco = document.querySelectorAll('.pixel');

    for (let index = 0; index < quadroBranco.length; index += 1) {
      quadroBranco[index].style.backgroundColor = 'white';
    }
  });
}

window.onload = () => {
  const cores = ['black', 'pink', 'red', 'olive'];
  const cPaleta = document.querySelector('#color-palette');

  criadorDePaletas(cPaleta, cores);
  criadordeQuadro();
  blackSelected();
  document.addEventListener('click', pincel);

  eraseAllButton();
};
