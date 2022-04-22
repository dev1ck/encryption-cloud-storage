var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var FileStore = require('session-file-store')(session)
var text = ''



var indexRouter = require('./routes/index');
var usersLogin = require('./routes/login');
var userFileList = require('./routes/files');
var userSetting = require('./routes/users');
var userLog = require('./routes/log');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'ecssessionkey',
  cookie: {
    maxAge: 1000 * 60 * 30
  },
  resave: false,
  saveUninitialized: true,
  store : new FileStore()
}));


app.use('/', indexRouter);
app.use('/login', usersLogin);
app.use('/files', userFileList)
app.use('/users', userSetting)
app.use('/log', userLog)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
