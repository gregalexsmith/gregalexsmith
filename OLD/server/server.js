var express = require('express');
var path = require('path');
var open = require('open');
var compression = require('compression');
var bodyParser = require('body-parser');
var mailer = require('./mailer');

/* eslint-disable no-console */


var port = 5000;
var app = express();
app.use(bodyParser.json())
// app.use(compression());
app.use(express.static('build'));
app.use(express.static('build/static'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../build/index.html'));
});

app.use('/contact', mailer);

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    // open('http://localhost:' + port);
  }
});
