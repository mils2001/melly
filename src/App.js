import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Zoom from './components/Zoom';

function App() {
  return (
    <div className="App">
      <Router>
        <Zoom/>
        <Navbar/>
        <Routes>
          {/* Define proper paths */}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;



