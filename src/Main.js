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
        this.newCount = this.newCount.bind(this);
    }

    newCount(countInfo) {
        this.setState({
            count: countInfo
        })
    }

    render() {
        return (
            <div className="main">
                <div className="main__wrapper">
                    <Buttons 
                        count={this.state.count} 
                        newCount={this.newCount}
                    />
                    <Output count={this.state.count} />
                </div>
            </div>
        );
    }
}

export default Main;