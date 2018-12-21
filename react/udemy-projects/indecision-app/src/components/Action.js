import React from 'react';

const Action = (props) => (
    <div>
        <button disabled={!props.hasOptions} onClick={props.makeChoice}>What should I do?</button>
        <button onClick={props.resetOptions}>Reset all Options</button>
    </div>
);


export default Action;