var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : '192.168.0.106',
  user     : 'nacho',
  password : 'salsa2',
  database : 'lifehomepage'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Add a user listing. */
router.get('/add', function(req, res, next) {
  res.send('You gonna add a user!');
});

module.exports = router;
