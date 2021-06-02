window.onload = () => {
  const cores = ['black', 'pink', 'red', 'olive'];
  const cPaleta = document.querySelector('#color-palette');

  criadorDePaletas(cPaleta, cores);
  criadordeQuadro();
  seletorDeCor();
};

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
  document.querySelector('.color').className += ' selected';
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

//   FUNÇÃO PARA SELECIONAR A COR DO BALDE
function seletorDeCor() {
  const btnColor = document.querySelectorAll('.color');
  const corSelect = 'color selected';

  for (let index = 0; index < btnColor.length; index += 1) {
    btnColor[index].addEventListener('click', () => {
      btnColor[0].className = 'color';
      btnColor[1].className = 'color';
      btnColor[2].className = 'color';
      btnColor[3].className = 'color';
      btnColor[index].className = corSelect;
    });
  }
}
// ============================ // ================================================= //
