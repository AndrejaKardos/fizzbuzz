import React from 'react';
import './Output.css'

export function interpretCount(count) {
    if (count % 15 === 0 && count !== 0) {
        return "FizzBuzz";
    } else if (count % 3 === 0 && count !== 0) {
        return "Fizz";
    } else if (count % 5 === 0 && count !== 0) {
        return "Buzz";
    } else {
        return count;
    }
}

class Output extends React.Component { 
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="output">{interpretCount(this.props.count)}</div>
        );
    }
}

export default Output;