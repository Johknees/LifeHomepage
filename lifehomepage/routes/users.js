var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Add a user listing. */
router.get('/add', function(req, res, next) {
  res.send('You gonna add a user!');
});

module.exports = router;
