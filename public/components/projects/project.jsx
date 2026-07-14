import React from 'react';
import './projects.css';
import Header from '../headerFooter/header/Header';
import { Link } from 'react-router-dom';

const base = import.meta.env.BASE_URL;

const projects = [
  {
    id: 'frontPorjectFinal',
    title: 'Red social de servicios',
    kicker: 'Proyecto final — facultad',
    description: 'Aplicación estilo red social orientada a trabajos de oficios, con registro por pasos, comentarios y carga de imágenes vía link.',
    image: `${base}images/mercado-trabajos/register.png`,
  },
  {
    id: 'Conversor',
    title: 'Conversor de monedas',
    kicker: 'Proyecto — facultad',
    description: 'Uno de mis primeros acercamientos a Angular y C#: conversión de divisas con planes y registro.',
    image: `${base}images/conversor/login.png`,
  },
  {
    id: 'autofiller',
    title: 'Autofiller personal',
    kicker: 'Proyecto personal',
    description: 'Herramienta para completar formularios de trabajo automáticamente a partir de una estrategia de mapeo configurable.',
    image: `${base}images/autofiller/autofiller.png`,
  },
];

const Projects = () => {
  return (
    <>
      <Header />
      <section className="projects" id="projects">
        <div className="projects-header">
          <span className="kicker">Proyectos</span>
          <p className="intro">Algunos trabajos que realicé.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link to={`/projects/${project.id}`} className="project-card" key={project.id}>
              <div className="project-thumb">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="overlay"><span className="overlay-text">Ver más</span></div>
              </div>
              <span className="card-kicker">{project.kicker}</span>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-body">{project.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
