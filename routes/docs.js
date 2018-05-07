var express = require('express');
var router = express.Router();

/* GET blog page. */
router.get('/', function(req, res, next) {
  res.render('docs', { title: 'Electronero Docs' });
});
module.exports = router;
