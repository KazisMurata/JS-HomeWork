"use strict";

// Делаем список todo:

// Задание должно быть выполнено в ООП стиле с использованием классов.

// Управление состоянием лучше вынести в отдельный класс, который ничего не 
// будет знать о DOM, он просто будет хранить список и методы для его изменения.

// Пример классов которые могут быть использованы Todo, TodoState, TodoItem

// у нас текстовое поле, списк и кнопка, при сохранении новой задачи она появляется в списке ниже
// рядом с каждой задачей есть чекбокс, если его нажать, то задача становится выполненной и текст должен быть зачеркнутым
// также рядом с каждой задачей есть крестик, при клике на который задача удаляется из списка

let text = document.querySelector('#text');
let form = document.querySelector('#form');
let list = document.querySelector('#list');
const ToDo = document.querySelector('#ToDo');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const label = document.createElement('label');
  const input = document.createElement('input');
  const div = document.createElement('div');
  const closeButton = document.createElement('div');
  const editButton = document.createElement('div');
  const imgCloseButton = document.createElement('img');
  const imgEditButton = document.createElement('img');
  imgCloseButton.src = "https://img.icons8.com/color/18/000000/delete-sign--v1.png";
  imgEditButton.src = "https://img.icons8.com/fluent/18/000000/edit.png";

  closeButton.append(imgCloseButton);
  editButton.append(imgEditButton);

  closeButton.classList.add('close__button');
  editButton.classList.add('edit__button');
  label.classList.add('checkbox');
  input.type = 'checkbox';
  div.classList.add('checkbox__text');

  div.textContent = text.value;

  label.append(input, div, editButton, closeButton);
  list.appendChild(label);
  text.value = '';
});


document.addEventListener('change', function (event) {
  let input = event.target;

  if (input.tagName === 'INPUT' && input.type === 'checkbox') {
    if (input.checked) {
      input.nextSibling.style.textDecoration = 'line-through';
    } else {
      input.nextSibling.style.textDecoration = 'none';
    }
  }
});

document.addEventListener('click', function (event) {
  // console.log(event.target);
  if (event.target.closest('.close__button')) {
    event.target.closest('.checkbox').remove();
    // console.log(event.target.closest('.checkbox'))
    text.focus();
  }

  if (event.target.closest('.edit__button')) {
    let edit = event.target.closest('.edit__button').previousSibling;
    let inputEdit = document.createElement('input');
    inputEdit.type = 'text';
    inputEdit.value = edit.textContent;

    let inputEditBtn = document.createElement('input');
    inputEditBtn.type = 'button';
    inputEditBtn.value = 'Edit';
    inputEditBtn.classList.add('add__edit');

    let formEdit = document.createElement('div');
    formEdit.classList.add('formEdit');
    formEdit.append(inputEdit, inputEditBtn);
    // edit.textContent = '';
    // event.target.closest('.checkbox').append(inputEdit);
    // form.append(inputEdit);
    // inputEdit.focus();

    for (let item of list.children) {
      if (item === event.target.closest('.checkbox')) {
        list.replaceChild(formEdit, item);
        formEdit.firstChild.focus();
      }
    }




  }
  if (event.target.closest('.add__edit')) {

    const label = document.createElement('label');
    const input = document.createElement('input');
    const div = document.createElement('div');
    const closeButton = document.createElement('div');
    const editButton = document.createElement('div');
    const imgCloseButton = document.createElement('img');
    const imgEditButton = document.createElement('img');
    imgCloseButton.src = "https://img.icons8.com/color/18/000000/delete-sign--v1.png";
    imgEditButton.src = "https://img.icons8.com/fluent/18/000000/edit.png";

    closeButton.append(imgCloseButton);
    editButton.append(imgEditButton);

    closeButton.classList.add('close__button');
    editButton.classList.add('edit__button');
    label.classList.add('checkbox');
    input.type = 'checkbox';
    div.classList.add('checkbox__text');

    let closeFormEdit = event.target.closest('.formEdit');

    div.textContent = closeFormEdit.firstChild.value;

    label.append(input, div, editButton, closeButton);


    for (let item of list.children) {
      if (item === closeFormEdit) {
        // edit.textContent = formEdit.firstChild.value;
        list.replaceChild(label, closeFormEdit);

      }
    }
  }
  // let edit = event.target.closest('.edit__button').previousSibling;
  // let inputEdit = document.createElement('input');
  // inputEdit.classList.add('input__edit');
  // let formEdit = document.createElement('form');
  // inputEdit.type = 'text';
  // inputEdit.placeholder = edit.textContent;
  // inputEdit = edit.textContent;
  // edit.textContent = '';
  // event.target.closest('.checkbox').append(inputEdit);

  // formEdit.append(inputEdit);
  // edit.append(formEdit);
  // for (let item of list.children) {
  //   if(item = event.target.closest('.checkbox')) {

  //     item.append(inputEdit);
  //   };
  // }
  // for (let i = 0; i < list.children.length; i++) {
  //   if(list.children[i] = event.target.closest('.checkbox')) {
  //     item.remove();
  //     list.children[i] = inputEdit;
  //   };
  // }

  // }
  // console.log(event.target.closest('.close__button'))
});


// let formEdit = document.querySelector('#formEdit');

// formEdit.addEventListener('submit', function (event) {
//   event.preventDefault();

//   const label = document.createElement('label');
//   const input = document.createElement('input');
//   const div = document.createElement('div');
//   const closeButton = document.createElement('div');
//   const editButton = document.createElement('div');
//   const imgCloseButton = document.createElement('img');
//   const imgEditButton = document.createElement('img');
//   imgCloseButton.src = "https://img.icons8.com/color/18/000000/delete-sign--v1.png";
//   imgEditButton.src = "https://img.icons8.com/fluent/18/000000/edit.png";

//   closeButton.append(imgCloseButton);
//   editButton.append(imgEditButton);

//   closeButton.classList.add('close__button');
//   editButton.classList.add('edit__button');
//   label.classList.add('checkbox');
//   input.type = 'checkbox';
//   div.classList.add('checkbox__text');

//   div.textContent = formEdit.firstChild.value;

//   label.append(input, div, editButton, closeButton);

//   for (let item of list.children) {
//     if (item === formEdit.firstChild) {
//       list.replaceChild(label, formEdit.firstChild)
//     }
//   }
// })









class ToDoModel {
  todos = []

  addTodo() {
    this.div.textContent = text.value;

    this.label.append(this.input, this.div, this.editButton, this.closeButton);
    this.list.appendChild(this.label);
    this.text.value = '';

    // list.appendChild(label);
    // text.value = '';
  }

  removeTodo() {
    event.target.closest('.checkbox').remove();
  }

  editTodo() {

  }

  toggleTodoCheck() {
    let input = event.target;

    if (input.tagName === 'INPUT' && input.type === 'checkbox') {
      if (input.checked) {
        input.nextSibling.style.textDecoration = 'line-through';
      } else {
        input.nextSibling.style.textDecoration = 'none';
      }
    }
  }
};

class ToDoView {
  constructor(model, container) {
    this._model = model;
    this._container = container;

    this.text = container.querySelector('#text');
    this.form = container.querySelector('#form');
    this.list = container.querySelector('#list');
    this.label = document.createElement('label');
    this.input = document.createElement('input');
    this.div = document.createElement('div');
    this.closeButton = document.createElement('div');
    this.editButton = document.createElement('div');
    this.imgCloseButton = document.createElement('img');
    this.imgEditButton = document.createElement('img');
    this.imgCloseButton.src = "https://img.icons8.com/color/18/000000/delete-sign--v1.png";
    this.imgEditButton.src = "https://img.icons8.com/fluent/18/000000/edit.png";

    this.closeButton.append(this.imgCloseButton);
    this.editButton.append(this.imgEditButton);

    this.closeButton.classList.add('close__button');
    this.editButton.classList.add('edit__button');
    this.label.classList.add('checkbox');
    this.input.type = 'checkbox';
    this.div.classList.add('checkbox__text');

    this.continer.addEventListener('click', this.HandleContainerClick);
    this.form.addEventListener('submit', this.Submit);
    this.continer.addEventListener('change',this.Change);

    this.render();
  }

  Change = ({ target }) => {
    let input = target;

    if (input.tagName === 'INPUT' && input.type === 'checkbox') {
      if (input.checked) {
        input.nextSibling.style.textDecoration = 'line-through';
      } else {
        input.nextSibling.style.textDecoration = 'none';
      }
    }
  }

  Submit = () => {
    event.preventDefault();

    this.div.textContent = text.value;

    this.label.append(this.input, this.div, this.editButton, this.closeButton);
    this.list.appendChild(this.label);
    this.text.value = '';
  }

  HandleContainerClick = ({ target }) => {
    if (target.closest('.close__button')) {
      target.closest('.checkbox').remove();
      text.focus();
    }

    if (target.closest('.edit__button')) {
      let edit = target.closest('.edit__button').previousSibling;
      let inputEdit = document.createElement('input');
      inputEdit.type = 'text';
      inputEdit.value = edit.textContent;

      let inputEditBtn = document.createElement('input');
      inputEditBtn.type = 'button';
      inputEditBtn.value = 'Edit';
      inputEditBtn.classList.add('add__edit');

      let formEdit = document.createElement('div');
      formEdit.classList.add('formEdit');
      formEdit.append(inputEdit, inputEditBtn);

      for (let item of list.children) {
        if (item === event.target.closest('.checkbox')) {
          list.replaceChild(formEdit, item);
          formEdit.firstChild.focus();
        }
      }
    }

    if (target.closest('.add__edit')) {

      let closeFormEdit = target.closest('.formEdit');

      this.div.textContent = closeFormEdit.firstChild.value;

      this.label.append(this.input, this.div, this.editButton, this.closeButton);


      for (let item of this.list.children) {
        if (item === closeFormEdit) {
          list.replaceChild(this.label, closeFormEdit);

        }
      }
    }
  }

  // render() {
  //   this._model.todos.forEach(todo => this._container.append(todo));
  // }


};

class ToDoController {

};




const model = new ToDoModel();
const view = new ToDoView(model, document.getElementById('ToDo'));
const controller = new ToDoController(model, view);


