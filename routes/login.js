var express = require('express');
var router = express.Router();
var db = require('../lib/db.js');
var text ='';

router.get('/', function (req, res, next) {
  res.render('login',{wrongText :text});
  text ='';
});

router.post('/login_process', function (req, res) {
  var userId = req.body.userId;
  var userPass = req.body.pass;
  var getState = '';
  db.cheakID(userId)
  .then(result => {
    getState = result.state;
    return db.cheakPW(result.user_id, userPass)
  }).catch(result=>{
    if(result){
      text = '비활성화 된 계정입니다. 관리자에게 문의하세요.'
    } else{
      text='생성되지 않은 아이디이거나, 잘못된 비밀번호입니다.';
    }
    res.redirect('/login');
  }).then(() => {
    req.session.is_logined = true;
    req.session.userId = userId;
    if(getState === 'A'){
      req.session.Admin = true;
    }
    return db.lastLogin(userId)
  }).catch(()=>{
    text='생성되지 않은 아이디이거나, 잘못된 비밀번호입니다.';
    res.redirect('/login');
  }).then((userid)=>{
    db.insertLogData(userid,'login');
  }).then(()=>{
    req.session.save(function () {
      res.redirect('/files');
    });
  });
});
    

router.get('/logout', (req, res) => {
  var user = req.session.userId;
  db.insertLogData(user,'logout')
  .then(()=>{
    req.session.destroy(function(err){
      res.redirect('/login');
    });
  })
});



module.exports = router;
