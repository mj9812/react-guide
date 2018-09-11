import React from 'react';

const useroutput = (props) => {
    const stylt = {
        padding: '8px',
        color: 'navy',
        fontWeight: 'bold'
    };
    return (
    <div className="Person">
        <p style={stylt}>User Name : {props.username}</p>
        <p>This is First Paragraph. It tells you about nothing.</p>
        <p>This is Second Paragraph. It tells you about double nothing.</p>
    </div>)
};

export default useroutput;