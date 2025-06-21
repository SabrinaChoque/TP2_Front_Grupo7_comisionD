import React from "react";
import '../styles/Sabrina.css';
import '../styles/Habilidades.css'; 
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import github from '../assets/github.png';
import clinica from '../assets/ClinicaSprice.jpg';
import club from '../assets/ClubDeportivo.jpg';
import inmobiliaria from '../assets/InmobiliariaAlquilarte.jpg';
import sabrinaFoto from '../assets/sabrina.jpg';

function Sabrina() {
  return (
    <>
      <div className="sabrina-fondo animate__animated animate__fadeIn" style={{ animationDelay: "0.1s" }}>
        <div className="sabrina-header animate__animated animate__fadeInDown" style={{ animationDelay: "0.2s" }}>
          <div className="sabrina-banner">
            <h1>Sabrina Choque</h1>
            <p className="sabrina-subtitulo">Futura Desarrolladora</p>
          </div>
        </div>

        <h2 className="sabrina-titulo animate__animated animate__fadeInUp" style={{ animationDelay: "0.3s" }}>Sobre mí</h2>
        <div className="sabrina-sobre-mi animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
          <img src={sabrinaFoto} alt="Sabrina Choque" className="sabrina-foto" />
          <div className="sabrina-descripcion">
            <p>Hola, mi nombre es Sabrina Choque, tengo 38 años, casada hace 11 años y tengo a mi niño que se llama Dante.</p>
            <p>Actualmente estoy cursando la carrera de Tecnicatura Superior en Desarrollo de Software.</p>
            <p>Empecé a interesarme en el mundo de IT aprendiendo microinformática sobre armado y reparación de PC.</p>
            <p>Durante la pandemia encontré la oportunidad de estudiar Programación con Java Full Stack. Un curso que me hizo amar el desarrollo de software.</p>
            <p>Este año estoy con la asignatura FrontEnd. Aunque está fuera de mis habilidades y conocimiento, es un gran reto. Espero dar lo mejor de mí porque mi meta es obtener mi primer trabajo como desarrolladora y, en el futuro, liderar un equipo.</p>
          </div>
        </div>

        <main>
          <h2 className="sabrina-titulo animate__animated animate__fadeInUp" style={{ animationDelay: "0.5s" }}>Habilidades e intereses</h2>

          <div className="sabrina-habilidades-intereses animate__animated animate__fadeInUp" style={{ animationDelay: "0.6s" }}>
            <div className="sabrina-bloque">
              <h3>Habilidades</h3>
              <ul>
                <li>Desarrollo frontend con React y JavaScript moderno</li>
                <li>Maquetación web con HTML y CSS</li>
                <li>Diseño de interfaces en Figma</li>
                <li>Trabajo en equipo usando Git y GitHub</li>
              </ul>
            </div>

            <div className="sabrina-bloque">
              <h3>Intereses</h3>
              <ul>
                <li>Explorar nuevas tecnologías frontend</li>
                <li>Diseño UX/UI</li>
                <li>Gamificación en interfaces</li>
                <li>Videojuegos y apps creativas</li>
              </ul>
            </div>
          </div>

          <h2 className="sabrina-titulo animate__animated animate__fadeInUp" style={{ animationDelay: "0.7s" }}>Proyectos destacados</h2>
          <div className="sabrina-contenedor-proyectos">
            <div className="sabrina-proyecto animate__animated animate__fadeInUp" style={{ animationDelay: "0.8s" }}>
              <h2>Proyecto 1: Clínica Seprise</h2>
              <p>Aplicación de escritorio para gestionar turnos, pacientes, acreditación y stock.</p>
              <img src={clinica} alt="Proyecto Clínica" />
            </div>
            <div className="sabrina-proyecto animate__animated animate__fadeInUp" style={{ animationDelay: "0.9s" }}>
              <h2>Proyecto 2: Club Deportivo</h2>
              <p>App para gestionar socios, carnets y pagos en un club.</p>
              <img src={club} alt="Proyecto Club" />
            </div>
            <div className="sabrina-proyecto animate__animated animate__fadeInUp" style={{ animationDelay: "1s" }}>
              <h2>Proyecto 3: Inmobiliaria Alquilarte</h2>
              <p>Simulación de base de datos con JSON, CRUD y vistas con PUG.</p>
              <img src={inmobiliaria} alt="Proyecto Inmobiliaria" />
            </div>
          </div>

          <div className="sabrina-iconos animate__animated animate__fadeInUp" style={{ animationDelay: "1.1s" }}>
            <img src={html} alt="HTML" />
            <img src={css} alt="CSS" />
            <img src={js} alt="JavaScript" />
            <img src={react} alt="React" />
            <img src={github} alt="GitHub" />
          </div>

                      <div className="skills">
            <h1>Habilidades</h1>
            <div className="skill-bar"> 

              <div className="bar">
                <div className="info">
                  <span>
                    HTML <i className="fa-brands fa-html5"></i>
                  </span>
                </div>
                <div className="progress-line">
                  <span className="html" style={{ width: "90%" }} data-skill="90%"></span>
                </div>
              </div>
                
              <div className="bar">
                <div className="info">
                  <span>
                    CSS <i className="fa-brands fa-css3"></i>
                  </span>
                </div>
                <div className="progress-line">
                  <span className="css" style={{ width: "80%" }} data-skill="80%"></span>
                </div>
              </div>

                            
              <div className="bar">
                <div className="info">
                  <span>
                    JAVASCRIPT <i className="fa-brands fa-sql"></i>
                  </span>
                </div>
                <div className="progress-line">
                  <span className="javascript" style={{ width: "80%" }} data-skill="80%"></span>
                </div>
              </div>
                
              <div className="bar">
                <div className="info">
                  <span>
                    REACT <i className="fa-brands fa-javascript"></i>
                  </span>
                </div>
                <div className="progress-line">
                  <span className="react" style={{ width: "60%" }} data-skill="60%"></span>
                </div>
              </div>
              
              <div className="bar">
                <div className="info">
                  <span>
                    GITHUB <i className="fa-brands fa-python"></i>
                  </span>
                </div>
                <div className="progress-line">
                  <span className="github" style={{ width: "30%" }} data-skill="30%"></span>
                </div>
              </div>
                


            </div>
          </div>




        </main>

        <footer className="sabrina-footer animate__animated animate__fadeInUp" style={{ animationDelay: "1.2s" }}>
          © 2025 Sabrina Choque. Todos los derechos reservados
        </footer>
      </div>
    </>
  );
}

export default Sabrina;