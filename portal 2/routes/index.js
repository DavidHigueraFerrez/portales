var express = require('express');
var router = express.Router();

const normalize = require('normalize-path');

var menusLateralesController = require('../public/controllers/menu-controller');


const contextPruebas = process.env.PRUEBAS && true;

const contextPathPDI = normalize(process.env.CONTEXTOPDI || '/pdi/');
const contextPathPAS = normalize(process.env.CONTEXTOPAS || '/pas/');
const contextPathESTD =normalize(process.env.CONTEXTOESTD || '/estudiantes/');
const contextPathADMIN =normalize(process.env.CONTEXTOADMIN || '/admin/');
const contextPathCAUS =normalize(process.env.CONTEXTOCAUS || '/caus/');
const contextPathPARK =normalize(process.env.CONTEXTOPARK || '/parking/');
const contextPathDOC =normalize(process.env.CONTEXTODOC || '/documentacion/');
const contextPathRESESPA =normalize(process.env.CONTEXTORESESPA || '/reservaespacios/');


router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our rest video api!' });  
});

console.log('entra index');
router.get(contextPathPDI, function(req, res, next) {
   console.log('problema-1');
  res.render('index-PDI', { 
    title: 'Express',
    contextPruebas : contextPruebas
  });
});
router.get(contextPathPAS, function(req, res, next) {
  res.render('index-PAS', {
     title: 'Express',
     contextPruebas : contextPruebas 
    });
});
router.get(contextPathESTD, function(req, res, next) {
  res.render('index-ESTD', {
     title: 'Express',
     contextPruebas : contextPruebas 
    });
});
router.get(contextPathADMIN, function(req, res, next) {
  res.render('index-Admin', {
     title: 'Express',
     contextPruebas : contextPruebas 
    });
},menusLateralesController.getMenus);

router.get(contextPathPDI+contextPathCAUS, function(req, res, next) {
  res.render('index-CAUs-PDI', {
     title: 'Express',
     contextPruebas : contextPruebas 
    });
});

router.get(contextPathPAS+contextPathCAUS, function(req, res, next) {
  res.render('index-CAUs-PAS', {
     title: 'Express',
     contextPruebas : contextPruebas 
    });
});

router.get(contextPathESTD+contextPathCAUS, function(req, res, next) {
  res.render('index-CAUs-ESTD', {
     title: 'Express',
     contextPruebas : contextPruebas 
    });
});
router.get(contextPathPDI+contextPathPARK, function(req, res, next) {
  res.render('index-PARK-PDI', {
     title: 'Express',
     contextPruebas : contextPruebas 
    });
});

router.get(contextPathPAS+contextPathPARK, function(req, res, next) {
  res.render('index-PARK-PAS', {
     title: 'Express',
     contextPruebas : contextPruebas 
    });
});

router.get(contextPathESTD+contextPathPARK, function(req, res, next) {
  res.render('index-PARK-ESTD', {
     title: 'Express',
     contextPruebas : contextPruebas 
    });
});

//context path documentDOC
router.get(contextPathPDI+contextPathDOC, function(req, res, next) {
  res.render('index-DOC-PDI', {
     title: 'Express',
     contextPruebas : contextPruebas 
    });
});

router.get(contextPathPAS+contextPathDOC, function(req, res, next) {
  res.render('index-DOC-PAS', {
     title: 'Express',
     contextPruebas : contextPruebas 
    });
});

router.get(contextPathESTD+contextPathDOC, function(req, res, next) {
  res.render('index-DOC-ESTD', {
     title: 'Express',
     contextPruebas : contextPruebas 
    });
});

//context PAth reserva espacios
router.get(contextPathPDI+contextPathRESESPA, function(req, res, next) {
  res.render('index-RESESP-PDI', {
     title: 'Express',
     contextPruebas : contextPruebas 
    });
});
router.get(contextPathPAS+contextPathRESESPA, function(req, res, next) {
  res.render('index-RESESP-PAS', {
     title: 'Express',
     contextPruebas : contextPruebas 
    });
});
router.get(contextPathESTD+contextPathRESESPA, function(req, res, next) {
  res.render('index-DOC-ESTD', {
     title: 'Express',
     contextPruebas : contextPruebas 
    });
});
module.exports = router;


