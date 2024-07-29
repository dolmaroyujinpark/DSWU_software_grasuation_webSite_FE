import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './Header.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
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

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTitleClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleNavLinkClick = (e) => {
    e.preventDefault();
    navigate(e.target.getAttribute('href'));
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="header light">
        <a href="/" className="title-link" onClick={handleTitleClick}>
          <h1>Algorithm: Rhythm in Code</h1>
        </a>
        <div className="nav-toggle" onClick={toggleSidebar}>
          ☰
        </div>
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
        <nav ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#about" onClick={handleNavLinkClick}>About</a></li>
            <li><a href="#projects" onClick={handleNavLinkClick}>Projects</a></li>
            <li><a href="#professors" onClick={handleNavLinkClick}>Professors</a></li>
            <li><a href="#guest" onClick={handleNavLinkClick}>Guest</a></li>
            <li><a href="#pics" onClick={handleNavLinkClick}>Pics</a></li>
            <li><a href="#designers" onClick={handleNavLinkClick}>Design</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
