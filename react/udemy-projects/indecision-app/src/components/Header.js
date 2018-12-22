import React from 'react';

const Header = (props) => (
    <div className='header-div'>
        <div className='container'>
            <h1 className='header__text'>{props.title ? props.title : 'No Current Title'}</h1>
            <h2 className='header__text'>{props.subtitle ? props.subtitle : 'No Current Subtitle'}</h2>
        </div>
    </div>
);         


export default Header;
