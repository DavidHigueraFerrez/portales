var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const contextPath ='/pdi/'
exports.contextPath = contextPath;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(contextPath, express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/users', usersRouter);

//Menu Lateral PDI
app.get("/pdi/static-button-gestiondoc", (req, res) => {
  res.sendFile('./button-static-gestiondoc-PDI.js', {root: __dirname});
});
app.get("/pdi/static-button", (req, res) => {
  res.sendFile('./button-static-parking-PDI.js', {root: __dirname});
});
//Menu Lateral PAS
app.get("/pas/static-button", (req, res) => {
  res.sendFile('./button-static-parking-PAS.js', {root: __dirname});
});
//Menus Laterales Estudiantes
app.get("/estudiantes/static-button", (req, res) => {
  res.sendFile('./button-static-parking-ESTD.js', {root: __dirname});
});
app.get("/estudiantes/static-button-intercontac", (req, res) => {
  res.sendFile('./button-static-intercontacta-ESTD.js', {root: __dirname});
});

//styles para pas -estudiantes
app.get("/pas/stylesheets/style.css", function(req, res, next) {
  res.sendFile('./public/stylesheets/style.css', {root: __dirname});
});

app.get("/estudiantes/stylesheets/style.css", function(req, res, next) {
  res.sendFile('/public/stylesheets/style.css', {root: __dirname});
});

//fotos para logo etsit
app.get("/pas/images/logo-etsit.gif", function(req, res, next) {
  res.sendFile('/public/images/logo-etsit.gif', {root: __dirname});
});
app.get("/estudiantes/images/logo-etsit.gif", function(req, res, next) {
  res.sendFile('/public/images/logo-etsit.gif', {root: __dirname});
});

//fotos para logo upm
app.get("/pas/images/logo-upm.gif", function(req, res, next) {
  res.sendFile('/public/images/logo-upm.gif', {root: __dirname});
});

app.get("/estudiantes/images/logo-upm.gif", function(req, res, next) {
  res.sendFile('/public/images/logo-upm.gif', {root: __dirname});
});

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