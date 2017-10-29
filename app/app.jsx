import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import router from 'app/router/';

var actions = require('./actions/index');
var store = require('configureStore').configure();

//set band colors codes to their defaults
store.dispatch(actions.changeBandAColor('black'));
store.dispatch(actions.changeBandBColor('black'));
store.dispatch(actions.changeBandCColor('black'));
store.dispatch(actions.changeBandDColor('gold'));

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('app')
);