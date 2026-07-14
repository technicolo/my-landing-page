import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header nav">
      <span className="nav-brand">Francisco Gonzalez Frare</span>
      <nav>
        <ul className="nav-links">
          <li><a href="/my-landing-page/#/profile">Sobre mi</a></li>
          <li><a href="/my-landing-page/#/projects">Proyectos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
