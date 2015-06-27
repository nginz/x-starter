var express = require('express');
var router = express.Router();
var JSX = require('node-jsx').install({extension: '.jsx'});
var React = require('react');

/* GET home page. */
router.get('/', function(req, res, next) {

  var counterProps = {count: 70};
  var Counter = React.createElement(require('../app/components/counter'), counterProps);
  var counterComponent = React.renderToString(Counter);

  res.render('index', { 
    title: 'Express',
    counter: counterComponent,
    counterProps: JSON.stringify(counterProps)
  });
});

module.exports = router;
