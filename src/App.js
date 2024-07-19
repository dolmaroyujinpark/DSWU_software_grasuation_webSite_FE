import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // ScrollToTop 컴포넌트 추가
import './App.css';
import logo from './assets/logo.png'; // 로고 이미지 파일 경로

// 예시 프로젝트 이미지 경로
import project1Img from './assets/project1.jpg';
import project2Img from './assets/project2.jpg';

import photo_pics1 from './assets/photo_pics1.PNG';
import photo_pics2 from './assets/photo_pics2.PNG';
import photo_pics3 from './assets/photo_pics3.PNG';
import photo_pics4 from './assets/photo_pics4.PNG';

import Professors from './pages/Professors';
import Professor1Component from './pages/Professor1Component';
import Professor2Component from './pages/Professor2Component';
import Professor3Component from './pages/Professor3Component';
import Professor4Component from './pages/Professor4Component';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App" id="top">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                {/* 수현 - About 구역 */}
                < section id="about" className="section">
                  <div className="about-content">
                    <img src={logo} alt="Logo" className="logo" />
                    <p>2024 DUKSUNG WOMEN'S UNIVERSITY COLLEGE OF SCIENCE AND TECHNOLOGY, SOFTWARE GRADUATION EXHIBITION</p>
                    <p>덕성여자대학교 소프트웨어전공 졸업전시 2024</p>
                    <p>기간 | 2024.09.09 - 2024.09.11</p>
                    <p>시간 | 12:00 - 18:00</p>
                    <p>장소 | 덕성여자대학교 학생회관 1층</p>
                    <p>"Algorithm: Rhythm in Code"는 코드를 작성하는 과정이 작곡과 유사하다는 아이디어를 반영한 슬로건입니다. 음악을 작곡할 때 음악가는 멜로디, 하모니, 리듬을 조화롭게 결합하여 아름다운 곡을 만듭니다. 마찬가지로 프로그래머는 알고리즘, 데이터 구조, 로직을 조화롭게 결합하여 효율적이고 창의적인 소프트웨어를 만듭니다.</p>
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
                  <Professors />
                </section>

                {/* 소정, 윤영 - Guest Book 구역 */}
                <section id="guest" className="section">
                  <h2>Guest Book</h2>
                  <p>Information for our guests.</p>
                </section>

                {/* 수현 - Pictures 구역 */}
                <section id="pics" className="section">
                  <h2>Pics</h2>
                  <div className="photo-gallery">
                    <img src={photo_pics1} alt="photo_pics1" className="photo_pics" />
                    <img src={photo_pics2} alt="photo_pics2" className="photo_pics" />
                    <img src={photo_pics3} alt="photo_pics3" className="photo_pics" />
                    <img src={photo_pics4} alt="photo_pics4" className="photo_pics" />
                    <img src={photo_pics1} alt="photo_pics1" className="photo_pics" />
                    <img src={photo_pics2} alt="photo_pics2" className="photo_pics" />
                    <img src={photo_pics3} alt="photo_pics3" className="photo_pics" />
                    <img src={photo_pics4} alt="photo_pics4" className="photo_pics" />
                  </div>
                </section>

                {/* 수현 - Designers 구역 */}
                <section id="designers" className="section">
                  <h2>Designers</h2>
                  <p className="greenName">2024 SOFTWARE 졸업전시 준비위원회</p>
                  <p>위원장 | 안은현</p>
                  <p>부위원장 | 김연수</p>
                  <p>프론트엔드 | 박유진 김소정 장수현 최윤영 백수민</p>
                  <p>백엔드 | 고희주 김도연 조영채 이현주 전다혜 정서희</p>
                  <p>기획 | 000 000</p>
                  <p>디자인 | </p>
                </section>
              </>
            } />
            <Route path="/professor1" element={<Professor1Component />} />
            <Route path="/professor2" element={<Professor2Component />} />
            <Route path="/professor3" element={<Professor3Component />} />
            <Route path="/professor4" element={<Professor4Component />} />
          </Routes>
        </div >
        <Footer />
      </div >
    </Router>
  );
}

export default App;
