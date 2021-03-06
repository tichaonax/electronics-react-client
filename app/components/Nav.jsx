var React = require('react');
var {Link, IndexLink} = require('react-router');
var {connect} = require('react-redux');

var actions = require('./../actions/index');

import {setBandColor} from 'app/common/Utils';

export class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.dispatch = props.dispatch;
        this.onSearch = this.onSearch.bind(this);
        this.state = {
            selectedColor : "black",
            selectedColorTitle : "Black"
        }
    }

    componentDidMount() {
       var {bandColor}=this.props;
            setBandColor("bandAColor", bandColor.bandAColor.value);
            setBandColor("bandBColor", bandColor.bandBColor.value);
            setBandColor("bandCColor", bandColor.bandCColor.value);
            setBandColor("bandDColor", bandColor.bandDColor.value);
    }

    onBandAColorChange(){
        this.refs.bandAColor.style.backgroundColor = this.refs.bandAColor.value;
        this.dispatch(actions.changeBandAColor(this.refs.bandAColor.value));
    }
    onBandBColorChange(){
        this.refs.bandBColor.style.backgroundColor = this.refs.bandBColor.value;
        this.dispatch(actions.changeBandBColor(this.refs.bandBColor.value));
    }
    onBandCColorChange(){
        this.refs.bandCColor.style.backgroundColor = this.refs.bandCColor.value;
        this.dispatch(actions.changeBandCColor(this.refs.bandCColor.value));
    }
    onBandDColorChange(){
        this.refs.bandDColor.style.backgroundColor=this.refs.bandDColor.value;
        this.dispatch(actions.changeBandDColor(this.refs.bandDColor.value));
    }

    renderColorBands(){
        return(
            <div>
                <option value="black" style={{backgroundColor:'black'}}>Black</option>
                <option value="brown" style={{backgroundColor:'brown'}}>Brown</option>
                <option value="red" style={{backgroundColor:'red'}}>Red</option>
                <option value="orange" style={{backgroundColor:'orange'}}>Orange</option>
                <option value="yellow" style={{backgroundColor:'yellow'}}>Yellow</option>
                <option value="green" style={{backgroundColor:'green'}}>Green</option>
                <option value="blue" style={{backgroundColor:'blue'}}>Blue</option>
                <option value="violet" style={{backgroundColor:'violet'}}>Violet</option>
                <option value="gray" style={{backgroundColor:'gray'}}>Gray</option>
                <option value="white" style={{backgroundColor:'white'}}>White</option>
                <option value="none" style={{backgroundColor:'none'}}>None</option>
                <option value="pink" style={{backgroundColor:'pink'}}>Pink</option>
                <option value="silver" style={{backgroundColor:'silver'}}>Silver</option>
                <option value="gold" style={{backgroundColor:'gold'}}>Gold</option>
            </div>
        )
    }

    onSearch(e) {
        e.preventDefault();
        var bandAColor = this.refs.bandAColor.value;
        var bandBColor = this.refs.bandBColor.value;
        var bandCColor = this.refs.bandCColor.value;
        var bandDColor = this.refs.bandDColor.value;

        window.location.hash = `#/?bandAColor=${bandAColor}&bandBColor=${bandBColor}&bandCColor=${bandCColor}&bandDColor=${bandDColor}`;
        }

    render() {

        var {bandColor}=this.props;
        console.log("bandColor",bandColor);

        return (
            <div className="top-bar">

                <div className="top-bar-left">

                    <ul className="menu">
                        <li className="menu-text">Calculator App</li>
                        <li>
                            <IndexLink to="/">Ohms</IndexLink>
                        </li>
                        <li>
                            <Link to="/capacitance" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Capacitance</Link>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <select name="bandAColor" ref="bandAColor" onChange={()=>{
                                    this.onBandAColorChange();
                                }}>
                                    {this.renderColorBands()}
                                </select>
                            </li>
                            <li>
                                <select  name="bandBColor"  ref="bandBColor" onChange={()=>{
                                    this.onBandBColorChange();
                                }}>
                                    {this.renderColorBands()}
                                </select>
                            </li>
                            <li>
                                <select  name="bandCColor"  ref="bandCColor" onChange={()=>{
                                    this.onBandCColorChange();
                                }}>
                                    {this.renderColorBands()}
                                </select>
                            </li>
                            <li>
                                <select  name="bandDColor"  ref="bandDColor" onChange={()=>{
                                    this.onBandDColorChange();
                                }}>
                                    {this.renderColorBands()}
                                </select>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Value"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}
export default connect(
    (state) => {
        return {
            bandColor: state.bandColor,
        }
    }
)(Nav);