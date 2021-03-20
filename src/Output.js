import React from 'react';
import './Output.css'

class Output extends React.Component { 
    constructor(props) {
        super(props);
        this.interpretCount = this.interpretCount.bind(this);
    }

    interpretCount(count) {
        if (count % 15 === 0 && count != 0) {
            return "FIZZBUZZ";
        } else if (count % 3 === 0 && count != 0) {
            return "FIZZ";
        } else if (count % 5 === 0 && count != 0) {
            return "BUZZ";
        } else {
            return count;
        }
    }

    render() {
        return (
            <div className="output">{this.interpretCount(this.props.count)}</div>
        );
    }
}

export default Output;