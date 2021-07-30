const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const movies = require('./server/movies.json');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
    console.log("Got /ping here");
    return res.send('pong');
});

app.get('/overview', function (req, res) {
  console.log("Got / here");
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/movies', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send(movies);
});

app.get('/movies/:id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send(movies.filter(movie => movie.id === req.params.id));
});

app.listen(3000, function () {
  console.log(`app listening on port ${3000}!`);
});

module.exports = app;