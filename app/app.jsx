var React = require('react');
var Counter = require('./components/counter');

React.render(<Counter count={0}/>, document.getElementById('mount-point'));
