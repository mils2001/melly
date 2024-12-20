import React from 'react';
import { Route, BrowserRouter as Router, Routes,  } from "react-router-dom";
import Navbar from './components/Navbar';
import Zoom from './components/Zoom';
import Home from './components/pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Zoom/>
        <Navbar/>
        <Routes>
          <Route path='./components/pages/Home.js' element={<Home/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;



