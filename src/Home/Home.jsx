import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

import rev from "../../src/components/images/review2.png";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import About from "../../src/components/images/About Us.png";
import vision from "../../src/components/icons/Vision.png";
import mission from "../../src/components/icons/Mission.png";
import Education from "../../src/components/icons/GradCap.png";
import Career from "../../src/components/icons/Brief Case.png";
import Travel from "../../src/components/icons/FlightW.png";

import "./home.css";

const Result = () => {
  return (
    <p>"Your message has been sent Successfully. Check your mail!"</p>
  );
};

const Home = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useRef();

  const serviceId = "service_loyi959";
  const templateId = "template_v0vv5n5";
  const publicKey = "zFef1F-ROsvwMHOX1";
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone) {
      return alert("Please fill in your details!")
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log("Success");
        setFirstName('');
        setLastName('');
        setPhone('');
        setEmail('');
        showResult(true);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000)
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
    <div className="abu">
      <div className="ab">
        <img src={About} alt="about-us"></img>
      </div>
      <div className="miss">
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
                education and tech through the study and work pathways to
                compete on a global scale.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="serv">
        <h1>OUR SERVICES</h1>
        <div className="serv-icons">
          <div className="eds">
            <img src={Education} alt="education" />
            <p>EDUCATION CONSULTING</p>
          </div>
          <div className="eds">
            <img src={Travel} alt="travels" />
            <p>MIGRATION AND TRAVEL ADVISORY</p>
          </div>
          <div className="eds">
            <img src={Career} alt="career" />
            <p>CAREER ACCELERATION SERVICES</p>
          </div>
        </div>
      </div>
      <div className="booking">
        <h1>BOOK AN APPOINTMENT</h1>
        <Link to="/contact">
          <button>Book Now</button>
        </Link>
      </div>
      <div className="reviews">
        <div className="client">
          <h1>CLIENT REVIEWS</h1>
        </div>
        <div className="rev-slider">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="swiper"
          >
            <SwiperSlide>
              {" "}
              <img src="/assets/Afolabi.jpg" alt="review" />
              <p>
                Your service was smooth and I enjoyed the level of
                professionalism. Mr David Ashipa Sunday was very clear and he
                gave very useful tips and advise. Soft loan, Yes- I have aleady
                recommended your service to some of my friends and colleagues.
              </p>
              <h3>Afolabi</h3>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="/assets/Kennedy (1).jpg" alt="review" />
              <p>
                I had a 1-hour consultation session with BBL and it answered all
                the questions I had and didn't even knew I had. I could really
                sense that they were trying to help me and not just make a sale
                and that meant a lot. It was really informative. The session
                calmed my fears and left me feeling capable of taking this huge
                step. I would definitely recommend.
              </p>
              <h3>Kennedy</h3>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={rev} alt="review" />
              <p>
                I got top quality service from the company through David Asipa.
                A good fellow. Helped with my family student loan(POF) but
                didn't just stop at that. He/they support all through the
                process until our visa came out. Happy to have used BBL's
                service and will highly recommend to anyone that needs such.
              </p>
              <h3>Chetanna</h3>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="/assets/Chimezie.jpg" alt="review" />
              <p>
                Was introduced to the Blaze Brand by a colleague who had
                transacted with them and was happy to give good recommendations.
                I spoke to my contact, Sunday David Asipa, despite never meeting
                each other in person till date, I must confess I was intrigued
                by how insightful, knowledgeable and professional he was. To cut
                it short, we are a family of 5 and we have settled quite well in
                the UK thanks to the help of that good young man I have never
                met.
              </p>
              <h3>Chimezie</h3>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mail-list">
        <h1>GET A FREE STATEMENT OF PURPOSE (Template)</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="frm-d">
            <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" name="firstName" placeholder="First name" />
            <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" name="lastName" placeholder="Last name" />
            <input value={email} onChange={e => setEmail(e.target.value)} type="text" name="email" placeholder="Email address" />
            <input value={phone} onChange={e => setPhone(e.target.value)} type="number" name="phone" placeholder="Phone number" />
          </div>
          <div className="mail-but">
            <button
              type="submit"
              style={{
                backgroundColor: isSubmitted ? "green" : "#B50000", marginTop: 20
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

export default Home;
