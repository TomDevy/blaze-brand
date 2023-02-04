import React from "react";

import image1 from "../../src/components/images/Image 1.png";
import image2 from "../../src/components/images/Image 2.png";
import mission from "../../src/components/icons/Mission.png";
import vision from "../../src/components/icons/Vision.png";

import integrity from "../../src/components/icons/Integrity.png";
import innovation from "../../src/components/icons/innovation.png";
import humanity from "../../src/components/icons/Humanity.png";
import excel from "../../src/components/icons/Excellenece.png";

import "./about.css";

const About = () => {
  return (
    <div className="abt">
      <div className="text a">
        <div className="">
          <h3>ABOUT US</h3>
          <p>
            Blaze Brand Limited is a tech enabled Education and Migration
            advisory firm specialized in Education and Migration advisory
            services to enable our clients smoothly achieve their relocation and
            study goals through expert solution services.
          </p>

          <p>
            Our priority at Blaze Brand Limited is adequately ensuring our
            clients' success. Whether they're looking to explore their study
            abroad opportunities or relocate abroad permanently, we ensure that
            the entire process is smooth and well executed. Our team comprises
            experienced professionals, enabling you to get the most professional
            results within stipulated timelines.
          </p>
        </div>
        <img src={image1} alt="great" />
      </div>
      <div className="texts">
        <div className="text b">
          <div className="">
            <p>
              As a growth-focused company, we are opportuned to partner with top
              educational institutions both locally and internationally as we
              edge closer to achieving our vision. We are committed to the
              betterment and empowerment of individuals accessing global
              opportunities through education, technology and migration using
              our expert solution services.
            </p>
            <p className="top">
              <b>How we work</b>
            </p>
            <div className="texts-list">
              <li>Personalized program and school selection assistance.</li>
              <li>Comprehensive visa application support.</li>
              <li>Regular check-ins and updates throughout the process.</li>
              <li>Settlement Awareness Campaigns to your desired destination.</li>
            </div>
          </div>
          <img src={image2} alt="cool" />
        </div>
      </div>
      <div className="mv">
        <div className="mvh">
          <img src={vision} alt="" />
          <div className="vis-ht">
            <div className="bvis">
              <h1>VISION</h1>
            </div>
            <p>
              To become a sterling and reliable Migration Advisory consult
              helping Africans connect to Global opportunities either through
              work and study pathways.
            </p>
          </div>
        </div>
        <div className="mvh">
          <img src={mission} alt="mission" />
          <div className="vis-ht">
            <div className="bvis">
              <h1>MISSION</h1>
            </div>
            <p>
              We aim to help 200,000 Africans access global opportunities in
              education and tech through the study and work pathways to compete
              on a global scale.
            </p>
          </div>
        </div>
      </div>

      <div className="values">
        <h1>OUR CORE VALUES</h1>
        <div className="core">
          <div className="excel">
            <img src={excel} alt="excellence" />
            <p>EXCELLENCE</p>
          </div>
          <div className="excel">
            <img src={integrity} alt="integrity" />
            <p>INTEGRITY</p>
          </div>
          <div className="excel">
            <img src={innovation} alt="innovation" />
            <p>INNOVATION</p>
          </div>
          <div className="excel">
            <img src={humanity} alt="humanity" />
            <p>HUMANITY</p>
          </div>
        </div>
      </div>
      <div className="mail-list">
        <h1>SUBSCRIBE TO OUR MAILING LIST</h1>
        <div className="frm-d">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Phone number" />
        </div>
        <div className="mail-but">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};
export default About;
