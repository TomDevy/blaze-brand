import React from "react";

import image1 from "../../src/components/images/Image 1.png"
import image2 from "../../src/components/images/Image 2.png"
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
                to get the most professional 0results within stipulated timelines.</p>
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
            <div className="mis">
                <img src="" alt="" />
            </div>
        </div>
    );
};
export default About;