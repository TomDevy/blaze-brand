import React from "react";

import About from '../../src/components/images/About Us.png'
import vision from '../../src/components/icons/Vision.png'
import mission from '../../src/components/icons/Mission.png'
import Education from '../../src/components/icons/GradCap.png'
import Career from '../../src/components/icons/Brief Case.png'
import Travel from '../../src/components/icons/FlightW.png'

import './home.css'

const Home = () => {
    return (
        <div className="abu">
            <div className="ab">
                <img src= { About } alt="about-us"></img>
            </div>
            <div className="mv">
                <div className="vis">
                    <img src={vision} alt="vision"></img>
                </div>
                <div className="text">
                    <h3>VISION</h3>
                <p>To become a sterling and reliable Migration Advisory consult helping Africans connect to Global opportunities either through work and study pathways.</p>
                </div>
                <div className="vis">
                    <img src={mission} alt="mission"></img>
                </div> 
                <div className="text">
                    <h3>MISSION</h3>
                <p>We aim to help 200,000 Africans access global opportunities in education and tech through the study and work pathways to compete on a global scale.</p>
                </div>
            </div>
             <div className="serv">
                <h1>OUR SERVICES</h1>
                 <div className="serv-icons">
                    <div>
                        <img src={Education} alt="education" />
                        <p>EDUCATION CONSULTING</p>
                    </div>
                    <div>
                        <img src={Travel} alt="travels" />
                        <p>MIGRATION AND TRAVEL ADVISORY</p>
                    </div>
                    <div>
                        <img src={Career} alt="career" />
                        <p>CAREER ACCELERATION SERVICES</p>
                </div>
                </div>
            </div>
            <div className="booking">
                <h1>BOOK AN APPOINTMENT</h1>
                <button>Book Now</button>
            </div>
            <div className="reviews">
                <div className="client">
                    <h1>CLIENT REVIEWS</h1>
                </div>
                <div className="content">
                    {/* review goes here */}
                </div>
            </div>
            <div className="mail-list">
                <h1>SUBSCRIBE TO OUR MAILING LIST</h1>
                <div className="input">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                    <input type="text" placeholder="Email address"/>
                    <input type="text" placeholder="Phone number" />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Home;