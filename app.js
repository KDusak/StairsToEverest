var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var userApiRouter = require('./routes/user');
var everestApiRouter = require('./routes/everest');
var recordApiRouter = require('./routes/record');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'ng-dist/stairs-to-everest')));
app.use('/', express.static(path.join(__dirname, 'ng-dist/stairs-to-everest')));
app.use('/api/user', userApiRouter);
app.use('/api/everest', everestApiRouter);
app.use('/api/record', recordApiRouter);

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
  res.send(err.status);
});

module.exports = app;
