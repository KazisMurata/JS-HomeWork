import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    name: 'some string from the state',
    todos: [
      { id: 1, name: 'first todo', completed: false },
      { id: 2, name: 'second todo', completed: false }
    ],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const newTodo = { id: Math.random(), name: name, completed: false };

    this.setState({
      todos: [ ...this.state.todos, newTodo ],
    });
  };

  handleToggleTodoCompleted = (id) => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed  };
        }
        return todo;
      }),
    })
  };

  handleTodoDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map(todo => {
            return (  
              <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through': '' }}>
                {todo.name}
                <input onChange={() => this.handleToggleTodoCompleted(todo.id)} type="checkbox" checked={todo.completed}/>

                <button onClick={() => this.handleTodoDelete(todo.id)}>x</button>
              </li>
            );
          })}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input type="text"/>
          <button>add</button>
        </form>
      </div>
    );
  }
}

// const reactElement = React.createElement('header', { className: 'App-header' });

export default App;
