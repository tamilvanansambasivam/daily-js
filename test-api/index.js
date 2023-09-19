const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const todos = [ { id: 1, text: 'Buy groceries', completed: false },
{ id: 2, text: 'Go to the gym', completed: true },
{ id: 3, text: 'Read a book', completed: false },];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(port, () => {
  console.log(`Todo API listening at http://localhost:${port}`);
});
