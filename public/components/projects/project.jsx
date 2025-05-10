import React from 'react';
import './Projects.css';

import Header from '../headerFooter/header/Header';
import { Link } from 'react-router-dom';

const base = import.meta.env.BASE_URL;

const projects = [
  {
    id: 'front-proyecto-final',
    title: 'front-proyecto-final',
    image: `${base}images/mercado-trabajos/register.png`
  },
  {
    id: 'Conversor',
    title: 'Conversor Monedas',
    image: `${base}images/conversor/login.png`
  }
];

const Projects = () => {
  return (
    <>
      <Header />
      <section className="projects" id="projects">
        <div className="projects-header">
          <h2>Proyectos</h2>
          <p>Algunos trabajos realicé.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <Link to={`/projects/${project.id}`} className="project-link">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="overlay">
                  <span className="overlay-text">Ver más</span>
                </div>
              </Link>
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
