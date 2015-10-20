var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('view a list of gallery photos');
});

router.get('/:id', function (req, res) {
  res.send('see a single gallery photo');
});

module.exports = router;