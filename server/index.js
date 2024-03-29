// server/index.js

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 2000;
const app = express();


app.use(express.static(path.resolve(__dirname, "../client/dist/build")));
app.use(express.json());

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
