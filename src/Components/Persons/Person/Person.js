import React from 'react';
import Radium from 'radium'
import './Person.css'

const person = (props) => {
    const radiumCheck = {
        ':hover': {backgroundColor: '#F5DEB3'}
      }
    return(
        <div className="Person" style={radiumCheck}>
            <p onClick={props.clicker}>I'm {props.name} and I'm {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    );
};

export default Radium(person);