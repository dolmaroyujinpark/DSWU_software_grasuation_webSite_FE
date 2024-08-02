// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Professors from './pages/Professors';
import Professor1Component from './pages/professors/Professor1Component';
import Professor2Component from './pages/professors/Professor2Component';
import Professor3Component from './pages/professors/Professor3Component';
import Professor4Component from './pages/professors/Professor4Component';
import Guest from './pages/Guest';
import GuestPage from './pages/guest2';
import Pics from './pages/Pics';
import Designers from './pages/Designers';
import Footer from './components/Footer';
import JsonData from './data/data.json';
import ScrollToTop from './components/ScrollToTop'; // ScrollToTop 컴포넌트 추가
import './App.css';

//project
import Project1Component from './pages/projects/Project1Component';
import Project2Component from './pages/projects/Project2Component';
import Project3Component from './pages/projects/Project3Component'; 
import Project4Component from './pages/projects/Project4Component'; 
import Project5Component from './pages/projects/Project5Component'; 
import Project6Component from './pages/projects/Project6Component'; 
import Project7Component from './pages/projects/Project7Component'; 
import Project8Component from './pages/projects/Project8Component'; 
import Project9Component from './pages/projects/Project9Component'; 
import Project10Component from './pages/projects/Project10Component'; 


const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App" id="top">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <About data={landingPageData.About} />
                <Projects data={landingPageData.Projects} />
                <Professors data={landingPageData.Professors} />
                <Guest data={landingPageData.Guest} />
                <Pics data={landingPageData.Pics} />
                <Designers data={landingPageData.Designers} />
              </>
            } />
            {/* 필요한 다른 라우트 추가 */}
            <Route path="/professor1" element={<Professor1Component />} />
            <Route path="/professor2" element={<Professor2Component />} />
            <Route path="/professor3" element={<Professor3Component />} />
            <Route path="/professor4" element={<Professor4Component />} />
            <Route path="/guest2" element={<GuestPage />} />
            <Route path="/project1" element={<Project1Component />} />
            <Route path="/project2" element={<Project2Component />} />
            <Route path="/project3" element={<Project3Component />} />
            <Route path="/project4" element={<Project4Component />} />
            <Route path="/project5" element={<Project5Component />} />
            <Route path="/project6" element={<Project6Component />} />
            <Route path="/project7" element={<Project7Component />} />
            <Route path="/project8" element={<Project8Component />} />
            <Route path="/project9" element={<Project9Component />} />
            <Route path="/project10" element={<Project10Component />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
