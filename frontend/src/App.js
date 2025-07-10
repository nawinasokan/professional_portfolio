import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { portfolioData } from "./mockData";
import Hero from "./components/Hero";
import CareerSummary from "./components/CareerSummary";
import Experience from "./components/Experience";
import Qualifications from "./components/Qualifications";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar/>
      <Hero data={portfolioData.personal} />
      <CareerSummary summary={portfolioData.careerSummary} />
      <Experience experiences={portfolioData.experience} />
      <Qualifications qualifications={portfolioData.qualifications} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Resume personalData={portfolioData.personal} />
      <Contact personalData={portfolioData.personal} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;