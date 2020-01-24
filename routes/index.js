var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/tp', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../public/tp.html'));
});

module.exports = router;
