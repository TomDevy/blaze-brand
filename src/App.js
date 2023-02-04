import React from 'react';
// import Navbar from './Navbar/Navbar';
import Home from './Home/Home'
import About from './About/About'
import Services from './Services/Services'
import Team from './Team/Team'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Policy from './Policy/policy'
import Blog from './blog/Blog'


import { Route, Routes } from 'react-router-dom'

import './App.css';
import Navbar from './Navbar/Navbar';
import Terms from './terms/Terms';


function App() {
  return (
    <>
      <Navbar />
      
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services /> } />
        <Route path="/contact" element={<Contact />}  />
        <Route path="/team" element={<Team />}  />
        <Route path="/policy" element={<Policy />}  />
        <Route path="/terms" element={<Terms />}  />
        <Route path="/blog" element={<Blog />}  />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;