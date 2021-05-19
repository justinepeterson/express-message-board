var express = require('express');
var router = express.Router();
var messages = require('../data/data')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Twiter', messages: messages });
});

module.exports = router;
