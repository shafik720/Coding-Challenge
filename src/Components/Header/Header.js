import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-div">
            <Link to="/">Home</Link>
            <Link to="/findUser">See User</Link>
            {/* <Link to="/">Home</Link> */}
        </div>
    );
};

export default Header;