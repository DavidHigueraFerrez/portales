var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our rest video api!' });  
});

console.log('entra index');
router.get('/portal-pdi', function(req, res, next) {
  res.render('index-PDI', { title: 'Express' });
});
router.get('/portal-pas', function(req, res, next) {
  res.render('index-PAS', { title: 'Express' });
});
router.get('/portal-estudiantes', function(req, res, next) {
  res.render('index-ESTD', { title: 'Express' });
});


module.exports = router;
