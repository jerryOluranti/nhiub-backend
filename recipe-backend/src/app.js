const express = require("express");
const mongoose = require("mongoose");
const {recipesRouter} = require("./routes/recipe.routes");
const {userRouter} = require("./routes/user.routes");

const app = express();
const MONGO_URL = "mongodb+srv://emogi:emogi@cluster0.bsyb5pi.mongodb.net/recipedb?retryWrites=true&w=majority";

app.use(express.json()); // Helps our app to accept json data
app.use('/users', userRouter);
app.use('/recipes', recipesRouter);

mongoose.connect(MONGO_URL).then(() => {
  app.listen(3000, () => {
    console.log("express server running...");
  })
}).catch((err) => {
  console.log("Mongo error", err);
})