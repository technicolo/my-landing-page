import React from 'react';
import './hero.css';

const Inicio = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="display">
            <span className="line">Desarrollador Full Stack.</span>
            <span className="line">Aprendiendo siempre.</span>
          </h1>
          <p className="sub">Full stack con ganas de seguir aprendiendo lo que haga falta.</p>
          <div className="row">
            <a href="/my-landing-page/#/projects" className="btn btn-primary">Ver proyectos</a>
            <a href="mailto:franfrare19@gmail.com" className="btn btn-ghost">Contactarme</a>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Datos rápidos">
        <div className="stats-grid">
          <div><p className="stat-num">2</p><p className="stat-label">años de experiencia en full stack dev</p></div>
          <div><p className="stat-num">B2</p><p className="stat-label">Inglés — certificado EF SET</p></div>
          <div><p className="stat-num">3</p><p className="stat-label">Proyectos destacados</p></div>
          <div><p className="stat-num">2026</p><p className="stat-label">Egreso Tecnicatura UA</p></div>
        </div>
      </section>
    </>
  );
};

export default Inicio;
