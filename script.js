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
//                               << ============---============ >>

// Define a cor preta como selecionada ao iniciar o site
function blackSelected() {
  const black = document.querySelector('.color');
  black.classList.add('selected');
}
//                               << ============---============ >>

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
//                               << ============---============ >>

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

//            AQUI FICA O TUDO REFERENTE AO BOARD, CRIAÇÃO DE PIXELS E INPUT

// Função que irá colocar atributos no input criado dinamicamente
function intputAttrCreate(input) {
  const inputAttr = input;
  inputAttr.id = 'board-size';
  inputAttr.type = 'number';
  inputAttr.min = 1;
  return inputAttr;
}
//                               << ============---============ >>

// Função que irá fazer os cálculos para criar píxels com o tamanho da largura e altura certa
function createPixels(number, board) {
  const quadro = board;
  const newValue = number * number;
  const width = (number * 40) + (number * 2); // cálculo para o tamanho do board ficar perfeito 
  quadro.style.width = width;

  for (let index = 0; index < newValue; index += 1) {
    const divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    quadro.appendChild(divPixel);
  }
}
//                               << ============---============ >>

// Função que irá criar o quadro
function criadordeQuadro(number = 5) {
  const board = document.createElement('div');
  board.id = 'pixel-board';
  document.body.appendChild(board);

  createPixels(number, board);
}
//                               << ============---============ >>

// Função para verificar as condições númeras que o usuário colocou no input
function verifyNumber(inputButton) {
  const pixels = 'pixel-board';
  inputButton.addEventListener('click', () => {
    let number = parseInt(document.getElementById('board-size').value, 10);
    if (!number) {
      alert('Board inválido!');
    } else if (number < 5) {
      number = 5;
      document.getElementById(pixels).remove();
      criadordeQuadro(number);
    } else if (number > 50) {
      number = 50;
      document.getElementById(pixels).remove();
      criadordeQuadro(number);
    } else {
      document.getElementById(pixels).remove();
      criadordeQuadro(number);
    }
  });
}
//                               << ============---============ >>

// Função para criar o input e o botão, após criado irá para a função de verificação
function boardSizeCreate(balde) {
  const divInputButtons = document.createElement('div');
  balde.appendChild(divInputButtons);

  const h3 = document.createElement('h3');
  h3.innerText = 'Insira um valor para ajustar o tamanho do quadro!';
  divInputButtons.appendChild(h3);

  // Cria o Input para escrever os números
  const input = document.createElement('input');
  intputAttrCreate(input);
  divInputButtons.appendChild(input);

  // Cria o botão para o Input
  const inputButton = document.createElement('button');
  inputButton.setAttribute('id', 'generate-board');
  inputButton.innerText = '#VQV';
  divInputButtons.appendChild(inputButton);
  verifyNumber(inputButton);
}
//                               << ============---============ >>

window.onload = () => {
  const cores = ['black', 'pink', 'red', 'olive'];
  const cPaleta = document.querySelector('#color-palette');
  const balde = document.querySelector('.balde');

  criadorDePaletas(cPaleta, cores);
  blackSelected();
  eraseAllButton(balde);

  boardSizeCreate(balde);
  criadordeQuadro();

  document.addEventListener('click', pincel);
};
