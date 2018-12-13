var express = require('express');
var router = express.Router();

const normalize = require('normalize-path');

const contextPruebas = process.env.PRUEBAS && true;

const contextPathPDI = normalize(process.env.CONTEXTOPDI || '/pdi/');
const contextPathPAS = normalize(process.env.CONTEXTOPAS || '/pas/');
const contextPathESTD =normalize(process.env.CONTEXTOESTD || '/estudiantes/');

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

module.exports = router;

