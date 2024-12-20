import React from 'react';
import { Route, BrowserRouter as Router, Routes,  } from "react-router-dom";
import Navbar from './components/Navbar';
import Zoom from './components/Zoom';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {
  return (
    <div className="App">
      
        <Zoom/>
        <Navbar/>
        <Router>
      <nav>
        <Link to="./components/pages/Home.js">Home</Link> | <Link to="./components/pages/About.js">About</Link> | <Link to="./components/pages/Contact.js">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;



