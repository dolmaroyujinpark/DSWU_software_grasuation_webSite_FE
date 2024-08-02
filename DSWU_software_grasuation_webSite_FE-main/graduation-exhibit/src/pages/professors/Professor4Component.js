import React from 'react';
import image from '../../assets/photo_pics4.PNG'; // 이미지 경로 수정
import '../css/ProfessorComponent.css'; // CSS 파일 임포트

const Professor4Component = () => {
  return (
    <div className="professor-container">
      <h3 className="professor-title">| 음두헌 교수님</h3>
      <div className="professor-content">
        <img src={image} alt="Professor 2" className="professor-image" />
        <div className="professor-text">
          <p>축~~~~~~사</p>
          <p>.....</p>
          <p>.....</p>
          <p>.....</p>
        </div>
      </div>
      <div className="professor-video">
        <video controls>
          <source src="../assets/video.mp4" type="video/mp4" /> {/* 비디오 경로 수정 */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
export default Professor4Component;