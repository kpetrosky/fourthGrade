import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


import VerticalNavBar from './components/VerticalNavBar';
import Header from './components/Header';

// Import your other components for different routes
import Math from './components/pages/Math';
import Projects from './components/pages/Projects'
import Newsletters from './components/pages/Homework';
import ELA from './components/pages/ELA';
import Home from './components/pages/Home';
import Homework from './components/pages/Homework';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <VerticalNavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Math" element={<Math />} />
          <Route path="/Newsletters" element={<Newsletters />} />
          <Route path="/ELA" element={<ELA />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/homework" element={<Homework />} />
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
