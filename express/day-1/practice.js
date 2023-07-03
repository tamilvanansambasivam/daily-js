const express = require('express');
const app = express();
const port = 3000;

// Middleware: Logging requests
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});


// Route: Hello, World!
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/users/add', (req,res,next)=>{
    res.send(`<form action="/submit" method="POST">
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <button type="submit" >Submit</button>
  </form>`)
})



// Route: Greet a person by name
app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

// Route: Display a static HTML page
app.get('/page', (req, res) => {
  res.sendFile(__dirname + '/public/page.html');
});

// Route: Handle form submission
app.post('/submit', (req, res) => {
  const data = req.body;

  
  // Process form data...
  res.send('Form submitted successfully!');
});

// Error handling middleware
app.use((err, req, res, next) => {
console.error(err);
  res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
