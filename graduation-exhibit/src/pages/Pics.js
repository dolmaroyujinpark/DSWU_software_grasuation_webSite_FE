// src/pages/Pics.js
import React, { useState } from 'react';
import photo_pics1 from '../assets/photo_pics1.PNG';
import photo_pics2 from '../assets/photo_pics2.PNG';
import photo_pics3 from '../assets/photo_pics3.PNG';
import photo_pics4 from '../assets/photo_pics4.PNG';
import './css/pics.css'; // CSS 파일 추가

const images = [
  photo_pics1,
  photo_pics2,
  photo_pics3,
  photo_pics4,
  photo_pics4,
  photo_pics3,
  photo_pics2,
  photo_pics1,
  photo_pics1,
  photo_pics2,
  photo_pics3,
  photo_pics4,
];

const Pics = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
    }
  };

  const currentImages = images.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section id="pics" className="section">
      <h2>Pics</h2>
      <div className="photo-gallery">
        {currentImages.map((image, index) => (
          <img src={image} alt={`photo_pics${index + 1}`} className="photo_pics" key={index} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-button ${currentPage === index ? 'active' : ''}`}
            onClick={() => handlePageChange(index)}
          >
            •
          </button>
        ))}
      </div>
    </section>
  );
};

export default Pics;
