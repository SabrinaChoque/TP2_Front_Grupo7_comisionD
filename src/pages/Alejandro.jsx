import React from "react";
import '../styles/Alejandro.css'; 
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
      <div className="caja-Alejandro">
        <div className="fondo-alejandro">
          <header className="header-Alejandro">
            <div className="caja-nombre">
              <h1>Alejandro Ariel Cubas</h1>
            </div>
          </header>

          <main>
            <h2>Sobre mí</h2>
            <section className="sobre-Alejandro">
              <img src={fotoAlejandro} alt="Imagen de Alejandro" className="avatar" />
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

            <div className="titulo">Habilidades en programación</div>

            <div className="listado_habilidades">
              <p className="parrafo_habilidades">
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
              </p>
            </div>

            <div className="proyectos_trabajados">Proyectos trabajados</div>

            <div className="contenedor_proyectos">

              <div className="proyecto_uno">
                <h2>Proyecto n° 1: Aplicación de gestión de turnos médicos</h2>
                <p>Desarrollamos un aplicación encargada de la gestión de turnos y entrega de análisis médicos desarrollada
                  en con C# en .NET y MySQL.
                </p>
                <div><img src={appDesktop} alt="appDesktop" /></div>
              </div>

              <div className="proyecto_uno">
                <h2>Proyecto n° 2: App de gestión para club deportivo</h2>
                <p>Participé en el diseño de una aplicación de gestión de asociados y pagos para un club deportivo
                  utilizando Kotlin, Sqlite y figma.
                </p>
                <div><img src={appMobile} alt="appMobile" /></div>
              </div>

              <div className="proyecto_uno">
                <h2>Proyecto n° 3: Aplicación Web para inmobiliaria</h2>
                <p>Creamos la base de una aplicación web de creación y consulta de contratos de alquiler y gestión de
                  citas con clientes utilizando Javascript, JSON, CSS y NodeJS.
                </p>
                <div><img src={appWeb} alt="appWeb" /></div>
              </div>

            </div>

            <div className="Iconos_tecnologias">
              <img src={html} alt="HTML" />
              <img src={css} alt="CSS" />
              <img src={js} alt="JavaScript" />
              <img src={react} alt="React" />
              <img src={sql} alt="SQL" />
              <img src={JavaImagen} alt="java"/>
              <img src={SpringBootImagen} alt='Spring Boot'/>
            </div>
          </main>

          <footer className="footer">
            <div>© 2025 Alejandro [Tu Apellido]. Todos los derechos reservados</div>
          </footer>
        </div>

      </div>

    </>
  );
}

export default Alejandro;
