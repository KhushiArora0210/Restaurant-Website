import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Menu from "./pages/Home/menu";
import About from "./pages/Home/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
  <Route path="menu" element={<Menu/>}/>
  <Route path="about" element={<About/>}/>

      
  
      </Routes>
    </Router>
  );
}

export default App;
