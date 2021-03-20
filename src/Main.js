import React from 'react';
import Buttons from './Buttons.js';
import Output from './Output.js';
import './Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div class="main">
                <div class="main__wrapper">
                    <Buttons count={this.state.count} />
                    <Output count={this.state.count} />
                </div>
            </div>
        );
    }
}

export default Main;