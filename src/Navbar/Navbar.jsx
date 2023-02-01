import React from "react";
import { Link } from 'react-router-dom';

import logo from '../../src/components/images/main-logo.png'

import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="navbar">
                <img className="logo" src={logo} alt="bbl-logo" />
                <ul className="nav-links">
                <Link to="/about">ABOUT US</Link>
                <Link to="/services">SERVICES</Link>
                <Link to="/contact">CONTACT</Link>
                <Link to="/team">TEAM</Link>
            </ul>
            </div>
            
        </nav>
    );
};

export default Navbar;