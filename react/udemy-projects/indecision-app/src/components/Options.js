import Option from './Option';
import React from 'react';
const Options = (props) => (
    <div>
        {props.options.map((option) => <Option key={option} deleteOption={props.deleteOption} description={option}/>)}
    </div>
);


export default Options;
