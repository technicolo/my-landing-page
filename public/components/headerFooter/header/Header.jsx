import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Francisco Dev</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="/my-landing-page/#/profile">Sobre mí</a></li>
          <li><a href="/my-landing-page/#/projects">Proyectos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
