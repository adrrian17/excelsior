var express   = require('express');
var router    = express.Router();
var React     = require('react');
var Excelsior = require('../components/app');

router.get('/', function(req, res) {
  var app = React.renderToString(<Excelsior/>);

  res.render('index', { app: app });
});

module.exports = router;
