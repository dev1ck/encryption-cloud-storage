var express = require('express');
var router = express.Router();
var auth = require('../lib/auth.js');
var db = require('../lib/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  auth.isLogind(req,res);
  auth.isAdmin(req,res);
  var user = req.session.userId;
  db.getLogList().then((logData)=>{
    res.render('log', {user : user, isAdmin: req.session.Admin, logs: logData});
  })
 
});

module.exports = router;
