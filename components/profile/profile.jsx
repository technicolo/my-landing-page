import React from "react";
import "./profile.css";
import Header from "../headerFooter/header/Header";

const stack = [
  {
    num: "01",
    title: "Frontend",
    tags: ["JavaScript / TypeScript", "React", "Next.js", "Angular"],
  },
  {
    num: "02",
    title: "Backend",
    tags: ["Node.js", "Nest.js", "ASP.NET Web API", "C#", "C++"],
  },
  {
    num: "03",
    title: "Datos & herramientas",
    tags: ["SQL / MySQL", "Python", "Git / GitHub", "Power BI"],
  },
];

const trayectoria = [
  {
    when: "2026",
    role: "Graduado de la Tecnicatura Universitaria en Programación",
    org: "Universidad Austral",
  },
  {
    when: "2026",
    role: "Docente reemplazante",
    org: "Establecimiento educativo — Rosario",
    copy: "Reemplazos como maestro de grado y ATTP. Por iniciativa propia, colaboré con la vicedirección de la escuela 466 Manuel Savio en la digitalización de los horarios escolares con el software Horarios aSc.",
  },
  {
    when: "2024 – 2026",
    role: "Desarrollador Full Stack — Pasantía",
    org: "Universidad Austral",
    copy: "Desarrollo de múltiples módulos de una aplicación web de gestión, con Next.js en el frontend y Nest.js en el backend. Implementación de un módulo de importación de archivos Excel para la carga masiva de alumnos en una sola operación.",
  },
  {
    when: "2026 – presente",
    role: "Licenciatura en Ciencia de Datos",
    org: "Universidad Nacional de Rosario",
  },
];

const Profile = () => {
  return (
    <>
      <Header />
      <section className="profile" id="profile">
        <div className="profile-description">
          <span className="kicker">Sobre mí</span>
          <p>
            Graduado de la Tecnicatura Universitaria en Programación (Universidad
            Austral) y estudiante de la Licenciatura en Ciencia de Datos (UNR), con
            experiencia como desarrollador full stack en proyectos web reales. Me
            oriento a construir soluciones concretas y a aplicar nuevas
            tecnologías con criterio.
          </p>
        </div>

        <div className="stack">
          {stack.map((group) => (
            <div className="feature" key={group.title}>
              <p className="f-num">{group.num}</p>
              <h3 className="f-title">{group.title}</h3>
              <div className="f-tags">
                {group.tags.map((tag) => (
                  <span className="tag tag-accent" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr className="rule" />

        <div className="trayectoria">
          <span className="kicker">Trayectoria</span>
          {trayectoria.map((item, i) => (
            <div className="timeline-item" key={i}>
              <p className="t-when">{item.when}</p>
              <div>
                <h3 className="t-role">{item.role}</h3>
                <p className="t-org">{item.org}</p>
                {item.copy && <p className="t-copy">{item.copy}</p>}
              </div>
            </div>
          ))}
        </div>

        <hr className="rule" />

        <div className="contacto">
          <h3>Hablemos</h3>
          <p className="sub">
            Busco sumar a proyectos donde pueda aportar y seguir creciendo
            profesionalmente. Escribime o encontrame en estos canales.
          </p>
          <div className="contact-buttons">
            <a
              href="mailto:franfrare19@gmail.com"
              className="btn btn-primary"
            >
              franfrare19@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/francisco-gonzalez-frare"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/technicolo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
