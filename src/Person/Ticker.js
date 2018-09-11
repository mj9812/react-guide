import React from 'react';
import './Ticker.css'

const ticker = (props) => {
    return (
        <div className="Ticker">
            <h3>It is {props.timeval}.</h3>
        </div>)
};

export default ticker;