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
          <p>2024 DUKSUNG WOMEN'S UNIVERSITY COLLEGE OF SCIENCE AND TECHNOLOGY, SOFTWARE GRADUATION EXHIBITION</p>
          <p>덕성여자대학교 소프트웨어전공 졸업전시 2024</p>
          <p>기간 | 2024.09.09 - 2024.09.11</p>
          <p>시간 | 12:00 - 18:00</p>
          <p>장소 | 덕성여자대학교 학생회관 1층</p>
        </div>
        <div className="about-right-content">
          <p>Algorithm: Rhythm in Code</p>
          <p>"Algorithm: Rhythm in Code"는 코드를 작성하는 과정이 작곡과 유사하다는 아이디어를 반영한 슬로건입니다. 음악을 작곡할 때 음악가가 멜로디, 하모니, 리듬을 조화롭게 결합하여 아름다운 곡을 만드는 것과 같이
            프로그래머는 알고리즘, 데이터 구조, 로직을 조화롭게 결합하여 효율적이고 창의적인 소프트웨어를 만든다는 의미를 가지고 있습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
