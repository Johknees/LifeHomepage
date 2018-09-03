var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

/* Temporary redirect to category page.*/
router.get('/', function(req, res, next) {
  res.redirect('/categories');
});

module.exports = router;
