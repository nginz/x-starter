var React   = require('react');
var Counter = require('./components/counter');
var page    = require('page');

// Routes
// the "notfound" implements a catch-all
// with page('*', notfound). Here we have
// no catch-all, so page.js will redirect
// to the location of paths which do not
// match any of the following routes
//
// page.base('/basic');

page('/', index);
page('/about', about);
page('/contact', contact);
page('/contact/:contactName', contact);
page();

function index() {
  alert('index');
}

function about() {
  alert('about');
}

function contact(ctx) {
  alert('contact');
}

React.render(<Counter count={0}/>, document.getElementById('mount-point'));
