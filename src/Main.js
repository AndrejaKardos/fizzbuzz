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
        this.displayMessage = this.displayMessage.bind(this);
    }

    newCount(countInfo) {
        this.setState({
            count: countInfo
        })
    }

    displayMessage() {
        document.getElementById("main__message").classList.remove("hide-message");
        setTimeout(function () {
            document.getElementById("main__message").classList.add("hide-message");
        }, 3000);

    }

    render() {
        return (
            <div className="main">
                <div class="main__header">FizzBuzz</div>
                <div className="main__wrapper">
                    
                    <Buttons 
                        count={this.state.count} 
                        newCount={this.newCount}
                        message={this.displayMessage}
                    />
                    <Output count={this.state.count} />
                </div>
                <div id="main__message" className="hide-message">Output can't be less than 0 or more than 100!</div>
            </div>
        );
    }
}

export default Main;