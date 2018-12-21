import React from 'react';

const Option = (props) => (
    <p>
        {props.description}
        <button onClick={(e) => {props.deleteOption(props.description)}}>Delete Option</button>
    </p>
); 


export default Option;