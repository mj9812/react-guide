import React from 'react';
import './Ticker.css'

const ticker = (props) => {
    return (
        <div className="Ticker">
            <h3 id='TimerTicker'>{'It is ' + new Date().toLocaleTimeString()}</h3>
        </div>);
};

export default ticker;