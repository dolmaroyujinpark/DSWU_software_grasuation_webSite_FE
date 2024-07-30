import React from 'react';
import { Link } from 'react-router-dom';
import project1Img from '../assets/project1.jpg';
import project2Img from '../assets/project2.jpg';
import grayBoxImg from '../assets/gray-box.jpg'; // 올바른 경로로 추가
import './css/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {/* 프로젝트 1 */}
        <Link to="/project1" className="project-preview">
          <div className="project-preview-inner">
            <img src={project1Img || grayBoxImg} alt="Project 1" />
            <div className="project-preview-overlay">
              <p>Project 1</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 2 */}
        <Link to="/project2" className="project-preview">
          <div className="project-preview-inner">
            <img src={project2Img || grayBoxImg} alt="Project 2" />
            <div className="project-preview-overlay">
              <p>Project 2</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 3 */}
        <Link to="/project3" className="project-preview">
          <div className="project-preview-inner">
            <img src={grayBoxImg} alt="Project 3" />
            <div className="project-preview-overlay">
              <p>Project 3</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 4 */}
        <Link to="/project4" className="project-preview">
          <div className="project-preview-inner">
            <img src={grayBoxImg} alt="Project 4" />
            <div className="project-preview-overlay">
              <p>Project 4</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 5 */}
        <Link to="/project5" className="project-preview">
          <div className="project-preview-inner">
            <img src={grayBoxImg} alt="Project 5" />
            <div className="project-preview-overlay">
              <p>Project 5</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 6 */}
        <Link to="/project6" className="project-preview">
          <div className="project-preview-inner">
            <img src={grayBoxImg} alt="Project 6" />
            <div className="project-preview-overlay">
              <p>Project 6</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 7 */}
        <Link to="/project7" className="project-preview">
          <div className="project-preview-inner">
            <img src={grayBoxImg} alt="Project 7" />
            <div className="project-preview-overlay">
              <p>Project 7</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 8 */}
        <Link to="/project8" className="project-preview">
          <div className="project-preview-inner">
            <img src={grayBoxImg} alt="Project 8" />
            <div className="project-preview-overlay">
              <p>Project 8</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 9 */}
        <Link to="/project9" className="project-preview">
          <div className="project-preview-inner">
            <img src={grayBoxImg} alt="Project 9" />
            <div className="project-preview-overlay">
              <p>Project 9</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 10 */}
        <Link to="/project10" className="project-preview">
          <div className="project-preview-inner">
            <img src={grayBoxImg} alt="Project 10" />
            <div className="project-preview-overlay">
              <p>Project 10</p>
            </div>
          </div>
        </Link>
        {/* 나머지 프로젝트 사각형 추가 */}
      </div>
    </section>
  );
};

export default Projects;