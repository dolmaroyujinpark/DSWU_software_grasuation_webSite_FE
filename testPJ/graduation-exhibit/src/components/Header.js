import React, { useEffect } from 'react';
import './Header.css';

function Header() {
  useEffect(() => {
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6 // 섹션의 60% 이상이 보이면 트리거
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'projects' || entry.target.id === 'guest' || entry.target.id === 'designers') {
            header.classList.remove('light');
            header.classList.add('dark');
          } else {
            header.classList.remove('dark');
            header.classList.add('light');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <header className="header light">
      <a href="#top" className="title-link">
        <h1>Algorithm: Rhythm in Code</h1>
      </a>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#projects">Projects</a></li>
          <li className="nav-item"><a href="#professors">Professors</a></li>
          <li className="nav-item"><a href="#guest">Guest</a></li>
          <li className="nav-item"><a href="#pics">Pics</a></li>
          <li className="nav-item"><a href="#designers">Design</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
