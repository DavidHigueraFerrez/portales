var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const contextPathPDI = process.env.CONTEXTOPDI
const contextPathPAS = process.env.CONTEXTOPAS
const contextPathESTD = process.env.CONTEXTOESTD


exports.contextPathPDI = contextPathPDI;
exports.contextPathPAS = contextPathPAS;
exports.contextPathESTD = contextPathESTD;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(contextPathPDI, express.static(path.join(__dirname, 'public')));
app.use(contextPathPAS, express.static(path.join(__dirname, 'public')));
app.use(contextPathESTD, express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);

app.use('/users', usersRouter);

//Menu Lateral PDI
app.get( contextPathPDI + "/static-button-gestiondoc", (req, res) => {
  res.sendFile('./button-static-gestiondoc-PDI.js', {root: __dirname});
});
app.get(contextPathPDI +"/static-button", (req, res) => {
  res.sendFile('./button-static-parking-PDI.js', {root: __dirname});
});
//Menu Lateral PAS
app.get(contextPathPAS +"/static-button", (req, res) => {
  res.sendFile('./button-static-parking-PAS.js', {root: __dirname});
});
//Menus Laterales Estudiantes
app.get(contextPathESTD+"/static-button", (req, res) => {
  res.sendFile('./button-static-parking-ESTD.js', {root: __dirname});
});
app.get(contextPathESTD+"/static-button-intercontac", (req, res) => {
  res.sendFile('./button-static-intercontacta-ESTD.js', {root: __dirname});
});

//styles para pas -estudiantes
app.get(contextPathPAS +"/stylesheets/style.css", function(req, res, next) {
  res.sendFile('./public/stylesheets/style.css', {root: __dirname});
});

app.get(contextPathESTD +"/stylesheets/style.css", function(req, res, next) {
  res.sendFile('/public/stylesheets/style.css', {root: __dirname});
});

//fotos para logo etsit
app.get(contextPathPAS+ "/images/logo-etsit.gif", function(req, res, next) {
  res.sendFile('/public/images/logo-etsit.gif', {root: __dirname});
});
app.get(contextPathESTD+ "/images/logo-etsit.gif", function(req, res, next) {
  res.sendFile('/public/images/logo-etsit.gif', {root: __dirname});
});

//fotos para logo upm
app.get(contextPathPAS +"/images/logo-upm.gif", function(req, res, next) {
  res.sendFile('/public/images/logo-upm.gif', {root: __dirname});
});

app.get(contextPathESTD +"/images/logo-upm.gif", function(req, res, next) {
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