import React from "react";
import '../styles/Alejandro.css'; 
import '../styles/Habilidades.css'; 
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import sql from '../assets/Sql.png';
import python from '../assets/python.png';
import looker from '../assets/looker.png';
import aplicacion_movil from '../assets/aplicacion_movil.png';
import base_de_datos from '../assets/base_de_datos.png';
import pagina_web from '../assets/pagina_web.png';
import appDesktop from '../assets/appDesktop.jpg';
import appMobile from '../assets/appMobile.jpeg';
import appWeb from '../assets/appWeb.webp';
import fotoAlejandro from '../assets/fotoAlejandro.png';
import JavaImagen from '../assets/JavaImagen.png';
import SpringBootImagen from '../assets/SpringBootImagen.png';

function Alejandro() {
  return (
    <>
      <div className="caja-Alejandro animate__animated animate__fadeIn" style={{ animationDelay: "0.1s" }}>
        <div className="fondo-alejandro">
          <header className="header-Alejandro animate__animated animate__fadeInDown" style={{ animationDelay: "0.2s" }}>
            <div className="caja-nombre">
              <h1>Alejandro Ariel Cubas</h1>
            </div>
          </header>

          <main>
            <h2 className="animate__animated animate__fadeInUp" style={{ animationDelay: "0.3s" }}>Sobre mí</h2>
            <section className="sobre-Alejandro animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
              <img src={fotoAlejandro} alt="Imagen de Alejandro" className="avatar-ale" />
              <div>
                <p>
                  Me llamo Alejandro Cubas, estoy estudiando Desarrollo de Software, interesado en la rama del Backend particularmente con Java.
                  Soy panadero y padre primerizo de un pequeño de casi dos años. Me gusta la rama de Backend debido a la lógica y conjunto
                  de reglas que uno debe de seguir a la hora de crear una solución que me recuerda mucho al proceso de respetar proporciones de los
                  ingredientes en las recetas de panadería. Me gusta el estudiar las bases del software pero me suelto trabar seguido, por suerte
                  tengo una pareja que junto con mi pequeño me ayudan a relajar la mente para seguir intentando :D.
                </p>
              </div>
            </section>

            <div className="titulo animate__animated animate__fadeInUp" style={{ animationDelay: "0.5s" }}>Habilidades en programación</div>

            <div className="listado_habilidades animate__animated animate__fadeInUp" style={{ animationDelay: "0.6s" }}>
              <ul>
                <li>JavaScript – conocimientos fundamentales de lógica, eventos y manipulación del DOM.</li>
                <li>Java – desarrollo orientado a objetos y aplicaciones robustas.</li>
                <li>Interfaces gráficas – creación de GUIs con Swing.</li>
                <li>Backend en Java – desarrollo con Servlets.</li>
                <li>Frameworks – aplicaciones avanzadas con Spring Boot 3 y autenticación con Spring Security.</li>
                <li>Node.js – desarrollo backend básico con Express.</li>
                <li>HTML y CSS – maquetado semántico y diseño adaptable con Flexbox y Grid.</li>
                <li>Base de datos – diseño e integración de sistemas con MySQL.</li>
              </ul>
            </div>

            <div className="proyectos_trabajados animate__animated animate__fadeInUp" style={{ animationDelay: "0.7s" }}>Proyectos trabajados</div>

            <div className="contenedor_proyectos">
              <div className="proyecto_uno animate__animated animate__fadeInUp" style={{ animationDelay: "0.8s" }}>
                <h2>Proyecto n° 1: Aplicación de gestión de turnos médicos</h2>
                <p>Desarrollamos una aplicación encargada de la gestión de turnos y entrega de análisis médicos desarrollada en C# en .NET y MySQL.</p>
                <div><img src={appDesktop} alt="appDesktop" /></div>
              </div>

              <div className="proyecto_uno animate__animated animate__fadeInUp" style={{ animationDelay: "0.9s" }}>
                <h2>Proyecto n° 2: App de gestión para club deportivo</h2>
                <p>Participé en el diseño de una aplicación de gestión de asociados y pagos para un club deportivo utilizando Kotlin, Sqlite y Figma.</p>
                <div><img src={appMobile} alt="appMobile" /></div>
              </div>

              <div className="proyecto_uno animate__animated animate__fadeInUp" style={{ animationDelay: "1s" }}>
                <h2>Proyecto n° 3: Aplicación Web para inmobiliaria</h2>
                <p>Creamos la base de una aplicación web de creación y consulta de contratos de alquiler y gestión de citas con clientes utilizando Javascript, JSON, CSS y NodeJS.</p>
                <div><img src={appWeb} alt="appWeb" /></div>
              </div>
            </div>

            <div className="Iconos_tecnologias animate__animated animate__fadeInUp" style={{ animationDelay: "1.1s" }}>
              <img src={html} alt="HTML" />
              <img src={css} alt="CSS" />
              <img src={js} alt="JavaScript" />
              <img src={react} alt="React" />
              <img src={sql} alt="SQL" />
              <img src={JavaImagen} alt="java" />
              <img src={SpringBootImagen} alt="Spring Boot" />
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
                  <span className="html" style={{ width: "60%" }} data-skill="60%"></span>
                </div>
              </div>
                
              <div className="bar">
                <div className="info">
                  <span>
                    CSS <i className="fa-brands fa-css3"></i>
                  </span>
                </div>
                <div className="progress-line">
                  <span className="css" style={{ width: "50%" }} data-skill="50%"></span>
                </div>
              </div>
                
              <div className="bar">
                <div className="info">
                  <span>
                    JAVASCRIPT <i className="fa-brands fa-javascript"></i>
                  </span>
                </div>
                <div className="progress-line">
                  <span className="javascript" style={{ width: "60%" }} data-skill="60%"></span>
                </div>
              </div>
              
              <div className="bar">
                <div className="info">
                  <span>
                    REACT <i className="fa-brands fa-python"></i>
                  </span>
                </div>
                <div className="progress-line">
                  <span className="react" style={{ width: "30%" }} data-skill="30%"></span>
                </div>
              </div>
                
              <div className="bar">
                <div className="info">
                  <span>
                    SQL <i className="fa-brands fa-sql"></i>
                  </span>
                </div>
                <div className="progress-line">
                  <span className="sql" style={{ width: "80%" }} data-skill="80%"></span>
                </div>
              </div>
              
              <div className="bar">
                <div className="info">
                  <span>
                    JAVA <i className="fa-brands fa-sql"></i>
                  </span>
                </div>
                <div className="progress-line">
                  <span className="java" style={{ width: "90%" }} data-skill="90%"></span>
                </div>
              </div>

              <div className="bar">
                <div className="info">
                  <span>
                    SPRINGBOOT <i className="fa-brands fa-sql"></i>
                  </span>
                </div>
                <div className="progress-line">
                  <span className="springboot" style={{ width: "60%" }} data-skill="60%"></span>
                </div>
              </div>


            </div>
          </div>



          </main>

          <footer className="footer animate__animated animate__fadeInUp" style={{ animationDelay: "1.2s" }}>
            <div>© 2025 Alejandro Cubas. Todos los derechos reservados</div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Alejandro;