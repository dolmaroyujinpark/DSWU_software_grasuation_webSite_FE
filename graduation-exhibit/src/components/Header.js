import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

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
          if (entry.target.id === 'projects' || entry.target.id === 'designers') {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavLinkClick = (e) => {
    e.preventDefault();
    const targetHash = e.target.getAttribute('href');

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => (
        document.querySelector(targetHash)?.scrollIntoView({ behavior: 'smooth' })
      ), 0);
    } else {
      navigate(e.target.getAttribute('href'));
    }

    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // Calculate class names
  const headerClassName = `header ${isSidebarOpen ? 'dark' : 'light'}`;
  const sidebarClassName = `sidebar ${isSidebarOpen ? 'open' : ''}`;

  return (
    <>
      <header className={headerClassName}>
        <a href="/" className="title-link" onClick={handleTitleClick}>
          <h1>Algorithm: Rhythm in Code</h1>
        </a>
        <div className="nav-toggle" onClick={toggleSidebar}>
          ☰
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-item"><a href="#about" onClick={handleNavLinkClick}>About</a></li>
            <li className="nav-item"><a href="#projects" onClick={handleNavLinkClick}>Projects</a></li>
            <li className="nav-item"><a href="#professors" onClick={handleNavLinkClick}>Professors</a></li>
            {/* <li className="nav-item"><a href="#guest" onClick={handleNavLinkClick}>Guest</a></li> */}
            <li className="nav-item"><a href="#pics" onClick={handleNavLinkClick}>Pics</a></li>
            <li className="nav-item"><a href="#designers" onClick={handleNavLinkClick}>Design</a></li>
          </ul>
        </nav>
        <nav ref={sidebarRef} className={sidebarClassName}>
          <ul>
            <li><a href="#about" onClick={handleNavLinkClick}>About</a></li>
            <li><a href="#projects" onClick={handleNavLinkClick}>Projects</a></li>
            <li><a href="#professors" onClick={handleNavLinkClick}>Professors</a></li>
            {/* <li><a href="#guest" onClick={handleNavLinkClick}>Guest</a></li> */}
            <li><a href="#pics" onClick={handleNavLinkClick}>Pics</a></li>
            <li><a href="#designers" onClick={handleNavLinkClick}>Design</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

