class ToDoController {
    constructor(model, view) {
        this._model = model;
        this._view = view;

        this._view.setHandlers({
            onToggleTodoCheck: (id) => this._model.toggleTodoCheck(id),

            onAddTodo: (value) => this._model.addTodo(value),

            onRemoveTodo: (id) => this._model.removeTodo(id),

            onUpdateTodo: (id, value) => this._model.updateTodo(id, value),
        });

        this._model.subscribe(() => this._view.render());
    }
};

export default ToDoController;
