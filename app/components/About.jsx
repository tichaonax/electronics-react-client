var React = require('react');

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="text-center page-title">About</h1>
                <p>A simple Electronics Component Value Calculator application using react.</p>
                <ol>
                    <li>
                        <a href="https://facebook.github.io/react">React</a> - React JavaScript framework that I used.
                    </li>
                    <li>
                        <a href="https://github.com/tichaonax/electronics-react-client">electronics-react-client</a> - This codebase is stored in GitHub.
                    </li>
                    <li>
                        <a href="https://github.com/tichaonax/ElectrocincsCalcServer">ElectrocincsCalcServer</a> - The API codebase in C# is stored in GitHub.
                    </li>
                </ol>
            </div>
        );
    }
}

module.exports = About;