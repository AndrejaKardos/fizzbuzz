import React from 'react';
import Buttons from './Buttons.js';
import Output from './Output.js';
import './Main.css';

function Main() {
    return (
        <div class="main">
            <div class="main__wrapper">
                <Buttons />
                <Output />
            </div>
        </div>
    );
}

export default Main;