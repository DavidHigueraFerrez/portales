var express = require('express');
var router = express.Router();

const normalize = require('normalize-path');


const contextPathPDI = normalize(process.env.CONTEXTOPDI || '/portal-pdi/');
const contextPathPAS = normalize(process.env.CONTEXTOPAS || '/portal-pas/');
const contextPathESTD =normalize(process.env.CONTEXTOESTD || '/portal-estudiantes/');

router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our rest video api!' });  
});

console.log('entra index');
router.get(contextPathPDI, function(req, res, next) {
   console.log('probelma-1');
  res.render('index-PDI', { title: 'Express' });
});
router.get(contextPathPAS, function(req, res, next) {
  res.render('index-PAS', { title: 'Express' });
});
router.get(contextPathESTD, function(req, res, next) {
  res.render('index-ESTD', { title: 'Express' });
});

module.exports = router;

