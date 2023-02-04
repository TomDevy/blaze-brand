import React, { useState } from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

import ig from "../../src/components/icons/Group 20.png";
import fb from "../../src/components/icons/Frame-1.png";
import tw from "../../src/components/icons/Frame-2.png";
import ln from "../../src/components/icons/Frame.png";
import wh from "../../src/components/icons/Whatsapp Icon.png";

import "./contact.css";

const Contact = () => {
  const animatedComponents = makeAnimated();
  const [buttonColor, setButtonColor] = useState("#B50000");

  const handleClick = () => {
    setButtonColor('green');
  }

  return (
    <div className="contact">
      <div className="con-us">
        <h1>CONTACT US</h1>
        <p>We're always happy to hear from you</p>
      </div>
      <div className="addr">
        <div className="add">
          <h3>CONTACT INFORMATION</h3>
          <p>
            info@blazebrand.com, helpdesk@blazebrandlimited.com +234 705 327
            6426, +234 816 305 9266
          </p>
        </div>
        <div className="add">
          <h3>ADDRESS</h3>
          <p>75B Ogunnusi Road, Grammar School B/Stop, Ojodu, Berger, Lagos.</p>
        </div>
      </div>
      <div className="soc-m">
        <a href="https://www.instagram.com/invites/contact/?i=esabljrtzhew&utm_content=pg1ufhi">
          <img src={ig} alt="instagram" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100089098602386">
          <img src={fb} alt="facebook" />
        </a>
        <a href="https://twitter.com/blazebrandltd1?t=EMKPOsOdx7uVpammVKl5_w&s=09">
          <img src={tw} alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/company/blaze-brand-limited/">
          <img src={ln} alt="linkedin" />
        </a>
        <a href="https://wa.me/message/T6NMQMJDVUBSH1">
          <img src={wh} alt="whatsapp" />
        </a>
      </div>
      <div className="bookings">
        <h2>BOOK AN APPOINTMENT</h2>
        <p>Provide your details below & we'll get back to you.</p>
        <div className="frm-d">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Phone number" />
          <Select
            placeholder="Your Preffered study location"
            closeMenuOnSelect={true}
            components={animatedComponents}
            options={[
              { value: "United Kingdom", label: "United Kingdom" },
              { value: "Canada", label: "Canada" },
              { value: "United States", label: "United States" },
            ]}
          />
          <Select
            placeholder="When do you plan study?"
            closeMenuOnSelect={true}
            components={animatedComponents}
            options={[
              {
                value: "January",
                label: `January ${new Date().getFullYear()}`,
              },
              { value: "May", label: `May ${new Date().getFullYear()}` },
              {
                value: "September",
                label: `January ${new Date().getFullYear()}`,
              },
            ]}
          />
          <Select
            className="custom-class"
            placeholder="Preffered study level"
            closeMenuOnSelect={true}
            components={animatedComponents}
            options={[
              { value: "Doctorate", label: "Doctorate" },
              { value: "Postgraduate", label: "Postgraduate" },
              { value: "Undergraduate", label: "Undergraduate" },
              { value: "University", label: "University" },
              { value: "Preparation", label: "Preparation" },
              { value: "Vocational", label: "Vocational" },
              { value: "English Language", label: "English Language" },
            ]}
          />
          <label htmlFor="">
            <input className="checkb" type="checkbox" />
            Subscribe to our Newsletter
          </label>
          <button
            style={{
              backgroundColor: buttonColor === "green" ? "green" : "#B50000",
            }}
            onClick={handleClick}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
