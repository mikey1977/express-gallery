var express = require('express');
var app = express();
var users = require('./routes/users');
var jade = require('jade');
app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function (req, res) {
  // res.send('Are we working?');
  res.render('index', {
    title : '_ARCHITEKT'
  });
});

app.use('/users', users);

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
});