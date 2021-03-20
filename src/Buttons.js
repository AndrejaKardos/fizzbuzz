import React from 'react';
import './Buttons.css'

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.changeCount = this.changeCount.bind(this);
    }

    increaseCount() {
        let increasedNum = this.props.count + 1;
        if (increasedNum <= 100) {
            this.changeCount(increasedNum);
        }
    }

    decreaseCount() {
        let decreasedNum = this.props.count - 1;
        if (decreasedNum >= 0) {
            this.changeCount(decreasedNum);
        }
    }

    changeCount(countInfo) {
        this.props.newCount(countInfo);
    }

    render() {
        return (
            <div class="buttons">
                <button className="buttons__btn" id="buttons__increase" onClick={this.increaseCount}>+</button>
                <button className="buttons__btn" id="buttons__decrease" onClick={this.decreaseCount}>-</button>
            </div>
        );
    }
}

export default Buttons;