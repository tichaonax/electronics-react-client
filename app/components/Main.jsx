var React = require('react');
var Nav = require('Nav');

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <Nav/>
                    <div className="row">
                        <div className="columns medium-6 large-4 small-centered">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Main;