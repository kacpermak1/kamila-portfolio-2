import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About/AboutMain";
import Contact from "./components/Contact/ContactMain";
import Header from "./components/Header/HeaderMain";
import Projects from "./components/Projects/ProjectsMain.js";
import NotFound from "./components/NotFound/NotFoundMain";
const App = () => {
  return (
    <Router basename="kamila-portfolio-2">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects/*" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;