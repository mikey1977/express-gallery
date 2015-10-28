var express = require('express');
var app = express();
var gallery = require('./routes/gallery');
var jade = require('jade');
var db = require('./models');
var User = db.User;
var Posts = db.Posts;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.set('view engine', 'jade');
app.set('views', './views');
var methodOverride = require('method-override');

// all static files check from here
app.use(express.static('public'));
app.use(methodOverride(function(req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {

    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.get('/users', function(req, res) {
  User.findAll()
    .then(function (users) {
      res.json(users);
    });
});

app.post('/users', function (req, res) {
  User.create({ username : req.body.username })
    .then(function (user) {
      res.json(user);
    });
});

//mounting gallery to users
app.use('/gallery', gallery);

app.get('/', function (req, res) {
  Posts.findAll()
    .then(function (posts) {
      res.render('index', { galleryimages : posts });
    });
});

app.delete('/user/gallery/:id', function (req, res) {
  res.send('DELETE photo by id');
});

// var server = app.listen(3000, function() {
//   var host = server.address().address;
//   var port = server.address().port;
// });

app.listen(3000, function() {
  db.sequelize.sync();
});

module.exports = app;

// app.post('/', function (req, res) {
//   Posts.create({
//     author: DataTypes.STRING,
//     link: DataTypes.STRING,
//     description: DataTypes.STRING
//   })
//   .then(function (post) {
//     res.json(post);
//   });
// });

// res.render('index', {
//   title : '_ARCHITEKT',
//   galleryimages : [
//   {
//     id : 1,
//     image : "http://witze.net/architekt.gif",
//     description : "This dude likes his blueprints, sometimes too much...don't ask",
//     author : "Scotchy McScotherson"
//   },
//   {
//     id : 2,
//     image : "http://www.planungsbueroklee.de/typo3temp/pics/Architekt_bdfb3f3ad9.jpg",
//     description : "Need someone to draw up some blueprints?  Here's your gal.  But be warned, she is not good with computers.",
//     author : "Whiskey McWhiskeypher"
//   },
//   {
//     id : 3,
//     image : "http://cliparts.co/cliparts/riL/n5K/riLn5Ko4T.png",
//     description : "Oooooooooooooh, look at this beautiful house!  It's so much awesome!",
//     author : "Bourbie McBourbon"
//   },
//   {
//     id : 4,
//     image : "http://www.clipartlord.com/wp-content/uploads/2013/01/house2.png",
//     description : "Don't you want to live in a red house with 4 windows, AND a green roof?",
//     author : "Vodki Vodkarov"
//   },
//   {
//     id : 5,
//     image : "http://wackymania.com/image/2011/3/real-house-inspired-by-cartoons/real-house-inspired-by-cartoons-02.jpg",
//     description : "Beautiful house in Springfield for sale.  Free beer included",
//     author : "Ginny Ginweather"
//   },
//   {
//     id : 6,
//     image : "http://www.how-to-draw-funny-cartoons.com/image-files/cartoon-house-008.jpg",
//     description : "Happy happy happy happy happy happy happy happy happy happy house!",
//     author : "Jeff"
//   }]
// });
// });

// app.get('/gallery/new', function (req, res) {
//   res.render('form', {
//     title : 'NEW'
//   });
// });