// src/sections/Designers.js
import React from 'react';
//import './Designers.css'; // CSS 파일 추가

const Designers = () => {
  return (
    <section id="designers" className="section">
       <h2>Designers</h2>
                  <div className="designers-content">
                    <div className="designers-text-content">
                      <p className="greenName">2024 SOFTWARE 졸업전시 준비위원회</p>
                      <p>위원장 | 안은현</p>
                      <p>부위원장 | 김연수</p>
                      <p>프론트엔드 | 박유진 김소정 장수현 최윤영 백수민</p>
                      <p>백엔드 | 고희주 김도연 조영채 이현주 전다혜 정서희</p>
                      <p>기획 | 000 000</p>
                      <p>디자인 | </p>
                    </div>
                    <div className="designers-image-content">
                      <img src={require('../assets/designersImg.PNG')} alt="Designers" />
                    </div>
                  </div>
    </section>
  );
};

export default Designers;
