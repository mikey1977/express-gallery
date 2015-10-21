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
      description : "Need someone to draw up some blueprints?  Here's your gal.  But be warned, she is not good with computers.",
      author : "Whiskey McWhiskeypher"
    },
    {
      id : 3,
      image : "http://cliparts.co/cliparts/riL/n5K/riLn5Ko4T.png",
      description : "Oooooooooooooh, look at this beautiful house!  It's so much awesome!",
      author : "Bourbie McBourbon"
    },
    {
      id : 4,
      image : "http://www.clipartlord.com/wp-content/uploads/2013/01/house2.png",
      description : "Don't you want to live in a red house with 4 windows, AND a green roof?",
      author : "Vodki Vodkarov"
    },
    {
      id : 5,
      image : "http://wackymania.com/image/2011/3/real-house-inspired-by-cartoons/real-house-inspired-by-cartoons-02.jpg",
      description : "Beautiful house in Springfield for sale.  Free beer included",
      author : "Ginny Ginweather"
    },
    {
      id : 6,
      image : "http://www.how-to-draw-funny-cartoons.com/image-files/cartoon-house-008.jpg",
      description : "Happy happy happy happy happy happy happy happy happy happy house!",
      author : "Jeff"
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