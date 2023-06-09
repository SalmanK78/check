import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">contact</Link>
            <Link to="/about">about</Link>
            <Link to="/login">login</Link>
            <Link to="/grandpa">Grandpa</Link>
        </div>
    );
};

export default Header;