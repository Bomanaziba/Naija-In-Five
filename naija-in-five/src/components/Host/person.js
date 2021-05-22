import React from 'react';


function Person(props) {

    return (
        <li>
            <img className="mu-rt-img" src={props.image} alt="image" />
            <h5 className="mu-rt-name">{props.name}</h5>
            <span className="mu-rt-title">{props.title}</span>
            <p>{props.describe}</p>
        </li>
    );

}

export default Person;