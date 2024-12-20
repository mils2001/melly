import React from 'react';
import { Route, BrowserRouter as Router, Routes,  } from "react-router-dom";
import Navbar from './components/Navbar';
import Zoom from './components/Zoom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Zoom />
        <Navbar />
      
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




