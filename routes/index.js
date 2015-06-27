var express = require('express');
var router = express.Router();
var JSX = require('node-jsx').install({extension: '.jsx'});
var React = require('react');

/* GET home page. */
router.get('/', function(req, res, next) {

  var counterProps = {count: 70};
  var Counter = React.createFactory(require('../app/components/counter'));
  var counterComponent = React.renderToString(Counter(counterProps));

  res.render('index', { 
    title: 'Express',
    counter: counterComponent,
    counterProps: JSON.stringify(counterProps)
  });
});

module.exports = router;
