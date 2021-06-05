//            AQUI FICA O HEAD DO MAIN TUDO SOBRE A SESSÃO BALDE E AFINS

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
// << ============---============ >> //

// Define a cor preta como selecionada ao iniciar o site
function blackSelected() {
  const black = document.querySelector('.color');
  black.classList.add('selected');
}
// << ============---============ >> //

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
// << ============---============ >> //

// Cria o botão de Apagar tudo
function eraseAllButton(balde) {
  const divEraseButton = document.createElement('div');
  balde.appendChild(divEraseButton);

  const eraseAll = document.createElement('button');
  eraseAll.setAttribute('id', 'clear-board');
  eraseAll.innerHTML = 'Limpar';
  divEraseButton.appendChild(eraseAll);
  eraseAll.addEventListener('click', () => {
    const quadroBranco = document.querySelectorAll('.pixel');

    for (let index = 0; index < quadroBranco.length; index += 1) {
      quadroBranco[index].style.backgroundColor = 'white';
    }
  });
}

// ============================ // ================================================= //

function verifyNumber(inputButton) {
  inputButton.addEventListener('click', () => {
    const number = parseInt(document.getElementById('board-size').value, 10);
    if (!number) {
      alert('Board inválido!');
    } else {
      console.log(number);
    }
  });
}

function boardSizeCreate(balde) {
  const divInputButtons = document.createElement('div');
  balde.appendChild(divInputButtons);

  const h3 = document.createElement('h3');
  h3.innerText = 'Insira um valor para ajustar o tamanho do quadro!';
  divInputButtons.appendChild(h3);

  // Cria o Input para escrever os números
  const input = document.createElement('input');
  input.setAttribute('id', 'board-size');
  input.setAttribute('type', 'number');
  input.setAttribute('min', 1);
  divInputButtons.appendChild(input);

  // Cria o botão para o Input
  const inputButton = document.createElement('button');
  inputButton.setAttribute('id', 'generate-board');
  inputButton.innerText = '#VQV';
  divInputButtons.appendChild(inputButton);
  verifyNumber(inputButton);
}

// CRIA O QUADRO E OS DIVS QUE REPRESENTARÁ OS PIXELS
function criadordeQuadro(board) {
  for (let index = 0; index < 25; index += 1) {
    const divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    board.appendChild(divPixel);
  }
}

window.onload = () => {
  const cores = ['black', 'pink', 'red', 'olive'];
  const cPaleta = document.querySelector('#color-palette');
  const board = document.querySelector('#pixel-board');
  const balde = document.querySelector('.balde');

  criadorDePaletas(cPaleta, cores);
  blackSelected();
  eraseAllButton(balde);

  boardSizeCreate(balde);
  criadordeQuadro(board);

  document.addEventListener('click', pincel);
};
