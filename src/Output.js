import React from 'react';
import './Output.css'

class Output extends React.Component { 
    render() {
        return (
            <div class="output">{this.props.count}</div>
        );
    }
}

export default Output;