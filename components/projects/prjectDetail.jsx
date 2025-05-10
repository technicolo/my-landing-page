import React from "react";
import { useParams } from "react-router-dom";
import "./Projects.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../headerFooter/header/Header";

const base = import.meta.env.BASE_URL;

const projectData = {
  "front-proyecto-final": {
    title: "front-proyecto-final",
    description:
      "esta es una aplicacion de estilo de red social pero orientada a los trabajos que hice en la facultad como projecto final, visualmente mejor que mi conversor y con algun que otro orgullo personal como el register por pasos, los comentarios y el el poder agregar imagenes via link.",
    images: [
      `${base}images/mercado-trabajos/BecomeWorker3de3.png`,
      `${base}images/mercado-trabajos/workerProfielEdit.png`,
      `${base}images/mercado-trabajos/workerProfile.png`,
      `${base}images/mercado-trabajos/categories.png`,
      `${base}images/mercado-trabajos/mainPage.png`,
    ],
    githubFront: "https://github.com/technicolo/FrontProyectFinal",
    githubBack: "https://github.com/technicolo/ProjectoLabBackend",
  },
  Conversor: {
    title: "Conversor",
    description:
      "Este es mi 1er conversor, no es muy lindo pero es uno de mis primeros acercamientos a angular y c#.",
    images: [
      `${base}images/conversor/conversorMain.png`,
      `${base}images/conversor/registroConversor.png`,
      `${base}images/conversor/planesConversor.png`,
    ],
    githubFront: "https://github.com/technicolo/front-conversor-monedas",
    githubBack: "https://github.com/technicolo/ConversorBackEnd",
  },
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
        <div className="github-buttons">
          <a
            href={project.githubFront}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-button"
          >
            Ver Frontend
          </a>
          <a
            href={project.githubBack}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-button"
          >
            Ver Backend
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
