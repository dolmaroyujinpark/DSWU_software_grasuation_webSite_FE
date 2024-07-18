import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/" className="title-link">
        <h1>Algorithm: Rhythm in Code</h1>
      </Link>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item"><Link to="/#about">About</Link></li>
          <li className="nav-item"><Link to="/#projects">Projects</Link></li>
          <li className="nav-item"><Link to="/#professors">Professors</Link></li>
          <li className="nav-item"><Link to="/#guest">Guest</Link></li>
          <li className="nav-item"><Link to="/#pics">Pics</Link></li>
          <li className="nav-item"><Link to="/#designers">Design</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
