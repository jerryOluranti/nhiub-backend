const express = require("express");

const app = express();

app.post('/', (req, res) => {
  res.send("Hello express 👋");
});

// http://localhost:4321/
app.listen(3000, () => {
  console.log("express server running...");
})