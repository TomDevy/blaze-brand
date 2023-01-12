import React from "react";

import About from '../../src/components/images/About Us.png'
import vision from '../../src/components/icons/Vision.png'
import mission from '../../src/components/icons/Mission.png'
import Education from '../../src/components/icons/GradCap.png'
import Career from '../../src/components/icons/Brief Case.png'
import Travel from '../../src/components/icons/FlightW.png'

import './home.css'

const Navbar = () => {
    return (
        <div className="abu">
            <div className="ab">
                <img src= { About } alt="about-us"></img>
            </div>
            <div className="mv">
                <img src={vision} alt="vision"></img>
                <div className="text">
                    <h3>VISION</h3>
                <p>To become a sterling and reliable Migration Advisory consult helping Africans connect to Global opportunities either through work and study pathways.</p>
                </div>
                <img src={mission} alt="mission"></img> 
                <div className="text">
                    <h3>MISSION</h3>
                <p>We aim to help 200,000 Africans access global opportunities in education and tech through the study and work pathways to compete on a global scale.</p>
                </div>
            </div>
             <div className="serv">
                <h1>OUR SERVICES</h1>
                 <div className="serv-icons">
                <img src={ Education} alt="education"/>
                <img src={ Travel} alt="travels" />
                <img src={ Career} alt="career" />
                </div>
                <div className="serv-text">
                    <p>Education Consulting</p>
                    <p>Migration and Travel </p>
                    <p>Education Consultin</p>
                </div>
            </div>
           
        </div>
    );
};

export default Navbar;