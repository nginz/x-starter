var React = require('react');
var Counter = require('./components/counter');

var counterProps = JSON.parse(document.getElementById('counterProps').innerHTML);
React.render(<Counter count={counterProps.count}/>, document.getElementById('mount-point'));
