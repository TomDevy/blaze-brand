import React, { useState, useRef} from "react";

import emailjs from "@emailjs/browser";
import image1 from "../../src/components/images/Image 1.png";
import image2 from "../../src/components/images/Image 2.png";
import mission from "../../src/components/icons/Mission.png";
import vision from "../../src/components/icons/Vision.png";

import integrity from "../../src/components/icons/Integrity.png";
import innovation from "../../src/components/icons/innovation.png";
import humanity from "../../src/components/icons/Humanity.png";
import excel from "../../src/components/icons/Excellenece.png";

import "./about.css";

const Result = () => {
  return (
    <p>"Your message has been sent Successfully. Kindly Check your mail!"</p>
  );
};


const About = () => {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [isSubmitted, setIsSubmitted] = useState(false);

   const form = useRef();

   const serviceId = "service_loyi959";
   const templateId = "template_v0vv5n5";
   const publicKey = "zFef1F-ROsvwMHOX1";
   const [result, showResult] = useState(false);
   const sendEmail = (e) => {
     e.preventDefault();

     if (!firstName || !lastName || !email || !phone) {
       return alert("Please fill in your details!");
     }

     emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
       (result) => {
         console.log("Success");
         setFirstName("");
         setLastName("");
         setPhone("");
         setEmail("");
         showResult(true);
         setIsSubmitted(true);
         setTimeout(() => setIsSubmitted(false), 5000);
       },
       (error) => {
         console.log("failed");
       }
     );
   };

   //hide result

   setTimeout(() => {
     showResult(false);
   }, 5000);


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
              As a growth-focused company, we are opportune to partner with top
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
              <li>
                Settlement Awareness Campaigns to your desired destination.
              </li>
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
        <h1>GET A FREE STATEMENT OF PURPOSE (Template)</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="frm-d">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              name="firstName"
              placeholder="First name"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              name="lastName"
              placeholder="Last name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              placeholder="Email address"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              name="phone"
              placeholder="Phone number"
            />
          </div>
          <div className="mail-but">
            <button
              type="submit"
              style={{
                backgroundColor: isSubmitted ? "green" : "#B50000",
                marginTop: 20,
              }}
            >
              {isSubmitted ? "Submitted" : "Submit"}
            </button>
            <div className="form-result">{result ? <Result /> : null}</div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default About;
