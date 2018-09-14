import React from 'react';
import Person from './Person/Person'

const persons = (props) => {
    if (props.showp)
        return '';
    else
        return props.persns.map((persn, index) => <Person
            clicker={() => props.handler(index)} key={index} name={persn.name} age={persn.age} />);
}

export default persons;