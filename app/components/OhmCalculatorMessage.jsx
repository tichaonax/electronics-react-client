var React = require('react');

class OhmCalculatorMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        var {value, tolerance}=this.props;

        if (tolerance!="-"){
            tolerance = ` tolerance ${tolerance}`;
        }else{
            tolerance='';
        }
        return (
            <div>
                <h3 className="text-center"> The resistance is {value.toLocaleString()} &#8486;  {tolerance} </h3>
            </div>
        );
    }
}

module.exports = OhmCalculatorMessage;