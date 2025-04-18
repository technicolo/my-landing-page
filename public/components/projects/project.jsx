import React from 'react';
import './Projects.css';
import Header from '../headerFooter/header/Header';

const projects = [
  {
    title: 'Front Proyecto Final',
    image: '/images/project1.png',
    github: 'https://github.com/technicolo/FrontProyectFinal'
  },
  {
    title: 'Backend Proyecto Final',
    image: '/images/project2.png',
    github: 'https://github.com/technicolo/ProjectoLabBackend'
  }
];

const Projects = () => {
  return (
    <>
    <Header/>
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2>Proyectos</h2>
        <p>Algunos trabajos destacados que realicé recientemente.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="overlay">
                <span className="overlay-text">Ver en GitHub</span>
              </div>
            </a>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  </>
  );
};

export default Projects;
