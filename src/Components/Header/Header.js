import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-div">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
            <NavLink to="/findUser" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>See a User</NavLink>
            {/* <Link to="/">Home</Link> */}
        </div>
    );
};

export default Header;