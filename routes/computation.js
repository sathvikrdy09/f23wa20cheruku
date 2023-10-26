var express = require('express');
var router = express.Router();
var x= Math.floor(Math.random());
var y=Math.floor(Math.random());
/* GET home page. */
router.get('/', function(req, res, next) {
var result1=Math.round(x);
var result2=Math.fround(y);
  res.send(`Math.round() applied to[${x}]=${result1}<br>Math.fround() applied to[${y}]=${result2}`);
});

module.exports = router;