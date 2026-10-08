import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import CareerSummary from "./components/CareerSummary";
import Experience from "./components/Experience";
import Qualifications from "./components/Qualifications";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { calculateExperienceYears } from "./utils/experience";
import Acheivements from "./components/Acheivements";
import { AuthProvider } from "./contexts/AuthContext";
import { PortfolioDataProvider, usePortfolioData } from "./contexts/PortfolioDataContext";
import AdminBar from "./components/admin/AdminBar";
import { Toaster } from "./components/ui/toaster";

const Portfolio = () => {
  const { data, loading, error } = usePortfolioData();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-gray-400">
        Loading portfolio...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-red-400">
        Failed to load portfolio content. Please refresh the page.
      </div>
    );
  }

  const experienceYears = calculateExperienceYears(data.personal.join_date);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar personalData={data.personal} />
      <Hero data={data.personal} />
      <CareerSummary
        summary={data.personal.career_summary}
        experienceYears={experienceYears}
      />
      <Experience experiences={data.experience} />
      <Qualifications qualifications={data.qualifications} />
      <Acheivements achievements={data.achievements} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Resume personalData={data.personal} />
      <Contact personalData={data.personal} />
      <ScrollToTop />
      <AdminBar />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <PortfolioDataProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Portfolio />} />
            </Routes>
          </BrowserRouter>
        </PortfolioDataProvider>
      </AuthProvider>
    </div>
  );
}

export default App;