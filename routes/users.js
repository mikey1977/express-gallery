var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('view a list of gallery photos');
});

router.get('/gallery/:id', function (req, res) {
  res.send('see a single gallery photo');
});

router.get('/gallery/new', function (req, res) {
  res.send('see a new photo');
});

router.post('/gallery', function (req, res) {
  res.send('create a new gallery photo');
});

router.get('/gallery/:id/edit', function (req, res) {
  res.send('edit a gallery photo');
});

router.put('/gallery/:id', function (req, res) {
  res.send('update a single photo by id');
});

router.delete('/gallery/:id', function (req, res) {
  res.send('delete a photo from gallery');
});

module.exports = router;