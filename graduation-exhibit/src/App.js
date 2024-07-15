import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import logo from './assets/logo.png'; // 로고 이미지 파일 경로

// 예시 프로젝트 이미지 경로
import project1Img from './assets/project1.jpg';
import project2Img from './assets/project2.jpg';

function App() {
  return (
    <div className="App" id="top">
      <Header />
      <div className="main-content">

        {/* 수현 - About 구역 */}
        <section id="about" className="section">
          <div className="about-content">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </section>
        
        {/* 수민, 유진 - Projects 구역 */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects-grid">
            {/* 프로젝트 1 */}
            <a href="/project1" className="project-preview">
              <div className="project-preview-inner">
                <img src={project1Img || require('./assets/gray-box.jpg')} alt="Project 1" />
                <div className="project-preview-overlay">
                  <p>Project 1</p>
                </div>
              </div>
            </a>
            {/* 프로젝트 2 */}
            <a href="/project2" className="project-preview">
              <div className="project-preview-inner">
                <img src={project2Img || require('./assets/gray-box.jpg')} alt="Project 2" />
                <div className="project-preview-overlay">
                  <p>Project 2</p>
                </div>
              </div>
            </a>
            {/* 프로젝트 3 */}
            <a href="/project3" className="project-preview">
              <div className="project-preview-inner">
                <img src={require('./assets/gray-box.jpg')} alt="Project 3" />
                <div className="project-preview-overlay">
                  <p>Project 3</p>
                </div>
              </div>
            </a>
            {/* 나머지 프로젝트 사각형 추가 */}
          </div>
        </section>
        
        {/* 수현 - Professors 구역 */}
        <section id="professors" className="section">
          <h2>Professors</h2>
          <p>Information about our professors.</p>
        </section>
        
        {/* 소정, 윤영 - Guest Book 구역 */}
        <section id="guest" className="section">
          <h2>Guest Book</h2>
          <p>Information for our guests.</p>
        </section>
        
        {/* 수현 - Pictures 구역 */}
        <section id="pics" className="section">
          <h2>Pics</h2>
          <p>Our photo gallery.</p>
        </section>
        
        {/* 수현 - Designers 구역 */}
        <section id="designers" className="section">
          <h2>Designers</h2>
          <p>2024 SOFTWARE 졸업전시 준비위원회</p>
        </section>
      
      </div>
      <Footer />
    </div>
  );
}

export default App;
