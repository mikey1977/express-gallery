var express = require('express');
var router = express.Router();
var db = require('./../models');
var User = db.User;
var Posts = db.Posts;

// homepage
router.get('/', function (req, res) {
  res.send('view a list of gallery photos');
});

// router.get('/', function (req, res) {
//   res.render('index', {
//     galleryimages : [
//     {
//       id : 1,
//       image : "http://witze.net/architekt.gif",
//       description : "This dude likes his blueprints, sometimes too much...don't ask",
//       author : "Scotchy McScotherson"
//     },
//     {
//       id : 2,
//       image : "http://www.planungsbueroklee.de/typo3temp/pics/Architekt_bdfb3f3ad9.jpg",
//       description : "Need someone to draw up some blueprints?  Here's your gal",
//       author : "Whiskey McWhiskey"
//     },
//     {
//       id : 3,
//       image : "http://cliparts.co/cliparts/riL/n5K/riLn5Ko4T.png",
//       description : "Oooooooooooooh, look at this beautiful house!  It's so much awesome!",
//       author : "Bourbie McBourbon"
//     }]
//   })
// })

router.get('/new', function (req, res) {
  res.render('form');
});

//go to new page with form fields
router.post('/', function (req, res) {
  Posts.create({
    author : req.body.author,
    link : req.body.link,
    description : req.body.description
  })
    .then(function (post) {
      res.redirect('/');
    });
});

// router.get('/:id/edit', function (req, res) {
//   res.render('edit');
// });

// :id can mean anything
router.get('/:id', function (req, res) {
  Posts.findOne({ where : { id : req.params.id } })
    .then(function (post) {
      console.log(post.dataValues);
      res.render('details',
        post.dataValues);
    });

});
router.put('/:id', function (req, res) {
  Posts.findOne({ where : { id : req.params.id } })
    .then(function (post) {
      if (post) {
        post.updateAttributes({
          author : post.author,
          link : post.link,
          description : post.description
        }).success(function(post) {
          res.send(post);
        });
      }
    });
});

router.get('/update/:id', function (req, res) {
  Posts.findOne({ where : { id : req.params.id } })
    .then(function (post) {
      res.render('update',
        post.dataValues);
    });
});

router.post('/update/:id', function (req, res) {
  Posts.update( {
    author : req.body.author,
    link : req.body.link,
    description : req.body.description
  }, { where : { id : req.params.id } })
    .then(function (post) {
      res.redirect('/');
    });
});

router.delete('/:id', function (req, res) {
  Posts.destroy({
    where : {
      id : req.params.id
    }
  }).then(function(post) {
    res.redirect('/');
  });
});

module.exports = router;