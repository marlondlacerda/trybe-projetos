
const buttonsList = document.querySelector('#buttonsList')
const deleteDonesButton = document.querySelector('#remove-dones');
const deleteSelected = document.querySelector('#remove-selected');
const eraseAll = document.querySelector('#remove-all')
const getText = document.querySelector('#task-text')
const inputButton = document.querySelector('#create-task-button');
const moveDownButton = document.querySelector('#move-down')
const moveUpButton = document.querySelector('#move-up');
const olList = document.querySelector('#task-list')
const saveButton = document.querySelector('#save');

const selected = 'selected';
const task = 'task';
const taskDone = 'task-done';

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
  const text = document.createTextNode(getText.value);

  if (getText.value === '') {
    return toastr["error"]("Campo de texto vazio.", "Error!");
  }

  li.className = task;
  li.appendChild(text);
  olList.appendChild(li);
  getText.value = '';
}

// Salva a lista atual no localstorage para que o usuário não perca ao dar F5
const saveOnLocalStorage = () => {
  // source https://gomakethings.com/saving-html-to-localstorage-with-vanilla-js/
  const taskOnStorage = document.querySelector('#task-list');

    localStorage.savedList = JSON.stringify(taskOnStorage.innerHTML);
    return toastr["success"]("Lista Salva com Sucesso");
}

const deleteDones = () => {
  const complete = document.getElementsByClassName('task-done');
  if (complete.length > 0) {
    while (complete.length > 0) {
      complete[0].parentNode.removeChild(complete[0]);
    }
    return toastr["success"]("Você deletou as tarefas riscadas da lista!")
  }
};

const eraseList = () => {
  // source: https://www.codegrepper.com/code-examples/javascript/how+to+delete+all+elements+with+a+class+name
  const listed = document.getElementsByClassName(task);

  while (listed.length > 0) {
  listed[0].parentNode.removeChild(listed[0]);
  }
  return toastr["success"]("Lista deletada com sucesso!");
}

const tasksSelected = () => {
  const selectedTask = document.getElementsByClassName(selected);

  if (selectedTask.length > 0) {
  selectedTask[0].parentNode.removeChild(selectedTask[0])
  };
}

// Move para cima a tarefa selecionada
// source https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript
const moveUp = () => {
  const taskSelected = document.getElementsByClassName(selected);
  taskSelected[0].parentNode.insertBefore(taskSelected[0], taskSelected[0].previousElementSibling);
}
// Move para baixo a tarefa selecionada
const moveDown = () => {
  const taskSelected = document.getElementsByClassName(selected);

  if (taskSelected[0].nextElementSibling) {
    taskSelected[0].parentNode.insertBefore(taskSelected[0].nextElementSibling, taskSelected[0]);
  } else {
    taskSelected[0].parentNode.insertBefore(taskSelected[0], olList.childNodes[0]);
  }
}

// Apaga apenas a tarefa feita selecionada.
const concluded = ({ target }) => {
  const done = document.querySelector('.task-done');

  if (target.classList.contains(task) && target !== done) {
    target.classList.add(taskDone);
  } else if (target.classList.contains(taskDone)) {
    target.classList.remove(taskDone);
  }
}

// Ao clicar na tarefa, ele verifica se é uma tarefa selecionada ou não
const clickTask = ({ target }) => {
  if (target.classList.contains(task)) {

    if (target.classList.contains(selected)) return;
    const liArray = olList.childNodes;

    liArray.forEach((el) => {
      el.classList.remove(selected);
    })

    target.classList.add(selected);
  }
}

window.onload = () => {
  if (localStorage.savedList) {
    olList.innerHTML = JSON.parse(localStorage.savedList)
  }

  document.addEventListener('dblclick', (e) => concluded(e));
  document.addEventListener('click', clickTask);

  inputButton.addEventListener('click', addTask);
  getText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });

  deleteDonesButton.addEventListener('click', deleteDones);
  deleteSelected.addEventListener('click', tasksSelected);
  eraseAll.addEventListener('click', eraseList);
  moveDownButton.addEventListener('click', moveDown);
  moveUpButton.addEventListener('click', moveUp);
  saveButton.addEventListener('click', saveOnLocalStorage);
};
