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
    title : '_ARCHITEKT',
    galleryimages : [
    {
      id : 1,
      image : "http://witze.net/architekt.gif",
      description : "This dude likes his blueprints, sometimes too much...don't ask",
      author : "Scotchy McScotherson"
    },
    {
      id : 2,
      image : "http://www.planungsbueroklee.de/typo3temp/pics/Architekt_bdfb3f3ad9.jpg",
      description : "Need someone to draw up some blueprints?  Here's your gal",
      author : "Whiskey McWhiskey"
    },
    {
      id : 3,
      image : "http://cliparts.co/cliparts/riL/n5K/riLn5Ko4T.png",
      description : "Oooooooooooooh, look at this beautiful house!  It's so much awesome!",
      author : "Bourbie McBourbon"
    }]
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