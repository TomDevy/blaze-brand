import React from "react";

import grad from "../../src/components/icons/Graduation Cap Black.png";
import image3 from "../../src/components/images/Image 3.png";
import image4 from "../../src/components/images/Image 4.png";
import image5 from "../../src/components/images/Image 5.png";
import migration from "../../src/components/icons/FlightW.png";
import career from "../../src/components/icons/Brief Case Black.png";

import "./services.css";

const Services = () => {
  return (
    <div className="srvs">
      <div className="svs">
        <h1>OUR SERVICES</h1>
      </div>
      <div className="grad">
        <img src={grad} alt="grad" />
        <h3>EDUCATION CONSULTING</h3>
      </div>
      <div className="str">
        <p>
          Blaze Brand Limited is a tech enabled Education and Migration
          consultant specializing in International students placement through an
          understanding of individual student’s goals and needs. We help to
          place our clients to their best advantage in an increasingly
          competitive international education environment including the UK, USA
          and Canada. Some of our services include:
        </p>
      </div>
      <div className="cc-gen">
        <div className="cc">
          <h3>CAREER COUNSELLING</h3>
          <div className="cc-text">
            <div className="cc-desc">
              <p>
                We support you in making a well informed decision and point you
                in the right direction to your journey abroad. Confidential
                counselling and consultation sessions are provided to students
                along with their parents/guardians for studying abroad and the
                destination countries opted for. One to one counselling for
                personal guidance to choose courses that fits your career and
                personal goals. No two people are the same, so why should their
                consultations be?
              </p>
            </div>
          </div>
        </div>
        <img src={image3} alt="cc" />
      </div>
      <div className="te-gen">
        <div className="cc">
          <h3>TEST PREPARATIONS</h3>
          <div className="cc-text">
            <div className="te-desc">
              <p>
                To pursue a course in most institutions abroad, the students
                should have a good score in the basic language tests. One of the
                important steps while planning to study abroad is to appear for
                certain competitive examinations based on your study destination
                and criteria in your preferred institution. Blaze Brand Limited
                along with their partners help facilitate coaching services for
                the following exams: IELTS, GMAT, TOEFL, SAT and GRE. With
                expert solution services from seasoned professionals, our
                clients are rightly positioned to ace these exams.
              </p>
            </div>
          </div>
        </div>
        <img src={image4} alt="test prep" />
      </div>
      <div className="cc-gen">
        <div className="cc">
          <h3>UNIVERSITY ADMISSION PROCESS</h3>
          <div className="cc-desc">
            <p>
              Discover the right course for the best career amongst different
              academic courses from world class universities around the world.
              Get unbiased information on all the courses and steer in the right
              direction. From the application process to follow ups to track
              movement, we give utmost attention to your study needs.
            </p>
          </div>
        </div>
      <img src={image5} alt="uap" />
      </div>
      <div className="uap-li">
        <ul>
          We help you find the best schools that suit your career goals and the
          best program selection.
        </ul>
        <ul>High School Admission</ul>
        <ul>Graduate Program Admission</ul>
        <ul>Visa Advisory</ul>
        <ul>Pre Departure Services</ul>
        <ul>
          Pre Departure briefings for all students and parents for commencing
          their studies abroad are essential and we ensure we do that.
        </ul>
        <ul>A rich orientation makes everything easier and smooth.</ul>
      </div>
      <div className="mtd">
        <img src={migration} alt="migration" />
        <p>MIGRATION AND TRAVEL ADVISORY</p>
      </div>
      <div className="cas">
        <img src={career} alt="career" />
        <p>CAREER ACCELERATION SERVICES</p>
      </div>
      <div className="cas-text">
        <p>
          Career Acceleration Services. Our team of seasoned professionals can
          help you make a good career choice or accelerate career development
          through services including: LinkedIn Optimization CV Creation/Revamp
          Letter of Intent/Statement of Purpose Writing.
        </p>
      </div>
    </div>
  );
};
export default Services;
