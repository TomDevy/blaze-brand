import React from "react";
// import { Link } from 'react-router-dom';

import logo from '../../src/components/images/main-logo.png'

import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="nav">
            <img src={logo} className="bbl-logo" alt="bbl" />
            <ul className="nav-but">
                <li>
                    ABOUT US
                </li>
                <li>
                    SERVICES
                </li>
                <li>
                    CONTACT
                </li>
                <li>
                    TEAM
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;