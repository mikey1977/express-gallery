var express = require('express');
var app = express();
var users = require('./routes/users');
var jade = require('jade');

app.set('view engine', 'jade');
app.set('views', './views');

// all static files check from here
app.use(express.static('public'));

app.use('/users', users);

app.get('/', function (req, res) {

  res.render('index', {
    title : '_ARCHITEKT'
  });
});


var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
});