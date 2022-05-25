// server/index.js

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 2000;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
