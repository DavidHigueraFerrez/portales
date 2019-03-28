var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const normalize = require('normalize-path');

//inicializacion sequelize
//let models = require('./models/menusLaterales');
let models = require('./public/models');
let Sequelize = require('sequelize');
var app = express();


const contextPruebas = process.env.PRUEBAS && true;

const contextPathPDI = normalize(process.env.CONTEXTOPDI || '/pdi/');
const contextPathPAS = normalize(process.env.CONTEXTOPAS || '/pas/');
const contextPathESTD =normalize(process.env.CONTEXTOESTD || '/estudiantes/');
const contextPathADMIN =normalize(process.env.CONTEXTOAMIN || '/admin/');
const contextPathCAUS =normalize(process.env.CONTEXTOCAUS || '/caus/');
const contextPathPARK =normalize(process.env.CONTEXTOPARK || '/parking/');
const contextPathDOC =normalize(process.env.CONTEXTODOC || '/documentacion/');

exports.contextPathPDI = contextPathPDI;
exports.contextPathPAS = contextPathPAS;
exports.contextPathESTD = contextPathESTD;
exports.contextPathADMIN = contextPathADMIN;
exports.contextPathCAUS = contextPathCAUS;
exports.contextPathPARK = contextPathPARK;
exports.contextPathDOC = contextPathDOC;
exports.contextPruebas = contextPruebas;

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
app.use(contextPathADMIN, express.static(path.join(__dirname, 'public')));
app.use(contextPathCAUS, express.static(path.join(__dirname, 'public')));
app.use(contextPathPARK, express.static(path.join(__dirname, 'public')));
app.use(contextPathDOC, express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

app.use('/users', usersRouter);

//contexto de aplicaciones para desplegadas en pruebas (pre-produccion)
if(contextPruebas===true){
  //Menu Lateral PDI
  app.get( contextPathPDI + "/static-button-gestiondoc", (req, res) => {
  res.sendFile('./public/menus/pruebas/button-static-gestiondoc-PDI.js', {root: __dirname}); 
  });

  app.get(contextPathPDI +"/static-button", (req, res) => {
    res.sendFile('./public/menus/pruebas/button-static-parking-PDI.js', {root: __dirname});
  });
  //Menu Lateral PAS
  app.get(contextPathPAS +"/static-button", (req, res) => {
    res.sendFile('./public/menus/pruebas/button-static-parking-PAS.js', {root: __dirname});
  });
  //Menus Laterales Estudiantes
  app.get(contextPathESTD+"/static-button", (req, res) => {
    res.sendFile('./public/menus/pruebas/button-static-parking-ESTD.js', {root: __dirname});
  });
  app.get(contextPathESTD+"/static-button-intercontac", (req, res) => {
    res.sendFile('./public/menus/pruebas/button-static-intercontacta-ESTD.js', {root: __dirname});
  });

//contexto para aplicaciones desplegadas en produccion
}else{
  //Menu Lateral PDI
  app.get( contextPathPDI + "/static-button-gestiondoc", (req, res) => {
    res.sendFile('./public/menus/produccion/button-static-gestiondoc-PDI.js', {root: __dirname}); 
    });
  
    app.get(contextPathPDI +"/static-button", (req, res) => {
      res.sendFile('./public/menus/produccion/button-static-parking-PDI.js', {root: __dirname});
    });
    //Menu Lateral PAS
    app.get(contextPathPAS +"/static-button", (req, res) => {
      res.sendFile('./public/menus/produccion/button-static-parking-PAS.js', {root: __dirname});
    });
    //Menus Laterales Estudiantes
    app.get(contextPathESTD+"/static-button", (req, res) => {
      res.sendFile('./public/menus/produccion/button-static-parking-ESTD.js', {root: __dirname});
    });
    app.get(contextPathESTD+"/static-button-intercontac", (req, res) => {
      res.sendFile('./public/menus/produccion/button-static-intercontacta-ESTD.js', {root: __dirname});
    });
}
  

//styles para pas -estudiantes
app.get(contextPathPAS +"/stylesheets/style.css", function(req, res, next) {
  res.sendFile('/public/stylesheets/style.css', {root: __dirname});
});

app.get(contextPathESTD +"/stylesheets/style.css", function(req, res, next) {
  res.sendFile('/public/stylesheets/style.css', {root: __dirname});
});

//fotos para logo etsit
app.get(contextPathPAS+ "/images/logo-etsit.gif", function(req, res, next) {
 res.sendFile('/public/iamges/logo-etsit.gif', {root: __dirname});
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

//fotos para foto edificio A 
app.get(contextPathPAS +"/images/portada-escuela.jpg", function(req, res, next) {
  res.sendFile('/public/images/portada-escuela.jpg', {root: __dirname});
});

app.get(contextPathESTD +"/images/portada-escuela.jpg", function(req, res, next) {
  res.sendFile('/public/images/portada-escuela.jpg', {root: __dirname});
});
app.get(contextPathCAUS +"/images/logo-caus.jpg", function(req, res, next) {
  res.sendFile('/public/images/logo-caus.jpg', {root: __dirname});
});

//acceso a recursos para parking
app.get(contextPathESTD +contextPathPARK +"/images/logo-parking.png", function(req, res, next) {
  res.sendFile('/public/images/logo-parking.png', {root: __dirname});
});
app.get(contextPathESTD +contextPathPARK +"/pdf/instrucciones-parking.pdf", function(req, res, next) {
  res.sendFile('/public/pdf/instrucciones-parking.pdf', {root: __dirname});
});
app.get(contextPathPAS +contextPathPARK +"/images/logo-parking.png", function(req, res, next) {
  res.sendFile('/public/images/logo-parking.png', {root: __dirname});
});
app.get(contextPathPAS +contextPathPARK +"/pdf/instrucciones-parking.pdf", function(req, res, next) {
  res.sendFile('/public/pdf/instrucciones-parking.pdf', {root: __dirname});
});
app.get(contextPathPDI +contextPathPARK +"/images/logo-parking.png", function(req, res, next) {
  res.sendFile('/public/images/logo-parking.png', {root: __dirname});
});
app.get(contextPathPDI +contextPathPARK +"/pdf/instrucciones-parking.pdf", function(req, res, next) {
  res.sendFile('/public/pdf/instrucciones-parking.pdf', {root: __dirname});
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

