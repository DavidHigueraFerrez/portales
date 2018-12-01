var express = require('express');
var router = express.Router();

var app = express();


router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our rest video api!' });  
});

console.log('entra index');
router.get('/pdi', function(req, res, next) {
  res.render('index-PDI', { title: 'Express' });
});
router.get('/pas', function(req, res, next) {
  res.render('index-PAS', { title: 'Express' });
});
router.get('/estudiantes', function(req, res, next) {
  res.render('index-ESTD', { title: 'Express' });
});



module.exports = router;
