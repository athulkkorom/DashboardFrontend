import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Home';
import Endyear from './Endyear'
import Sector from './Componenets/Sector';
import Topic from './Componenets/Topic';
import Region from './Componenets/Region';
import Pestle from './Componenets/Pestle';
import Source from './Componenets/Source';
import Country from './Componenets/Country';
function App() {   
  return (
    <div className="app">
      <div className='topbar'>

      </div>
      <div className='main'>
        {/* <Dashbar /> */}
    <div>
    <div>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/endyear" element={<Endyear />} />
        <Route path="/sector" element={<Sector />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/region" element={<Region />} />
        <Route path="/pestle" element={<Pestle />} />
        <Route path="/source" element={<Source />} />
        <Route path="/country" element={<Country />} />
       </Routes>
       </BrowserRouter>   
        </div> 
    </div>
    </div>
          <div className="main-content">
      </div>
    </div>
  );
}

export default App;
