import React from 'react';
var {connect} = require('react-redux');
import OhmCalculatorMessage from 'OhmCalculatorMessage';
import ElectronicsValueCalculator from 'ElectronicsValueCalculator';
import ErrorModal from 'ErrorModal';
import {setBandColor} from 'app/common/Utils';

export class OhmCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: undefined,
            tolerance:undefined,
            isLoading: false,
            errorMessage: undefined
        }

        this.handleGetValue = this.handleGetValue.bind(this);
    }

    loadData(props){
        var bandAColor = props.location.query.bandAColor;
        var bandBColor = props.location.query.bandBColor;
        var bandCColor = props.location.query.bandCColor;
        var bandDColor = props.location.query.bandDColor;

        if (bandAColor && bandAColor.length > 0 &&
            bandBColor && bandBColor.length > 0 &&
            bandCColor && bandCColor.length > 0 &&
            bandDColor && bandDColor.length > 0) {
            this.handleGetValue(bandAColor, bandBColor, bandCColor, bandDColor);
        }
        else {
            console.log("No Parameters passed")
        }
    }

    componentDidMount() {
        this.loadData(this.props);
    }

    componentWillReceiveProps(newProps){
        var bandColor = newProps.bandColor;
        this.handleGetValue(
            bandColor.bandAColor.value,
            bandColor.bandBColor.value,
            bandColor.bandCColor.value,
            bandColor.bandDColor.value);
    }

    handleGetValue(bandAColor, bandBColor, bandCColor, bandDColor) {
        setBandColor("bandAColor", bandAColor);
        setBandColor("bandBColor", bandBColor);
        setBandColor("bandCColor", bandCColor);
        setBandColor("bandDColor", bandDColor);

        var that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined,
            value: undefined,
            tolerance:undefined
        })

        ElectronicsValueCalculator.getOhmValue(bandAColor, bandBColor, bandCColor, bandDColor)
            .then(function (ValueData) {
                console.log("ValueData", ValueData);
            that.setState({
                value: ValueData.value,
                tolerance: ValueData.tolerance,
                isLoading: false
            });
        }, function (e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        })
    }

    render() {

        var {isLoading, value, tolerance, bandColor, errorMessage} = this.state;

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (<ErrorModal title="Error!!!" errorMessage={errorMessage}/>);
            }
        }

        function rendeMessage() {
            if (isLoading) {
                return (<div><h3 className="text-center">Fetching Resistance ...</h3></div>);
            } else if (value && tolerance) {
                return (<OhmCalculatorMessage value={value} tolerance={tolerance}/>);
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Resistance</h1>
                {rendeMessage()}
                {renderError()}
            </div>
        );
    }
}

export default connect((state) => {
    return {
        bandColor: state.bandColor
    }
})(OhmCalculator);