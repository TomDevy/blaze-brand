import React from "react";
import { Link } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";

import logo from "../../src/components/images/main-logo.png";

import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="navbar">
        <Link to="./">
              <img className="logo" src={logo} alt="bbl-logo" />
        </Link>
              <ul className="nav-links">
          <Link to="/about">ABOUT US</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/team">TEAM</Link>
          <Link to="/blog">BLOG POST</Link>
        </ul>
        <div className="mobile-nav">
          {isOpen ? (
            <AiOutlineCloseCircle onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <RiMenuFill onClick={() => setIsOpen(!isOpen)} />
          )}
        </div>
      </div>
      <div>
        {isOpen ? (
          <ul className="mobile-links">
            <Link onClick={() => setIsOpen(false)} to="/about">
              ABOUT US
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/services">
              SERVICES
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/contact">
              CONTACT
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/team">
              TEAM
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/blog">
              BLOG POST
            </Link>
          </ul>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
