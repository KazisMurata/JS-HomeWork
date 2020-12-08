class ToDoView {
    constructor(model, container) {
        this._model = model;
        this._container = container;
        this._list = container.querySelector('#list');
        this._form = container.querySelector('#form');
        this._text = container.querySelector('#text');

        this._container.addEventListener('click', this.handleContainerClick);
        this._form.addEventListener('submit', this.handleSubmit);
        this._container.addEventListener('change', this.handleChange);

        this.render();
    }

    setHandlers(handlers) {
        this.handlers = handlers;
    }

    handleChange = ({ target }) => {
        if (target.tagName === 'INPUT' && target.type === 'checkbox') {
            this.handlers.onToggleTodoCheck(target.closest('.checkbox').id);
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let value = event.target[0].value;

        this.handlers.onAddTodo(value);

        this._text.value = '';
        this._text.focus();
    }

    handleContainerClick = ({ target }) => {


        if (target.closest('.close__button')) {
            let id = target.closest('.checkbox').id;
            this.handlers.onRemoveTodo(id);
            this.render();
            this._text.focus();

        }

        if (target.closest('.edit__button')) {
            this.currentToDoId = target.closest('.checkbox').id;
            let edit = target.closest('.edit__button').previousSibling.previousSibling.textContent;

            let formEdit = document.createElement('div');
            formEdit.classList.add('formEdit')

            formEdit.innerHTML = `
          <input type="text" value=${edit}>
          <input type="button" value="Edit" class="add__edit">
        `;

            for (let item of this._list.children) {
                if (item === target.closest('.checkbox')) {
                    this._list.replaceChild(formEdit, item);
                    formEdit.firstChild.nextSibling.focus();
                }
            }
        }

        if (target.closest('.add__edit')) {
            let formEdit = target.closest('.formEdit');

            let editToDo = document.createElement('label');
            editToDo.classList.add('checkbox');
            editToDo.id = this.currentToDoId;

            this.handlers.onUpdateTodo(this.currentToDoId, formEdit.firstChild.nextSibling.value);
            editToDo.innerHTML = `
          <input type="checkbox">
          <div class="checkbox__text">${formEdit.firstChild.nextSibling.value}</div>
          <div class="edit__button"><img src="https://img.icons8.com/fluent/18/000000/edit.png"></div>
          <div class="close__button"><img src="https://img.icons8.com/color/18/000000/delete-sign--v1.png"></div>
        `;

            for (let item of this._list.children) {
                if (item === formEdit) {
                    this._list.replaceChild(editToDo, formEdit);
                }
            }
        }
    }

    render() {

        this._list.innerHTML = (
            this._model.todos.map(todo => (`
            <label class="checkbox" id=${todo.id}>
              <input type="checkbox" ${todo.completed ? 'checked' : ''}>
              <div class="checkbox__text" style= "text-decoration: ${todo.completed ? 'line-through' : 'none'}">${todo.value}</div>
              <div class="edit__button"><img src="https://img.icons8.com/fluent/18/000000/edit.png"></div>
              <div class="close__button"><img src="https://img.icons8.com/color/18/000000/delete-sign--v1.png"></div>
            </label>
          `)
            )
        ).join('');
    }
};

export default ToDoView;