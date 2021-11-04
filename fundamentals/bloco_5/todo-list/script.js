let select;
const task = 'task';
const taskDone = 'task-done'
const taskList = 'task-list';
const taskText = 'task-text';

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": true,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

// função que recebe o input com o valor digitado, ao clicar, adiciona o item na lista!
const addTask = () => {
  const li = document.createElement('li');
  const createTask = document.getElementById(taskList);
  const getTaskText = document.getElementById(taskText);
  const text = document.createTextNode(getTaskText.value);

  if (getTaskText.value === '') {
    return toastr["error"]("Campo de texto vazio.", "Error!");
  }

  li.className = task;
  li.appendChild(text);
  createTask.appendChild(li);
  getTaskText.value = '';
}
//     << ================== - - - ================== >>

// Vai criar o botão para executar o input seja com enter ou clicando no botão.
const textFunc = (inputSub, text) => {
  const getText = document.getElementById(text);
  const main = document.querySelector('.inputButtons');

  main.appendChild(inputSub);
  inputSub.addEventListener('click', addTask);
  getText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });
}
//     << ================== - - - ================== >>

// Cria os elementos html do input e o botão dinamicamente
const inputCreator = (text) => {
  const main = document.querySelector('.inputButtons');

  // Cria o botão input Text
  const inputText = document.createElement('input');
  inputText.setAttribute('type', 'text');
  inputText.id = text;
  inputText.placeholder= "Digite aqui sua tarefa"
  main.appendChild(inputText);

  // Cria o botão Adicionar
  const inputSub = document.createElement('button');
  inputSub.setAttribute('id', 'create-task-button');
  inputSub.innerText = 'Criar tarefa';
  inputSub.title = 'Clique aqui para adicionar a tarefa na lista!';
  textFunc(inputSub, text);
}
//     << ================== - - - ================== >>

// Cria a OL onde vai receber a lista das tarefas
const listOlCreator = () => {
  const main = document.querySelector('.lists');
  const ol = document.createElement('ol');

  ol.setAttribute('id', taskList);
  main.appendChild(ol);
}
//     << ================== - - - ================== >>

// Cria uma div dinamicamente onde vai ficar os botões embaixo das tarefas listadas.
function createDivButtons() {
  const divButtons = document.querySelector('.inputs');
  const buttonsDiv = document.createElement('div');
  buttonsDiv.id = ('buttonsList');
  divButtons.appendChild(buttonsDiv);
}
//     << ================== - - - ================== >>

// Cria os botões na div com os ids e textos dentro do array usando um loop.
// Motivo de eu ter feito isso é por conta do lint mandando refatorar.
function buttonsLi() {
  const listButtons = document.getElementById('buttonsList');

  const idText = ['remove-selected', 'move-up', 'move-down', 'remove-dones',
    'remove-all', 'save'];
  const innerText = ['X', '⬆', '⬇', 'Remover tarefas concluídas', 'Limpar lista', 'Salvar'];
  const title = ['Remover tarefa selecionada', 'Mover para cima', 'Mover para baixo',
    'Remove apenas as tarefas concluídas', 'Remover todas as tarefas listadas',
    'Salva sua lista no navegador'];

  for (let index = 0; index < idText.length; index += 1) {
    const idIndex = idText[index];
    const identificador = document.createElement('button');
    identificador.id = idIndex;
    identificador.title = title[index];
    identificador.innerText = innerText[index];
    listButtons.appendChild(identificador);
  }
}
//     << ================== - - - ================== >>

// Salva a lista atual no localstorage para que o usuário não perca ao dar F5
const saveOnLocalStorage = () => {
  // source https://gomakethings.com/saving-html-to-localstorage-with-vanilla-js/
  const saveButton = document.querySelector('#save');
  const taskOnStorage = document.querySelector('#task-list');
  saveButton.addEventListener('click', () => {
    localStorage.savedList = JSON.stringify(taskOnStorage.innerHTML);
    return toastr.success('Lista Salva com Sucesso');
  });

  if (localStorage.savedList) {
    taskOnStorage.innerHTML = JSON.parse(localStorage.savedList)
  }
}
//     << ================== - - - ================== >>

// Apaga todas as tarefas de uma vez só
const eraseAll = () => {
  // source: https://www.codegrepper.com/code-examples/javascript/how+to+delete+all+elements+with+a+class+name
  document.getElementById('remove-all').addEventListener('click', () => {
    const listed = document.getElementsByClassName(task);
    while (listed.length > 0) {
      listed[0].parentNode.removeChild(listed[0]);
    }
    return toastr.success('Lista deletada com sucesso!');
  });
  document.getElementById('remove-dones').addEventListener('click', () => {
    const complete = document.getElementsByClassName(taskDone);
    if (complete.length > 0) {
      while (complete.length > 0) {
        complete[0].parentNode.removeChild(complete[0]);
      }

      return toastr["success"]("Você deletou as tarefas riscadas da lista!")
    }
  });
}
//     << ================== - - - ================== >>

// Apaga apenas a tarefa selecionada
const tasksSelected = () => {
  const deleteSelected = document.querySelector('#remove-selected');
  const selected = document.getElementsByClassName('selected');

    deleteSelected.addEventListener('click', () => {
    if (selected.length > 0) {
    selected[0].parentNode.removeChild(selected[0])
    };
  });
}
//     << ================== - - - ================== >>

// Move para cima a tarefa selecionada
// source https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript
const moveup = () => {
  const upMove = document.querySelector('#move-up');

  upMove.addEventListener('click', () => {
    const selected = document.getElementsByClassName('selected');
    if (select && selected[0]) {
      selected[0].parentNode.insertBefore(selected[0], selected[0].previousElementSibling);
    }
  });
}

// Move para baixo a tarefa selecionada
const moveDown = () => {
  const downMove = document.querySelector('#move-down');
  
  downMove.addEventListener('click', () => {
    const selected = document.getElementsByClassName('selected');
    if (select && selected[0].nextElementSibling ) {
      selected[0].parentNode.insertBefore(selected[0].nextElementSibling, selected[0]);
    }
  });
}
//     << ================== - - - ================== >>

// Apaga apenas a tarefa feita selecionada.
const concluded = ({ target }) => {
  const done = document.querySelector('.task-done');

  if (target.classList.contains(task) && target !== done) {
    target.classList.add(taskDone);
  } else if (target.classList.contains(taskDone)) {
    target.classList.remove(taskDone);
  }
}
//     << ================== - - - ================== >>

// Ao clicar na tarefa, ele verifica se é uma tarefa selecionada ou não
const clickTask = ({ target }) => {
  if (target.classList.contains(task)) {
    if (select === target) return;
    if (select)
    select.classList.remove('selected');
    target.classList.add('selected');
    select = target;
  }
}
//     << ================== - - - ================== >>

window.onload = () => {
  inputCreator(taskText);
  listOlCreator();
  createDivButtons();
  buttonsLi();
  eraseAll();
  saveOnLocalStorage();
  tasksSelected();
  moveup();
  moveDown();

  document.addEventListener('dblclick', concluded);
  document.addEventListener('click', clickTask);
};