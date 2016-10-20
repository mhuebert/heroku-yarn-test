var express = require('express');
var bcrypt = require('bcrypt');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT, function () {
  console.log('Example app started!');
});