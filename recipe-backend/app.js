const express = require("express");

const app = express();

app.use(express.json()); // Helps our app to accept json data

const recipes = [];

app.get('/get', (req, res) => {
  res.send(recipes);
});

app.post('/add', (req, res) => {
  recipes.push(req.body);
  res.send("Recipe added!");
})

app.patch('/edit', (req, res) => {

})

app.delete('/delete', (req, res) => {

})

// http://localhost:4321/
app.listen(3000, () => {
  console.log("express server running...");
})