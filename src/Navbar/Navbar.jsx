import React from "react";
import { Link } from 'react-router-dom';

import logo from '../../src/components/images/main-logo.png'

import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="navbar">
                <img className="logo" src={ logo } alt="bbl-logo" />
            </div>
            <ul className="nav-links">
                <Link to="/home">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/team">Team</Link>
            </ul>
        </nav>
    );
};

export default Navbar;