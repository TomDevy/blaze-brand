import React from "react";

import image1 from "../../src/components/images/Image 1.png"
import image2 from "../../src/components/images/Image 2.png"
import mission from "../../src/components/icons/Mission.png"
import vision from "../../src/components/icons/Vision.png"

import integrity from "../../src/components/icons/Integrity.png"
import reliable from "../../src/components/icons/Reliability.png"
import humanity from "../../src/components/icons/Humanity.png"
import excel from "../../src/components/icons/Excellenece.png"

import "./about.css"

const About = () => {
    return (
        <div className="abt">
            <div className="text">
                 <h3>ABOUT US</h3>
            <p>Blaze Brand Limited is a tech enabled Education and Migration 
advisory firm specialized in Education and Migration advisory 
services to enable our clients smoothly achieve their 
relocation and study goals through expert solution services.</p> 

<p>Our priority at Blaze Brand Limited is adequately ensuring our 
clients' success. Whether they're looking to explore their study 
abroad opportunities or relocate abroad permanently, we 
ensure that the entire process is smooth and well executed. 
Our team comprises experienced professionals, enabling you 
                to get the most professional results within stipulated timelines.</p>
            </div>
            <div className="a">
                <img src={ image1} alt="great" />
            </div>
            <div className="texts">
                 <p>As a growing brand, we are opportune to partner with top 
educational institutions both locally and internationally as we 
edge closer to achieving our vision. We are committed to the 
betterment and empowerment of individuals accessing global 
opportunities through education, technology and migration 
                    using our expert solution services.</p>
                <div className="texts-b">
                    <p>How we work</p>
                </div>
                <div className="texts-list">
                    <li>We organize awareness campaigns</li>
                    <li>We offer guidance & career counselling</li>
                    <li>We offer training programs</li>
                    <li>We share valuable information</li>
                </div>
                <div className="b">
                    <img src={image2} alt="cool" />
                </div>
            </div>
            <div className="vis-mis">
                <div className="vis">
                <img src={vision} alt="vision" />
                <div className="vis-t">
                    <div className="hb">
                        <h1>VISION</h1>
                    </div>
                    <p>To become the number one sterling and 
reliable Migration Advisory consult 
helping Africans access global 
opportunities either through study or 
work pathways.</p>
            </div>
            </div>
             <div className="mis">
                <img src={mission} alt="mission" />
                <div className="mis-t">
                    <div className="hb">
                        <h1>MISSION</h1>
                    </div>
                    <p>To help 200,000 Afrricans and more 
access global opportunities through the 
study and work pathways to compete 
and maintain relevance on a global 
scale.</p>
            </div>
            </div>
            </div>
            <div className="values">
                <h1>OUR CORE VALUES</h1>
                <div className="excel">
                    <img src={excel} alt="excellence" />
                    <p>EXCELLENCE</p>
                </div>
                <div className="integrity">
                    <img src={integrity} alt="integrity" />
                    <p>INTEGRITY</p>
                </div>
                <div className="reliable">
                    <img src={reliable} alt="reliability" />
                    <p>RELIABILITY</p>
                </div>
                <div className="humanity">
                    <img src={humanity} alt="humanity" />
                    <p>HUMANITY</p>
                </div>
            </div>
            <div className="mail-l">
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
export default About;