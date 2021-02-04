const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT ?? 3000;

let todos = [
  { id: String(Math.random()), value: 'Заметка 1', completed: false },
  { id: String(Math.random()), value: 'Заметка 2', completed: false },
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/api/todos', function (req, res) {
  res.send(JSON.stringify(todos));
});

app.post('/api/todos', function (req, res) {
  todos.push({ id: String(Math.random()), value: req.body.value, completed: false });

  res.send(JSON.stringify(todos));
});

app.delete('/api/todos/:id', function (req, res) {
  let id = req.params.id;

  todos = todos.filter(todo => todo.id !== id);

  res.send(JSON.stringify(todos));
});

app.get('/api/todos/checked/:id', function (req, res) {
  const id = req.params.id;
  
  todos = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });

  res.send(JSON.stringify(todos));
});

app.put('/api/todos/edit/:id', function (req, res) {
  const id = req.params.id;
  
  todos = todos.map(todo => {
    if (todo.id == id) {
      return { ...todo, value: req.body.value };
    }
    return todo;
  });

  res.send(JSON.stringify(todos));
});

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));