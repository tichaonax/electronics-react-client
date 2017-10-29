var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var OhmCalculator = require('OhmCalculator');
var CapacitanceCalculator = require('CapacitanceCalculator');
var About = require('About');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="capacitance" component={CapacitanceCalculator}/>
            <Route path="about" component={About}/>
            <IndexRoute component={OhmCalculator}/>
        </Route>
    </Router>,
    document.getElementById('app')
);