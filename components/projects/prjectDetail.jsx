import React from "react";
import { useParams } from "react-router-dom";
import "./projects.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../headerFooter/header/Header";

const base = import.meta.env.BASE_URL;

const projectData = {
  frontPorjectFinal: {
    title: "Red social de servicios",
    description:
      "Esta es una aplicación de estilo red social pero orientada a los trabajos que hice en la facultad como proyecto final: visualmente mejor que mi conversor y con algún que otro orgullo personal, como el registro por pasos, los comentarios y poder agregar imágenes vía link.",
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
    title: "Conversor de monedas",
    description:
      "Este es mi primer conversor, no es muy lindo pero es uno de mis primeros acercamientos a Angular y C#.",
    images: [
      `${base}images/conversor/conversorMain.png`,
      `${base}images/conversor/registroConversor.png`,
      `${base}images/conversor/planesConversor.png`,
    ],
    githubFront: "https://github.com/technicolo/front-conversor-monedas",
    githubBack: "https://github.com/technicolo/ConversorBackEnd",
  },
  autofiller: {
    title: "Autofiller personal",
    description:
      "De los pocos proyectos de los que me siento más orgulloso: no es visualmente lo mejor que hice, pero lo importante es su utilidad. Es un autofiller que resuelve un problema recurrente al rellenar solicitudes de trabajo que redirigen a otra página, ya sea de la empresa o a otro portal.",
    images: [
      `${base}images/autofiller/autofiller.png`,
      `${base}images/autofiller/autofillCategoriesInputs.png`,
      `${base}images/autofiller/inputFillSample.png`,
    ],
    githubFront: "https://github.com/technicolo/autofill-trabajos",
    githubBack: "No tiene backend",
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <p className="not-found">Proyecto no encontrado</p>;

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
            className="btn btn-primary"
          >
            Ver Frontend
          </a>
          <a
            href={project.githubBack}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Ver Backend
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
