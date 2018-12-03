var express = require('express');
var router = express.Router();


const local =true;

const contextPathPDI = local === true ? '/portal-pdi/': process.env.CONTEXTOPDI
const contextPathPAS = local === true ? '/portal-pas/': process.env.CONTEXTOPAS
const contextPathESTD = local === true ? '/portal-estudiantes/': process.env.CONTEXTOESTD



router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our rest video api!' });  
});

console.log('entra index');
router.get(contextPathPDI, function(req, res, next) {
  res.render('index-PDI', { title: 'Express' });
});
router.get(contextPathPAS, function(req, res, next) {
  res.render('index-PAS', { title: 'Express' });
});
router.get(contextPathESTD, function(req, res, next) {
  res.render('index-ESTD', { title: 'Express' });
});

module.exports = router;
