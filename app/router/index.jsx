import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import OhmCalculator from 'OhmCalculator';
import CapacitanceCalculator from 'CapacitanceCalculator';
import About from 'About';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="capacitance" component={CapacitanceCalculator}/>
            <Route path="about" component={About}/>
            <IndexRoute component={OhmCalculator}/>
        </Route>
    </Router>
);