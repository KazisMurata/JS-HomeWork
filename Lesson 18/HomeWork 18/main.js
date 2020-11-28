"use strict";

class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    save() {
      console.log('сохраняю');
    }

    load() {
        console.log('загружаю');
    }

    search() {
        console.log('ищу');
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
}
// let menu = document.querySelector('#menu');
// new Menu(menu);



// Делаем список todo:

// Задание должно быть выполнено в ООП стиле с использованием классов.

// Управление состоянием лучше вынести в отдельный класс, который ничего не 
// будет знать о DOM, он просто будет хранить список и методы для его изменения.

// Пример классов которые могут быть использованы Todo, TodoState, TodoItem





// у нас текстовое поле, списк и кнопка, при сохранении новой задачи она появляется в списке ниже
// рядом с каждой задачей есть чекбокс, если его нажать, то задача становится выполненной и текст должен быть зачеркнутым
// также рядом с каждой задачей есть крестик, при клике на который задача удаляется из списка

class Todo {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    save() {
      console.log('сохраняю');
    }

    load() {
        console.log('загружаю');
    }

    search() {
        console.log('ищу');
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
}
let text = document.querySelector('#text');
let form = document.querySelector('#form');
let list = document.querySelector('#list');
const ToDo = document.querySelector('#ToDo');

form.addEventListener('submit', function(event) {
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
    editButton.classList.add('close__edit');
    label.classList.add('checkbox');
    input.type = 'checkbox';
    div.classList.add('checkbox__text');

    div.textContent = text.value;

    label.append(input, div, editButton, closeButton);
    list.appendChild(label);
});


document.addEventListener('change', function(event) {
    let input = event.target;

    if (input.tagName === 'INPUT' && input.type === 'checkbox') {
        if(input.checked) {
            input.nextSibling.style.textDecoration = 'line-through';        
        } else {
            input.nextSibling.style.textDecoration = 'none';
        }
    }
});