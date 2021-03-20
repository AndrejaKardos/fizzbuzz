import React from 'react';
import './Buttons.css'

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
    }

    increaseCount() {
        console.log(this.props.count + 1);
    }

    decreaseCount() {
        console.log(this.props.count - 1);
    }

    render() {
        return (
            <div class="buttons">
                <button class="buttons__btn" onClick={this.increaseCount}>+</button>
                <button class="buttons__btn" onClick={this.decreaseCount}>-</button>
            </div>
        );
    }
}

export default Buttons;