var express = require('express');
var router = express.Router();
var db = require('./../models');
var User = db.User;
var Posts = db.Posts;

// homepage
router.get('/', function (req, res) {
  res.redirect('/');
});


router.get('/new', ensureAuthenticated, function (req, res) {
  res.render('form');
});

//go to new page with form fields
router.post('/', ensureAuthenticated, function (req, res) {
  Posts.create({
    author : req.body.author,
    link : req.body.link,
    description : req.body.description
  })
    .then(function (post) {
      res.redirect('/');
    });
});

router.get('/:id', ensureAuthenticated, function (req, res) {
  Posts.findOne({ where : { id : req.params.id } })
    .then(function (post) {
      console.log(post.dataValues);
      res.render('details',
        post.dataValues);
    });
});

router.put('/:id', ensureAuthenticated, function (req, res) {
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

router.get('/update/:id', ensureAuthenticated, function (req, res) {
  Posts.findOne({ where : { id : req.params.id } })
    .then(function (post) {
      res.render('update',
        post.dataValues);
    });
});

router.post('/update/:id', ensureAuthenticated, function (req, res) {
  Posts.update( {
    author : req.body.author,
    link : req.body.link,
    description : req.body.description
  }, { where : { id : req.params.id } })
    .then(function (post) {
      res.redirect('/');
    });
});

router.delete('/:id', ensureAuthenticated, function (req, res) {
  Posts.destroy({
    where : {
      id : req.params.id
    }
  }).then(function(post) {
    res.redirect('/');
  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}

module.exports = router;