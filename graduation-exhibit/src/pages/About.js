// src/sections/About.js
import React from 'react';
import logo from '../assets/logo.png'; // 상위 폴더인 src에서 assets로 접근
import './css/About.css'; // 필요에 따라 스타일 파일 추가

const About = () => {
  return (
    <section id="about" className="section">
      <img src={logo} alt="Logo" className="logo" />
      < hr/>
      <div className="about-content">
        <div className="about-left-content">
          <p>2024 DUKSUNG WOMEN'S UNIVERSITY, SOFTWARE GRADUATION EXHIBITION</p>
          <p>덕성여자대학교 소프트웨어전공 졸업전시 2024</p>
          <p>기간 | 2024.09.09 - 2024.09.11</p>
          <p>시간 | 12:00 - 18:00</p>
          <p>장소 | 덕성여자대학교 학생회관 1층</p>
        </div>
        <div className="about-right-content">
          <p>Algorithm: Rhythm in Code</p>
          <p>서로 다른 화면을 마주하고 코드를 작성해나가는 개발자, 우리는 이 모습이 마치 작곡가와 비슷하다고 생각했습니다. 저마다의 속도로 성장해온 학생 개발자들이 지난 경험과 배움을 바탕으로 만들어온 작품을 공개합니다.
            이번 9월에 진행되는 2024 소프트웨어전공 졸업전시회에서 nn명의 개발자들은 사회로 나아갈 첫걸음을 내딛으려고 합니다.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
