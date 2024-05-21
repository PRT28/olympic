import React from 'react';
import './App.css';
import Home from './containers/Home/Home';
import Athelets from './containers/Athletes/Athletes';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/athletes" element={<Athelets />} />
          <Route path="*" element={<div className='coming-soon'>
              Coming Soon!!!
            </div>} />
      </Routes>
    </div>
    
  );
}

export default App;
