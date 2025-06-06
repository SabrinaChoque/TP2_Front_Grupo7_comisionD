import React from "react";
import '../styles/Sabrina.css';
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
      <div className="sabrina-fondo">
        <div className="sabrina-header">
          <div className="sabrina-banner">
            <h1>Sabrina Choque</h1>
            <p className="sabrina-subtitulo">Futura Desarrolladora</p>
          </div>
        </div>

        <h2 className="sabrina-titulo">Sobre mí</h2>
        <div className="sabrina-sobre-mi">
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
          <h2 className="sabrina-titulo">Habilidades e intereses</h2>

          <div className="sabrina-habilidades-intereses">
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

          <h2 className="sabrina-titulo">Proyectos destacados</h2>
          <div className="sabrina-contenedor-proyectos">
            <div className="sabrina-proyecto">
              <h2>Proyecto 1: Clínica Seprise</h2>
              <p>Aplicación de escritorio para gestionar turnos, pacientes, acreditación y stock.</p>
              <img src={clinica} alt="Proyecto Clínica" />
            </div>
            <div className="sabrina-proyecto">
              <h2>Proyecto 2: Club Deportivo</h2>
              <p>App para gestionar socios, carnets y pagos en un club.</p>
              <img src={club} alt="Proyecto Club" />
            </div>
            <div className="sabrina-proyecto">
              <h2>Proyecto 3: Inmobiliaria Alquilarte</h2>
              <p>Simulación de base de datos con JSON, CRUD y vistas con PUG.</p>
              <img src={inmobiliaria} alt="Proyecto Inmobiliaria" />
            </div>
          </div>

          <div className="sabrina-iconos">
            <img src={html} alt="HTML" />
            <img src={css} alt="CSS" />
            <img src={js} alt="JavaScript" />
            <img src={react} alt="React" />
            <img src={github} alt="GitHub" />
          </div>
        </main>

        <footer className="sabrina-footer">
          © 2025 Sabrina Choque. Todos los derechos reservados
        </footer>
      </div>
    </>
  );
}

export default Sabrina;
