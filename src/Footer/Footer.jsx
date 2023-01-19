import React from 'react';

import logo from "../../src/components/images/main-logo.png"
import mail from "../../src/components/icons/Mail.png"
import addr from "../../src/components/icons/Location.png"
import phone from "../../src/components/icons/Phone.png"
import ig from "../../src/components/icons/Group 20.png"
import fb from "../../src/components/icons/Frame-1.png"
import tw from "../../src/components/icons/Frame-2.png"
import linkedIn from "../../src/components/icons/Frame.png"

import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='all'>
                <img src={logo} alt="bbl-logo" />
                <p>Blaze Brand Limited is an online-based education & migration advisory 
with expert solutions services either through work or study pathway.</p>
            <div className='boys'>
                <h4>Terms of Use</h4>
                <h4>Privacy Policy</h4>
                <h4>Bookings</h4>
                <h4>Career</h4>
            </div>
        </div>
            <div className='adr'>
                <div className='tip'>
                <img src={addr} alt="a" />
                <p>23, Oluwagbebe Street, Akowonjo, Lagos</p>
                </div>
                <div className='tip'>
                <img src={mail} alt="m" />
                <p>info@blazebrand.com</p>
                </div>
                <div className='tip'>
                <img src={phone} alt="p" />
                <p>+234 812 158 0845</p>
                </div>
                <div className='sim'>
                <img src={ig} alt="p" />
                <img src={fb} alt="p" />
                <img src={tw} alt="p" />
                <img src={linkedIn} alt="p" />
                </div>
            </div>
            <div className='arr'>
                <p>© Blaze Brand Limited. {new Date().getFullYear()}. All Rights Reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;