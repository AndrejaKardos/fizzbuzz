import React from 'react';
import './Buttons.css'

export function increaseCount() {
    let increasedNum = this.props.count + 1;
    if (increasedNum <= 100) {
        this.changeCount(increasedNum);
    } else if (increasedNum > 100) {
        this.message();
    }
}

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.changeCount = this.changeCount.bind(this);
        this.message = this.message.bind(this);
    }

    decreaseCount() {
        let decreasedNum = this.props.count - 1;
        if (decreasedNum >= 0) {
            this.changeCount(decreasedNum);
        } else if (decreasedNum < 0) {
            this.message();
        }
    }

    changeCount(countInfo) {
        this.props.newCount(countInfo);
    }

    message() {
        this.props.message();
    }

    render() {
        return (
            <div className="buttons">
                <button className="buttons__btn" id="buttons__increase" onClick={increaseCount}>+</button>
                <button className="buttons__btn" id="buttons__decrease" onClick={this.decreaseCount}>-</button>
            </div>
        );
    }
}

export default Buttons;