// server/index.js

const express = require('express');
const bodyParser = require('body-parser');

// const PORT = process.env.PORT || 3001;
const PORT = 3000;

const app = express();

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res) => {
    res.send('index.html')
})
// app.get('/api', (req, res) => {
//     res.json({message: 'Hello from server!'});
// })

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
//   });

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});