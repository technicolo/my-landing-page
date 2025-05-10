import React from 'react';
import { useParams } from 'react-router-dom';
import './Projects.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../headerFooter/header/Header';

const projectData = {
  'front-proyecto-final': {
    title: 'front-proyecto-final',
    description: 'Este es el frontend de mi proyecto final. Está hecho con React y muestra funcionalidades completas como login, manejo de usuarios y estilos modernos.',
    images: [
      '/images/mercado-trabajos/BecomeWorker3de3.png',
      '/images/mercado-trabajos/workerProfielEdit.png',
      '/images/mercado-trabajos/workerProfile.png',
      '/images/mercado-trabajos/categories.png',
      '/images/mercado-trabajos/mainPage.png',
    ]
  },
  'Conversor': {
    title: 'Conversor',
    description: 'Este es mi 1er conversor.',
    images: [
      '/images/conversor/conversorMain.png',
      '/images/conversor/registroConversor.png',
      '/images/conversor/planesConversor.png',
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <p>Proyecto no encontrado</p>;

  return (
    <>
      <Header />
      <div className="project-detail">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          {project.images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Captura ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ProjectDetail;
