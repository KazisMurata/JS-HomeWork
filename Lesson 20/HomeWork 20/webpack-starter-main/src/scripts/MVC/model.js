class ToDoModel {
    todos = []
    subscribers = []

    addTodo(value) {
        this.todos.push({ id: Math.random(), value: value, completed: false });
        this.notify();
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.notify();
    }


    toggleTodoCheck = (id) => {
        this.todos = this.todos.map(todo => {
            if (todo.id == id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        this.notify();
    }

    updateTodo(id, value) {
        this.todos = this.todos.map(todo => {
            if (todo.id == id) {
                return { ...todo, value: value };
            }
            return todo;
        });
        this.notify();
    }

    subscribe(fn) {
        if (typeof fn === 'function') {
            this.subscribers.push(fn);
        }
    }

    notify() {
        this.subscribers.forEach(subcriber => {
            subcriber(this.todos);
        })
    }
};

export default ToDoModel;