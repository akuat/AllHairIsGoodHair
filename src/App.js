import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './index.css';
import About from "./About.js";
import Home from "./Home.js";
import React from "react";
import Contact from "./Contact.js";
function App() {
  return (
   <div >
      <BrowserRouter>
        <Link to="/"> Homepage </Link>
        <Link to="/AboutMe">About me page</Link>
        <Link to = "/ContactMe">Contact Page </Link>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/AboutMe" element={<About />} />
          <Route path = "/ContactMe" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
