import React from 'react';
import './Profile.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import Header from '../headerFooter/header/Header';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, level: 4 },
  { name: 'CSS', icon: <FaCss3Alt />, level: 2 },
  { name: 'JavaScript', icon: <FaJs />, level: 3 },
  { name: 'React', icon: <FaReact />, level: 3 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 1 },
  { name: 'SQL', icon: <FaDatabase />, level: 2 }
];

const Profile = () => {
  return (
    <>
    <Header/>
    <section className="profile" id="profile">
      <div className="profile-description">
        <h2>Sobre mí</h2>
        <p>
          Soy un apasionado de la programación, estudiante de la Tecnicatura en Programación en la Universidad Austral.
          Disfruto crear soluciones prácticas y seguir perfeccionando mis habilidades en el desarrollo fullstack.
        </p>
      </div>
      
      <div className="profile-skills">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <div className="skill-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < skill.level ? "star filled" : "star"}>★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
</>
  );
};

export default Profile;
