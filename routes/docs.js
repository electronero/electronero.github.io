var express = require('express');
var router = express.Router();

/* GET blog page. */
router.get('/', function(req, res, next) {
  res.render('docs', { title: 'Electronero Docs' });
});
// get wallet-rpc-documentation
router.get('/wallet-rpc-documentation', function(req, res, next) {
  res.render('wallet-rpc-documentation', { title: 'Electronero Wallet RPC Documentation' });
});
// get daemon-rpc-documentation
router.get('/daemon-rpc-documentation', function(req, res, next) {
  res.render('daemon-rpc-documentation', { title: 'Electronero Daemon RPC Documentation' });
});
module.exports = router;
