var express = require('express');
var router = express.Router();

/* GET hardfork page. */
router.get('/', function(req, res, next) {
   /*ROUTE FORMAT*/
   /*res.render('EJSTEMPLATENAM', { title: 'METATDATA' });*/
  res.render('hardfork', { title: 'Hash Factory: Upcoming Hard Fork' });
});

module.exports = router;
