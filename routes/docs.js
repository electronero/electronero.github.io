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
// get offline-backup
router.get('/offline-backup', function(req, res, next) {
  res.render('offline-backup', { title: 'Electronero Offline Backup' });
});
// get offline-backup
router.get('/vps-electronero-node', function(req, res, next) {
  res.render('vps-electronero-node', { title: 'Run an Electronero Node on VPS' });
});
// get offline-backup
router.get('/import-electronero-blockchain', function(req, res, next) {
  res.render('import-electronero-blockchain', { title: 'Electronero Blockchain Import' });
});
// get offline-backup
router.get('/electronero-tools', function(req, res, next) {
  res.render('electronero-tools', { title: 'Electronero Tools' });
});
// get pool-mining-electronero-with-xmr-stak
router.get('/pool-mining-electronero-with-xmr-stak', function(req, res, next) {
  res.render('pool-mining-electronero-with-xmr-stak', { title: 'Pool Mining Electronero w/ XMR-STAK' });
});
// get restore-wallet-unlock-etnx
router.get('/restore-wallet-unlock-etnx', function(req, res, next) {
  res.render('restore-wallet-unlock-etnx', { title: 'Restore Electronero Wallet & Unlock ETNX' });
});
// get restore-wallet-access-address
router.get('/restore-wallet-access-address', function(req, res, next) {
  res.render('restore-wallet-access-address', { title: 'Restore Electronero Wallet & Access ETNX' });
});
module.exports = router;
