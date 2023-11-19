import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages:
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

// Styles:
import "./styles/app.css";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={About} />
        <Route path="/skills" element={Skills} />
        <Route path="/projects" element={Projects} />
        <Route path="/contact" element={Contact} />
      </Routes>
    </Router>
  );
};

export default App;
