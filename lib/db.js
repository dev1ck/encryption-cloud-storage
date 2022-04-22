var mysql = require('mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var crypto=require('crypto');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'DB_USERNAME',
    password: 'DB_PASSWORD',
    database: 'DB_NAME'
});
db.connect();

module.exports = {
    insertFileData: function (name, path, type, size, user, state) {
        return new Promise((resolv, reject) => {
            db.query(
                `select file_name from files where path = ? and file_name = ?`,
                [path, name],
                function (err, res) {
                    if (err) {
                        console.log(err);
                        reject();
                    } else {
                        if (res.length) {
                            db.query(
                                `update files set datatype=?, size=?, state=?, timestamp=now() where path=? and file_name = ?`,
                                [type, size, state, path, name],
                                function (err, res) {
                                    if (err) {
                                        console.log(err);
                                        reject();
                                    } else {
                                        console.log(res)
                                        resolv();
                                    }
                                }
                            );
                        } else {
                            db.query(
                                `insert into files (file_name, datatype, size, path, timestamp, state, user_id)
                                    values(?,?,?,?,now(),?,?)`,
                                [name, type, size, path, state, user],
                                function (err, res) {
                                    if (err) {
                                        console.log(err);
                                        reject();
                                    } else {
                                        console.log(res)
                                        resolv();
                                    }
                                }
                            );
                        }
                    }
                }
            );

        });
    },
    makeFileList: function (req, res) {
        return new Promise((resolv, reject) => {
            var user = req.session.userId;
            var path = `${user}/`;
            if (req.query.fileKey) {
                path = `${req.query.fileKey}/`
            }
            db.query(
                `select file_name, datatype, size, path, date_format(timestamp,'%y/%m/%d') timestamp, state from files
                where (state='Y' or state='E') and user_id=? and path=?
                order by field(datatype, 'directory') desc, timestamp`,
                [user, path],
                function (err, res) {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        resolv(res);
                    }
                }
            );
        });
    },
    cheakID: function (userId) {
        return new Promise((resolv, reject) => {
            db.query(`select user_id, state from account where user_id='${userId}'`, function (err, res) {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    if (res.length) {
                        if (res[0].state === 'N') {
                            reject(true);
                        } else {
                            resolv(res[0]);
                        }
                    } else {
                        reject();
                    }
                }
            });
        })
    },
    cheakPW: function (userId, pass) {
        return new Promise((resolv, reject) => {
            db.query(`select password from account where user_id=?`,
                [userId],
                function (err, res) {
                    if(err){
                        reject(err);
                    }else{
                        bcrypt.compare(pass,res[0].password).then(result=>{
                            if(result){
                                resolv();
                            }
                            else {
                                reject();
                            }
                        })
                    }
                }
            )
        })
    },
    lastLogin: function(userId){
        return new Promise((resolv, reject) => {
            db.query(
                'update account set laste_login=now() where user_id = ?',
                [userId],
                function (err, res) {
                    if (err) reject(err);
                    else resolv(userId);
                }
            )
        });
    },
    makeUser: function (userId, userPlaminPass) {
        return new Promise((resolv, reject) => {
            var key = crypto.randomBytes(16).toString('hex');
            db.query(
                'select user_id from account where user_id = ?',
                [userId],
                function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        if (!res.length) {
                            bcrypt.hash(userPlaminPass, saltRounds).then(cryptPass => {
                                db.query(
                                    `insert into account (user_id, password, encryption_key, create_account, state)
                                        values(?,?,?,now(),'Y')`,
                                    [userId, cryptPass, key],
                                    function (err, res) {
                                        if (err) {
                                            reject(err);
                                        } else {
                                            console.log(res)
                                            resolv(userId);
                                        }
                                    }
                                );
                            });
                        } else {
                            reject('이미 있는 계정입니다');
                        }
                    }
                }
            );
        })
    },
    makeUserList: function () {
        return new Promise((resolv, reject) => {
            db.query(
                "select user_id, state from account",
                function (err, res) {
                    if (err) {
                        reject();
                    } else {
                        resolv(res);
                    }
                }
            );
        });    
    },
    getKey: function(userid){
        return new Promise((resolv, reject) => {
            db.query(
                `select encryption_key from account where user_id = ?`,
                [userid],
                function (err, res) {
                    resolv(res[0].encryption_key)
                }
            );
        })
    },
    deleteFile: function(path, fileName){
        return new Promise((resolv, reject) => {
            db.query(
                `delete from files where path like ? or (path = ? and file_name = ?) `,
                [`${path}${fileName}/%`, path, fileName],
                function (err, res) {
                    if(err){
                        console.log(err);
                        reject();
                    }else {
                        console.log(res);
                        resolv(path);
                    }
                }
            );
        });
    },
    deleteUser: function(user_id){
        return new Promise((resolv, reject) => {
            db.query(
                `delete from account where user_id=? `,
                [user_id],
                function (err, res) {
                    if(err){
                        console.log(err);
                        reject();
                    }else {
                        console.log(res);
                        resolv(user_id);
                    }
                }
            );
        });
    },
    insertLogData: function(user_id, active, filename=null){
        return new Promise((resolv, reject) => {
            db.query(
                `insert into log (timestamp, user_id, activity, file_name)
                values(now(),?,?,?)`,
                [user_id, active, filename],
                function (err, res) {
                    if(err){
                        console.log(err);
                        reject();
                    }else {
                        console.log(res);
                        resolv(user_id);
                    }
                }
            );
        });
    },
    getLogList: function(){
        return new Promise((resolv, reject) => {
            db.query(
                `select date_format(timestamp,'%y-%m-%d %H:%i:%s') timestamp, user_id, activity, file_name from log order by log_id desc`,
                function (err, res) {
                    if(err){
                        console.log(err);
                        reject();
                    }else {
                        resolv(res);
                    }
                }
            );
        });
    }
}