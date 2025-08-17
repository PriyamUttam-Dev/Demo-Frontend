import { useState } from 'react';
import './Navigation.css';

const Navigation = ({ setCurrentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h3>MyApp</h3>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#" className="nav-link" onClick={() => { setCurrentView('home'); closeMenu(); }}>
            Home
          </a>
          <a href="" className="nav-link" onClick={closeMenu}>
            About
          </a>
          <a href="" className="nav-link" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
