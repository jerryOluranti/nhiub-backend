const express = require("express");
const {recipesRouter} = require("./services/recipes/router");

const app = express();

app.use(express.json()); // Helps our app to accept json data
app.use('/recipes', recipesRouter);

// http://localhost:4321/
app.listen(3000, () => {
  console.log("express server running...");
})