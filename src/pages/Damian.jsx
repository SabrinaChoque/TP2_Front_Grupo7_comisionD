import React from "react";
import '../styles/Damian.css'; 
import '../styles/Habilidades.css'; 
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import sql from '../assets/Sql.png';
import python from '../assets/python.png';
import looker from '../assets/looker.png';
import aplicacion_movil from'../assets/aplicacion_movil.png';
import base_de_datos from '../assets/base_de_datos.png';
import pagina_web from '../assets/pagina_web.png';
import damian_perfil from '../assets/damian_perfil.png';


function Damian() {
  return (
    <>
      <header className="animate__animated animate__fadeInDown" style={{ animationDelay: "0.1s" }}>
        <div className="Presentacion">
          <h1>Damian Coronel Burgos</h1>
        </div>
      </header>

      <main className="damian-main animate__animated animate__fadeIn" style={{ animationDelay: "0.2s" }}>
        <div className="damian-contenedor ">
        <div className="titulo animate__animated animate__fadeInUp" style={{ animationDelay: "0.3s" }}><h2>Sobre mí</h2></div>

        <div className="damian-sobre-mi animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
          <img src={damian_perfil} alt="Foto de perfil" className="damian-foto" />
          <div className="damian-descripcion">
            <p>Hola, mi nombre es Damian Coronel Burgos, tengo 32 años. Actualmente estoy cursando la carrera de Tecnicatura Superior en Desarrollo de Software. Mi meta es poder recibirme e incursionar en el mundo de la ciencia de datos e inteligencia artificial.</p>
          </div>
        </div>

        <div className="titulo animate__animated animate__fadeInUp" style={{ animationDelay: "0.5s" }}>Habilidades en programación</div>

        <div className="listado_habilidades animate__animated animate__fadeInUp" style={{ animationDelay: "0.6s" }}>
          <ul>
            <li>JavaScript moderno – manejo fluido de ES6+, Vite y el ecosistema npm.</li>
            <li>React – creación de componentes, enrutado con React Router y organización de proyectos.</li>
            <li>Node.js – conocimiento para montar APIs y gestionar dependencias backend.</li>
            <li>HTML y CSS – maquetado semántico, Flexbox, componentes separados por estilos.</li>
            <li>SQL básico – modelado y consultas para respaldar las aplicaciones que desarrollás.</li>
          </ul>
        </div>

        <div className="proyectos_trabajados animate__animated animate__fadeInUp" style={{ animationDelay: "0.7s" }}>Proyectos trabajados</div>

        <div className="contenedor_proyectos">
          <div className="proyecto_uno animate__animated animate__fadeInUp" style={{ animationDelay: "0.8s" }}>
            <h2>Proyecto n° 1: Normalización de base de datos</h2>
            <p>He participado en un proyecto para una compañía del área de salud en el cual mi tarea principal era la de generar, a través de un archivo de datos, una valoración de los mismos, no sin antes normalizar dichos elementos.</p>
            <div><img src={base_de_datos} alt="Base de datos" /></div>
          </div>

          <div className="proyecto_uno animate__animated animate__fadeInUp" style={{ animationDelay: "0.9s" }}>
            <h2>Proyecto n° 2: Página web</h2>
            <p>Participé en la elaboración de una página web cuyo objetivo era publicitar una empresa de venta y distribución de vinos. Se emplearon tecnologías como HTML, CSS, JS, React y alojamiento en la nube.</p>
            <div><img src={pagina_web} alt="Página web" /></div>
          </div>

          <div className="proyecto_uno animate__animated animate__fadeInUp" style={{ animationDelay: "1s" }}>
            <h2>Proyecto n° 3: Creación de aplicación móvil</h2>
            <p>Como parte del proyecto de la creación de una aplicación para dispositivos móviles, he sido el encargado de gestionar el área de la base de datos y aplicar distintas medidas de seguridad para con la misma.</p>
            <div><img src={aplicacion_movil} alt="Aplicación móvil" /></div>
          </div>
        </div>

        <div className="Iconos_tecnologias animate__animated animate__fadeInUp" style={{ animationDelay: "1.1s" }}>
          <img src={html} alt="HTML" />
          <img src={css} alt="CSS" />
          <img src={js} alt="JavaScript" />
          <img src={react} alt="React" className="rotar" />
          <img src={python} alt="Python" />
          <img src={sql} alt="SQL" />
          <img src={looker} alt="Looker" />
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
                  <span className="react" style={{ width: "40%" }} data-skill="40%"></span>
                </div>
              </div>
              
              <div className="bar">
                <div className="info">
                  <span>
                    PYTHON <i className="fa-brands fa-python"></i>
                  </span>
                </div>
                <div className="progress-line">
                  <span className="python" style={{ width: "30%" }} data-skill="30%"></span>
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
                    LOOKER <i className="fa-brands fa-sql"></i>
                  </span>
                </div>
                <div className="progress-line">
                  <span className="looker" style={{ width: "55%" }} data-skill="55%"></span>
                </div>
              </div>




            </div>
          </div>

 



        </div>
      </main>

      <footer className="footer animate__animated animate__fadeInUp" style={{ animationDelay: "1.2s" }}>
        <div>© 2025 Damian Coronel Burgos. Todos los derechos reservados</div>
      </footer>
    </>
  );
}

export default Damian;