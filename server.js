var express = require('express');
var app = express();
var gallery = require('./routes/gallery');
var jade = require('jade');

app.set('view engine', 'jade');
app.set('views', './views');

// all static files check from here
app.use(express.static('public'));

//mounting gallery to users
app.use('/gallery', gallery);

app.get('/', function (req, res) {

  res.render('index', {
    title : '_ARCHITEKT'
  });
});

// app.get('/gallery/new', function (req, res) {
//   res.render('form', {
//     title : 'NEW'
//   });
// });

app.delete('/user/gallery/:id', function (req, res) {
  res.send('DELETE photo by id');
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
});