var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//variable que indica que portal esta desplegado
// 'PDI' --> PDI
// 'PAS' --> PAS
// 'Estudiantes' --> Estudiantes
const portal = process.env.PORTAL;
exports.portal = portal;

const contextPath = (() => {
  if (portal === 'PDI'){
    return '/portal-pdi/';
  } 
  if (portal === 'PAS'){
    return '/portal-pas/';
  }
  if (portal === 'Estudiantes'){
    return '/portal-estudiantes/';
  }
})();
console.log(portal);
console.log(contextPath);
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


app.use(contextPath, indexRouter);
app.use('/users', usersRouter);

//portal PDI
if(portal === 'PDI' ){
    app.get(contextPath + "static-button-gestiondoc", (req, res) => {
      res.sendFile('./button-static-gestiondoc-PDI.js', {root: __dirname});
    });
    app.get(contextPath + "static-button-parking", (req, res) => {
      res.sendFile('./button-static-parking-PDI.js', {root: __dirname});
    });
    app.get(contextPath +"static-button-html", (req, res) => {
      res.sendFile('./button-static.html', {root: __dirname});
    });

  }
  //portal PAS
  else if(portal === 'PAS' ){
    app.get(contextPath + "static-button-parking", (req, res) => {
      res.sendFile('./button-static-parking-PAS.js', {root: __dirname});
    });
  }
  //portal Estudiante
  else if(portal === 'Estudiantes'){
    app.get(contextPath + "static-button-inter", (req, res) => {
      res.sendFile('./button-static-inter-ESTD.js', {root: __dirname});
    });
    app.get(contextPath + "static-button-intercontacta", (req, res) => {
      res.sendFile('./button-static-intercontacta-ESTD.js', {root: __dirname});
    });
    app.get(contextPath + "static-button-parking", (req, res) => {
      res.sendFile('./button-static-parking-ESTD.js', {root: __dirname});
    });
  } 
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
