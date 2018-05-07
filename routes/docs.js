var express = require('express');
var router = express.Router();

/* GET blog page. */
router.get('/', function(req, res, next) {
  res.render('docs', { title: 'Electronero Docs' });
});
router.get('/wallet-rpc-documentation', function(req, res, next) {
  res.render('wallet-rpc-documentation', { title: 'Electronero Wallet RPC Documentation' });
});
module.exports = router;
