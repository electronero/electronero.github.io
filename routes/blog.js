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
router.get('/bounty-app-may-10-2018', function(req, res, next) {
  res.render('may-10-2018', { title: 'Electronero Blog | May 10, 2018' });
});
router.get('/testnet-may-13-2018', function(req, res, next) {
  res.render('may-13-2018', { title: 'Electronero Blog | May 13, 2018' });
});
router.get('/bulletproof-rct-may-15-2018', function(req, res, next) {
  res.render('may-15-2018', { title: 'Electronero Blog | May 15, 2018' });
});
router.get('/lwma-difficulty-adjustment-algorithim-may-16-2018', function(req, res, next) {
  res.render('may-16-2018', { title: 'Electronero Blog | May 16, 2018' });
});
router.get('/camel-emissions-may-20-2018', function(req, res, next) {
  res.render('may-20-2018', { title: 'Electronero Blog | May 20, 2018' });
});
router.get('/exchange-announcement-may-25-2018', function(req, res, next) {
  res.render('may-25-2018', { title: 'Electronero Blog | May 25, 2018' });
});
module.exports = router;
