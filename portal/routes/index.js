var express = require('express');
var router = express.Router();

var portal =process.env.PORTAL;;

if( portal === 'PDI'){
    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('index-PDI', { title: 'Express' });
    });
}
else if(portal === 'PAS'){
    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('index-PAS', { title: 'Express' });
    });
}
else if(portal ==='Estudiantes'){
    /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index-ESTD', { title: 'Express' });
  });
}


module.exports = router;
