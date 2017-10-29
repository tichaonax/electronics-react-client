import React from 'react';
import {connect} from 'react-redux';
import Nav from 'Nav';

export class Main extends React.Component {
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

export default connect()(Main)
