import React from 'react';
import { Link } from 'react-router-dom';
import photo_pro1 from '../assets/photo_pics2.PNG';
import photo_pro2 from '../assets/photo_pics2.PNG';
import photo_pro3 from '../assets/photo_pics2.PNG';
import photo_pro4 from '../assets/photo_pics2.PNG';
import './Professors.css'; // CSS 파일을 추가합니다

function Professors() {
  return (
    <section id="professors" className="section">
      <div className="photo-gallery_pro">
        <Link to="/professor1">
          <img src={photo_pro1} alt="Professor 1" className="photo_pro" />
        </Link>
        <Link to="/professor2">
          <img src={photo_pro2} alt="Professor 2" className="photo_pro" />
        </Link>
        <Link to="/professor3">
          <img src={photo_pro3} alt="Professor 3" className="photo_pro" />
        </Link>
        <Link to="/professor4">
          <img src={photo_pro4} alt="Professor 4" className="photo_pro" />
        </Link>
      </div>
    </section>
  );
}

export default Professors;
