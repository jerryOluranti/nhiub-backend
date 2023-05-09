require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const {recipesRouter} = require("./routes/recipe.routes");
const {userRouter} = require("./routes/user.routes");

const app = express();

app.use(express.json()); // Helps our app to accept json data
app.use('/users', userRouter);
app.use('/recipes', recipesRouter);
app.get('/status', (req, res) => {
	res.status(200).send("Server is running");
})

try {
  // throw new Error("Just kidding 🥲");
} catch (e) {
  console.log(e.message);
} finally {
  console.log("e don happen 😩");
}

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(5000, () => {
    console.log("express server running...");
  })
}).catch((err) => {
  console.log("Mongo error", err);
})
