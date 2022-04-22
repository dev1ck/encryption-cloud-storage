var express = require('express');
var router = express.Router();
var fs = require('fs');
var auth = require('../lib/auth.js');
var db = require('../lib/db.js');
var aws = require('../lib/aws.js');
var crypto=require('../lib/crypto.js')
var multer = require('multer');
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './temp/upload/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
var uploadFile = multer({ storage: storage });

router.get('/', function (req, res, next) {
  auth.isLogind(req, res);
  var user = req.session.userId;
  var uploadPath = user;
  if(req.query.fileKey){
    uploadPath = req.query.fileKey;
  }
  db.makeFileList(req, res).then((fileList) => {
    if (!fileList.length) {
      res.render('files', { files: '', user: user, uploadPath: uploadPath, isAdmin: req.session.Admin});
    } else {
      res.render('files', { files: fileList, user: user, uploadPath: uploadPath, isAdmin: req.session.Admin });
    }
  });
});

router.post('/upload', uploadFile.single('uploadFiles'), (req, res) => {
  auth.isLogind(req, res);
  var user = req.session.userId;
  var path = req.body.uploadPath;
  var reLink = `/files`
  var state = 'Y'
  if(path != `${user}/`){
    reLink = `${reLink}/?fileKey=${path}`
    reLink = reLink.slice(0,-1);
  }
  if(!req.file){
    res.redirect(reLink);
  }
  var name = req.file.originalname;
  var type = req.file.mimetype;
  var size = req.file.size;
  var tempDir = `temp/upload/${name}`
  if(req.body.encrypted){
    state = 'E'
    tempDir += '.enc'
    db.insertLogData(user,'encrypting_upload',`${path}${name}` )
    .then(()=>db.insertFileData(name, path, type, size, user, state))
    .then(()=>crypto.encryptionFile(req, name))
    .then(() => aws.upload(path, name, type, tempDir))
    .catch(() => {
      fs.unlink(`./temp/upload/${name}`, (err) => {
        fs.unlink(`./temp/upload/${name}.enc`, (err) => {
          res.redirect(reLink);
        })
      })
    })
    .then(() => {
      fs.unlink(`./temp/upload/${name}`, (err) => {
        fs.unlink(`./temp/upload/${name}.enc`, (err) => {
          res.redirect(reLink);
        })
      })
    });
  } else {
    db.insertLogData(user,'upload',`${path}${name}` )
    .then(() => db.insertFileData(name, path, type, size, user, state))
    .then(() => aws.upload(path, name, type, tempDir))
    .catch(() => {
      fs.unlink(`./temp/upload/${name}`, (err) => {
        res.redirect(reLink);
      })
    })
    .then(() => {
      fs.unlink(`./temp/upload/${name}`, (err) => {
        res.redirect(reLink);
      })
    });
  }
});

router.post('/create_directory', (req, res) => {
  auth.isLogind(req, res);
  var folderName='새폴더'
  var user = req.session.userId;
  var path = req.body.uploadPath;
  var reLink = '/files'
  db.insertLogData(user,'make_folder',`${path}${folderName}`);
  db.insertFileData(folderName, path, 'directory',null, user, 'Y')
  .then(() => aws.creatDir(folderName, path))
  .then(() => {
    if(path != `${user}/`){
      reLink = `${reLink}/?fileKey=${path}`
      reLink = reLink.slice(0,-1);
    }
    res.redirect(reLink);
  });
});

router.post('/download', (req, res) => {
  auth.isLogind(req, res);
  var user = req.session.userId
  var name = req.body.fileName;
  var key = req.body.fileKey;
  var isEncrypt = req.body.state;
  var tempDir = `temp/download/${name}`
  db.insertLogData(user, 'download', key);
  if (isEncrypt === 'E'){
    tempDir += '.enc'
    aws.download(key, tempDir)
    .then(() => crypto.decryptionFile(req, name))
    .then(() => {
      res.download(`temp/download/${name}`, (err) => {
        fs.unlinkSync(`./temp/download/${name}.enc`)
        fs.unlinkSync(`./temp/download/${name}`)
      });
    });
  } else {
    aws.download(key, tempDir).then(() => {
      res.download(`./temp/download/${name}`, (err) => {
        fs.unlinkSync(`./temp/download/${name}`)
      });
    });
  }
});

router.post('/delete', (req, res) => {
  var type = req.body.fileType;
  var name = req.body.fileName;
  var key = req.body.fileKey;
  var path = req.body.filePath;
  var reLink = '/files'
  var user = req.session.userId;
  db.insertLogData(user, 'delete', key);
  if (type === 'directory') aws.deleteFolder(key);
  else aws.deleteFile(key);
  db.deleteFile(path, name);
  if(path != `${user}/`){
    reLink = `${reLink}/?fileKey=${path}`
    reLink = reLink.slice(0,-1);
  }
  res.redirect(reLink);
});

module.exports = router;