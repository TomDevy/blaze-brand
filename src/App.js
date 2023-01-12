import React from 'react';
// import Navbar from './Navbar/Navbar';
import Home from './Home/Home'
// import About from './About/about'
// import Services from './Services/services'
// import Contact from './Contact/contact'
// import Team from './Team/team'

import './App.css';
// import { BrowserRouter as  Router, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Home />
      {/* <Router>
        <div>
          <Navbar /> 
          <Route path="/about" src={About} />
          <Route path="/services" src={Services} />
          <Route path="/contact"  src={Contact}/>
          <Route path="/team"  src={Team}/>
        </div>
      </Router> */}
      
    </>
  );
}

export default App;