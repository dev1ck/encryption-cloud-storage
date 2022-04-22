var express = require('express');
var router = express.Router();
var auth = require('../lib/auth.js');
var db = require('../lib/db.js');
var aws=require('../lib/aws.js')
/* GET users listing. */
router.get('/', function(req, res, next) {
  auth.isLogind(req,res);
  auth.isAdmin(req,res);
  var user = req.session.userId;
  db.makeUserList().then((userList) => {
    res.render('users', {user : user, members : userList, isAdmin: req.session.Admin});
  })
});
router.post('/create_user', function(req,res) {
  auth.isLogind(req,res);
  auth.isAdmin(req,res);
  var ID = req.body.userId;
  var PASS = req.body.pass;
  db.makeUser(ID, PASS)
  .then(aws.creatDir)
  .catch(console.log)
  .then(()=>res.redirect('/users'))
  .catch(console.log)
  .finally(()=>res.redirect('/users'))
});
router.post('/delete', function(req,res) {
  db.deleteFile(req.body.userName,'')
  .then(db.deleteUser)
  .then(aws.deleteFolder)
  .finally(()=>res.redirect('/users'))

});

module.exports = router;
