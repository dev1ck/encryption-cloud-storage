var express = require('express');
var router = express.Router();
var auth = require('../lib/auth.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  auth.isLogind(req,res);
  res.redirect('/files');
  //res.render('index', { title: 'Express' });
});

module.exports = router;
