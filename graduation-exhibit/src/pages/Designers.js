// src/sections/Designers.js
import React from 'react';
import './css/Designers.css'; // CSS 파일 추가

const Designers = () => {
  return (
    <section id="designers" className="section">
       <h2>Designers</h2>
                  <div className="designers-content">
                    <div className="designers-text-content">
                      <p className="greenName">2024 SOFTWARE 졸업전시 준비위원회</p>
                      <p>위원장 | 안은현</p>
                      <p>부위원장 | 김연수</p>
                      <p>프론트엔드 | 김소정 박유진 백수민 장수현 최윤영</p>
                      <p>백엔드 | 고희주 김도연 이현주 전다혜 정서희 조영채</p>
                      <p>기획 | 안은현 김연수 전다혜</p>
                      <p>디자인 | 김도연 김소정 최윤영 김하정</p>
                    </div>
                    <div className="designers-image-content">
                      <img src={require('../assets/mainPoster.png')} alt="Designers" />
                    </div>
                  </div>
    </section>
  );
};

export default Designers;
