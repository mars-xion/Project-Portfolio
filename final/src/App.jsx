import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./sections/AboutSection";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import LearningOutcomeDetail from "./pages/LearningOutcomeDetail";

// import { LAData } from "./constants";

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-detail" element={<ProjectDetail />} />
            <Route
              path="/learning-outcome-detail"
              element={<LearningOutcomeDetail />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
