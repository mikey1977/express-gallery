var express = require('express');
var router = express.Router();

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