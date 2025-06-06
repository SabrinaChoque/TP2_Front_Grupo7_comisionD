import React from "react";
import '../styles/Damian.css'; 
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
    return(
      <>
      <header>
        <div className="Presentacion">
          <h1> Damian Coronel Burgos</h1>
        </div>
      </header>


      <main>

        <div className="titulo"><h2>Sobre mí</h2> </div>
        <div className="damian-sobre-mi">
          <img src={damian_perfil} alt="Foto de perfil " className="damian-foto" />
          <div className="damian-descripcion">
            <p>Hola, mi nombre es Damian Coronel Burgos, tengo 32 años. Actualmente estoy cursando la carrera de Tecnicatura Superior en Desarrollo de Software. Mi meta es poder recibirme e incursionar en el mundo de la ciencia de datos e inteligencia artificial .</p>
          </div>
        </div>








        <div className="titulo"> Habilidades en programacion</div>

            <div className="listado_habilidades">

              <p className="parrafo_habilidades"> 

                <ul>
                  <li>JavaScript moderno – manejo fluido de ES6+, Vite y el ecosistema npm.</li>
                  <li>React – creación de componentes, enrutado con React Router y organización de proyectos.</li>
                  <li>Node.js – conocimiento para montar APIs y gestionar dependencias backend.</li>
                  <li>HTML y CSS – maquetado semántico, Flexbox, componentes separados por estilos.</li>
                  <li>SQL básico – modelado y consultas para respaldar las aplicaciones que desarrollás.</li>
                </ul>

              </p>


            </div>


      <div className="proyectos_trabajados"> Proyectos trabajados     </div>

      <div className="contenedor_proyectos">

            <div className="proyecto_uno">

                <h2> Proyecto n° 1: normalizacion de base de datos</h2>
                <p>He particiapado un proyecto para una compañia del area de salud en el cual mi tarea principal era la de generar a través de un archivo de datos una valoración de los mismo, no sin antes normalizar dichos elementos.</p>
              <div ><img src={base_de_datos} alt="Base de datos" /></div>

            </div>

            <div className="proyecto_uno">

                <h2> Proyecto n° 2: Pagina web </h2>
                <p>Participe en la elaboración de una página web cuyo objetivo era publicitar una empresa de venta y distribucion de vinos, a tales efectos, se emplearon tecnologias como HTML, CSS, JS, REACT y alojamiento en la nube</p>
              <div><img src={pagina_web} alt=" Pagina web" /></div>

            </div>

            <div className="proyecto_uno">

                <h2> Proyecto n° 3: Creacion de aplicación móvil </h2>
                <p> Como parte del proyecto de la creación de una aplicación para dispositivos móviles, he sido el encargado de gestionar el area de la base de datos y aplicar disntintas medidas de seguridad para con la misma. </p>
              <div><img src={aplicacion_movil} alt=" Aplicación movil" /></div>

            </div>

      </div>


      <div className="Iconos_tecnologias">
              <img src={html} alt="HTML" />
              <img src={css} alt="CSS" />
              <img src={js} alt="JavaScript" />
              <img src={react} alt="React" className="rotar" />
              <img src={python} alt="Python" />
              <img src={sql} alt="Sql" />
              <img src={looker} alt="Looker" />

              
     </div>



 




      </main>

      <footer className="footer">
              <div> © 2025 Damian Coronel Burgos. Todos los derechos reservados</div>
      </footer>



    </>










    );









}

export default Damian;