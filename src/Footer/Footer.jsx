import React from "react";

import logo from "../../src/components/images/main-logo.png";
import mail from "../../src/components/icons/Mail.png";
import addr from "../../src/components/icons/Location.png";
import phone from "../../src/components/icons/Phone.png";
import ig from "../../src/components/icons/Group 20.png";
import fb from "../../src/components/icons/Frame-1.png";
import tw from "../../src/components/icons/Frame-2.png";
import linkedIn from "../../src/components/icons/Frame.png";

import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="all">
        <img src={logo} alt="bbl-logo" />
        <p>
          Blaze Brand Limited is an education & migration advisory firm with expert
          solutions services: helping people migrate through the work or study routes.
        </p>
        <div className="boys">
          <h4> <Link to='/terms'>Terms of Use</Link></h4>
          <h4> <Link to='/policy'>Privacy Policy</Link></h4>
          <h4>Bookings</h4>
          <h4>Career</h4>
        </div>
      </div>
      <div className="adr">
        <div className="tip">
          <img src={addr} alt="a" />
          <p>75B Ogunnusi Road, Grammar School B/Stop, Ojodu, Berger, Lagos.</p>
        </div>
        <div className="tip">
          <img src={mail} alt="m" />
          <p>info@blazebrandlimited.com</p>
        </div>
        <div className="tip">
          <a href="https://wa.me/message/T6NMQMJDVUBSH1">
            <img src={phone} alt="p" />
          </a>
          <p>+234 816 305 9266</p>
          <p>+234 705 327 6426</p>
        </div>
        <div className="sim">
          <a href="https://www.instagram.com/blazebrandlimited1/">
            <img src={ig} alt="p" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100089098602386">
            <img src={fb} alt="p" />
          </a>
          <a href="https://twitter.com/blazebrandltd1?t=EMKPOsOdx7uVpammVKl5_w&s=09">
            <img src={tw} alt="p" />
          </a>
          <a href="https://www.linkedin.com/company/blaze-brand-limited/">
            <img src={linkedIn} alt="p" />
          </a>
        </div>
      </div>
      <div className="arr">
        <p>
          © Blaze Brand Limited. {new Date().getFullYear()}. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
