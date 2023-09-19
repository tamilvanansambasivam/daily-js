const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample data: Todos stored in memory as an array of objects
const todos = [
  { id: 1, text: 'Buy groceries', completed: false },
  { id: 2, text: 'Go to the gym', completed: true },
  { id: 3, text: 'Read a book', completed: false },
];

// Route to retrieve all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Route to create a new todo
app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    text: req.body.text,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Start the server
app.listen(port, () => {
  console.log(`Todo API listening at http://localhost:${port}`);
});
