


// Função com objetivo de criar Listas ordenadas com os Baldes de Tintas para o usuário Selecionar.
function criadorDePaletas(){
  let cPaleta = document.querySelector('#color-palette');
  let cores = ["black", "pink", "red", "olive"]

  for (index = 0; index <= 3; index += 1) {
    let li = document.createElement('li');
    let cor = index;

    for (let j = 0; j < cores.length; j++) {
      li.className = "color";
      li.style.backgroundColor = cores[index];
      cPaleta.appendChild(li);
    }
  }
}
// ============================ // ================================================= //

function criadordeQuadro(){
  let board = document.querySelector('#pixel-board');
  let quadro = 25;

  for (let index = 0; index < 25; index +=1) {
    let divPixel = document.createElement('div');
    divPixel.className = "pixel";
    board.appendChild(divPixel);
  }

}


criadordeQuadro();
criadorDePaletas();