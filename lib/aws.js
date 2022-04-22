var fs = require('fs');
var AWS = require('aws-sdk');

s3 = new AWS.S3();
AWS.config.update({ region: 'ap-northeast-2' })

module.exports ={
    upload : function(path, name, type, tempDir) {
        return new Promise((resolve, reject) => {
            var params = {
                Bucket: 'encryptionstorage',
                Key: `${path}${name}`,
                ACL: 'public-read',
                Body: fs.createReadStream(tempDir),
                ContentType: type
            }
            s3.upload(params, (err, data) => {
                if(err){
                    console.log(err);
                    reject(err);
                }else{
                    console.log(data);
                    resolve();
                }
            })
        })
            
    },
    creatDir : function(name,path=''){
        return new Promise((resolve, reject) => {
            var params = {
                Bucket: 'encryptionstorage',
                Key: `${path}${name}/`, 
                ACL: 'public-read',
                Body : ''
            }
            s3.upload(params, (err, data) => {
                if(err){
                    console.log(err);
                    reject(err);
                }else{
                    console.log(data);
                    resolve(data);
                }
            })
        })
    },
    download : function(key, tempDir){
        return new Promise((resolve, reject) => {
            var params = {
                Bucket: 'encryptionstorage',
                Key: key
            }
            s3.getObject(params, (err, data)=>{
                if(err){
                    console.log(err);
                    reject(err);
                }
                fs.writeFile(tempDir,data.Body, (err) =>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                    resolve();
                })        
            })
        });
    },
    deleteFile : function(key) {
        var params = {
            Bucket: 'encryptionstorage',
            Key: key
        };
        s3.deleteObject(params, (err,data) =>{
            if(err) console.log(err);
            else console.log(data);
        })
    },
    deleteFolder : function(key) {
        return new Promise((resolve, reject) => {
            var params = {
                Bucket: 'encryptionstorage',
                Prefix: key+'/'
            };
            s3.listObjects(params, function(err, data) {
                if (err) reject(err) ;
            
                if (data.Contents.length === 0) resolve();
            
                params = {Bucket: 'encryptionstorage'};
                params.Delete = {Objects:[]};
            
                data.Contents.forEach(function(content) {
                    params.Delete.Objects.push({Key: content.Key});
                });
            
                s3.deleteObjects(params, function(err, deleteData) {
                    if (err) reject(err);
                    if(data.Contents.length == 1000)emptyBucket(bucketName,callback);
                    else resolve();
                });
            });
        });
    }
}