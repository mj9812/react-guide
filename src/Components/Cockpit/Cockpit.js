import React from 'react';

const cockpit = (props) => {
    const styler = {
        height: '40px',
        width: '140px',
        margin: '0 10px',
        fontWeight: 'bold'
    };

    return (
        <div>
            <h1>Hi, I'm a React New App and {props.testVal}</h1>
            <button style={styler} onClick={props.showPersonsHandler}>
                {props.showPersons ? 'Show Persons' : 'Hide Persons'}
            </button>
            <button style={styler} onClick={props.handleClock}>
                {props.startClock ? 'Start Clock' : 'Stop Clock'}
            </button>
        </div>
    );
};

export default cockpit;