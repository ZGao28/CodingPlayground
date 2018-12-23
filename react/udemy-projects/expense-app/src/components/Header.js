import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink className="NavLink" activeClassName="isActive" to="/create">Create Expense</NavLink>
        <NavLink className="NavLink" activeClassName="isActive" to="/help">Help Page</NavLink>
        <NavLink className="NavLink" activeClassName="isActive" exact={true}  to="/">Home</NavLink>
    </header>
);

export default Header;