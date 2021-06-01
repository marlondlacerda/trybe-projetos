// Função com objetivo de criar Listas ordenadas com os Baldes de Tintas para o usuário Selecionar.
function criadorDePaletas() {
  const cPaleta = document.querySelector('#color-palette');
  const cores = ['black', 'pink', 'red', 'olive'];

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

function criadordeQuadro() {
  const board = document.querySelector('#pixel-board');

  for (let index = 0; index < 25; index += 1) {
    const divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    board.appendChild(divPixel);
  }
}

criadordeQuadro();
criadorDePaletas();
