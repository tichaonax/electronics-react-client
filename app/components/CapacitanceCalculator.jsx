import React from 'react';
var {connect} = require('react-redux');
export class CapacitanceCalculator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="text-center page-title">Capacitance</h1>
                <p className="text-center page-title">Coming soon!.</p>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        bandColor: state.bandColor
    }
})(CapacitanceCalculator);