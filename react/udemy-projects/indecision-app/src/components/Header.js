import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.title ? props.title : 'No Current Title'}</h1>
        <h2>{props.subtitle ? props.subtitle : 'No Current Subtitle'}</h2>
    </div>
);         


export default Header;
