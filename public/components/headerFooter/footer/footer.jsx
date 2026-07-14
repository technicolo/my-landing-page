import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Francisco Gonzalez Frare — Rosario, Argentina. © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
