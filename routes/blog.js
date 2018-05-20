var express = require('express');
var router = express.Router();

/* GET blog page. */
router.get('/', function(req, res, next) {
  res.render('blog', { title: 'Electronero Blog' });
});
router.get('/initializing-testnet-may-03-2018', function(req, res, next) {
  res.render('may-03-2018', { title: 'Electronero Blog | May 03, 2018' });
});
router.get('/sweep_unmixable-may-07-2018', function(req, res, next) {
  res.render('may-07-2018', { title: 'Electronero Blog | May 07, 2018' });
});
module.exports = router;
