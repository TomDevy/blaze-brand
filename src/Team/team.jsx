import React from "react";

import Team1 from "../../src/components/images/TeamM1.jpg";
import Team2 from "../../src/components/images/TeamM2.jpg";
import Team3 from "../../src/components/images/TeamM3.jpg";
import Team4 from "../../src/components/images/TeamM4.jpg";
import Team5 from "../../src/components/images/TeamM5.jpg";

import "./team.css";

const Team = () => {
  return (
    <div className="team">
      <div className="t-head">
        <h1>OUR TEAM</h1>
      </div>
      <div class="grid">
        <div className="text-block">
          <img src={Team1} alt="" />
          <div className="tex">
            <h3>Sunday D. Asipa</h3>
            <p>Co-Founder/Growth Manager</p>
          </div>
        </div>
        <div className="text-block">
          <img src={Team2} alt="" />
          <div className="tex-p">
          <h3>Lydia Owulo</h3>
          <p>Head, People Operations/Relationship Manager</p>
          </div>
        </div>
        <div className="text-block">
          <img src={Team3} alt="" />
          <div className="tex-v">
          <h3>Victor-Olaoye</h3>
          <p>Brand Strategist/Visual Designer</p>
          </div>
        </div>
        <div className="text-block">
          <img src={Team4} alt="" />
          <div className="tex">
          <h3>Ayomide D. Asipa</h3>
          <p>Product Designer</p>
          </div>
        </div>
        <div className="text-block">
          <img src={Team5} alt="" />
          <div className="tex-p">
          <h3>Kola Olugbodi</h3>
          <p>Member Board of Advisors.CEO,Background Check Int.</p>
          </div>
        </div>
        {/* <img src={Team2} alt="" />
                    <img src={Team3} alt="" />
                    <img src={Team4} alt="" />
                    <img src={Team5} alt="" /> */}
      </div>

      {/* <div className='t-image1'>
                <img src={Team1} alt="CEO" />
                <h3>Sunday D. Asipa</h3>
                <p>Co-Founder/Growth Manager</p>
            </div>
            <div className='t-image2'>
                <img src={Team2} alt="Head, People Operation" />
                <h3>Lydia Owulo</h3>
                <p>Head, People Operations/Relationship Manager</p>
            </div>
            <div className='t-image3'>
                <img src={Team3} alt="Brand Strategist" />
                <h3>Victor Olaoye</h3>
                <p>Brand Strategist/Visual Designer</p>
            </div>
            <div className='t-image4'>
                <h3>Ayomide  D. Asipa</h3>
                <p>Product Designer</p>
                <img src={Team4} alt="Product Designer" />
            </div>
            <div className='t-image5'>
                <img src={Team5} alt="Member Board of Advisors" />
                <h3>Kola Olugbodi</h3>
                <p>Member Board of Advisors. CEO, Background Check International</p>
            </div> */}
    </div>
  );
};

export default Team;
