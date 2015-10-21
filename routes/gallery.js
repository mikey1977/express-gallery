var express = require('express');
var router = express.Router();

// homepage
router.get('/', function (req, res) {
  res.send('view a list of gallery photos');
});

router.get('/new', function (req, res) {
  res.send('see a new photo');
});

// :id can mean anything
router.get('/:id', function (req, res) {
  res.send('see a single gallery photo');
});

//go to new page with form fields
router.post('/gallery', function (req, res) {
  res.send('create a new gallery photo');
});

router.get('/:id/edit', function (req, res) {
  res.render('edit');
});

router.put('/:id', function (req, res) {
  res.send('update a single photo by id');
});

router.delete('/:id', function (req, res) {
  res.send('delete a photo from gallery');
});

module.exports = router;