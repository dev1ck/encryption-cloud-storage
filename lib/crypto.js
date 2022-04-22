var crypto = require('crypto');
var fs = require('fs');
var db = require('../lib/db.js');
const initVect = 'f0k9h3k6v3j6fdj2'

module.exports = {
    encryptionFile : function(req,name){
        return new Promise((resolve, reject) => {
            db.getKey(req.session.userId)
            .then((key)=>{
                var cipher = crypto.createCipheriv('aes-256-ofb', key, initVect);
                var input = fs.createReadStream(`temp/upload/${name}`);
                var output = fs.createWriteStream(`temp/upload/${name}.enc`);

                input.pipe(cipher).pipe(output);

                output.on('finish', function() {
                    console.log('Encrypted file written to disk!');
                    resolve();
                })
            })  
        })
    },
    decryptionFile : function(req, name){
        return new Promise((resolve, reject) => {
            db.getKey(req.session.userId)
            .then((key)=>{
                var cipher = crypto.createDecipheriv('aes-256-ofb', key, initVect)
                var input = fs.createReadStream(`temp/download/${name}.enc`);
                var output = fs.createWriteStream(`temp/download/${name}`);
                input.pipe(cipher).pipe(output);
                output.on('finish', function() {
                    console.log('Decrypted file written to disk!');
                    resolve();
                })
            })
            
        })
    }
}