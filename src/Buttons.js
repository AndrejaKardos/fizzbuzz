import React from 'react';
import './Buttons.css'

class Buttons extends React.Component {
    render() {
        return (
            <div class="buttons">
                <button class="buttons__btn">+</button>
                <button class="buttons__btn">-</button>
            </div>
        );
    }
}

export default Buttons;