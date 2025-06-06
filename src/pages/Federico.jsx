import ProjectCard from "../components/ProjectCard";
import "../styles/Federico.css";
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import python from '../assets/python.png';
import react from '../assets/react_solo.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import csharp from '../assets/c-sharp.png';
import kotlin from '../assets/kotlin.svg';
import avatarFede from '../assets/avatar_fede.png';

const Federico = () => {
  const proyectos = [
    {
      title: "Sistema de Gestión Clínica SePrise",
      description: "Aplicación de escritorio desarrollada en C#. Incluye inicio de sesión, agenda de turnos por especialidad médica y control de insumos clínicos.",
      technologies: [
        { name: "C#", icon: csharp },
        { name: "Git", icon: git }
      ]
    },
    {
      title: "App de Gestión para Club Deportivo",
      description: "Aplicación de escritorio en C# y versión adaptada a Android con Android Studio. Permite gestionar socios, pagos de cuotas y reportes.",
      technologies: [
        { name: "C#", icon: csharp },
        { name: "Kotlin", icon: kotlin }
      ]
    },
    {
      title: "Portfolio Personal",
      description: "Sitio básico hecho en HTML y CSS para mostrar información personal y contacto.",
      technologies: [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css }
      ]
    }
  ];

  const habilidades = ["C#", "HTML5", "CSS3", "JavaScript", "Python", "Git"];

  const tecnologias = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "Python", icon: python },
    { name: "React", icon: react },
    { name: "Git", icon: git },
    { name: "GitHub", icon: github },
    { name: "C#", icon: csharp }
  ];

  return (
    <div className="federico-container">
      <header className="federico-header">
        <h1>Federico Manuel Castro Koppetsch</h1>
      </header>

      <main>
        <h2>Sobre mí</h2>
        <section className="sobre-mi">
          <img src={avatarFede} alt="Avatar de Federico" className="avatar" />
          <div>
            <p>
              Soy Federico Castro, desarrollador en formación con un gran interés en el área de datos y desarrollo backend.
              Actualmente trabajo como administrativo en el Ministerio de Educación de la Ciudad de Buenos Aires.
              Disfruto del proceso de construir herramientas útiles y optimizadas que resuelvan necesidades reales de forma efectiva.
            </p>
          </div>
        </section>

        <section>
          <h2>Habilidades en programación</h2>
          <ul>
            {habilidades.map((hab, idx) => (
              <li key={idx}>{hab}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Proyectos</h2>
          <div className="proyectos-grid horizontal">
            {proyectos.map((proyecto, idx) => (
              <ProjectCard key={idx} {...proyecto} />
            ))}
          </div>
        </section>

        <section>
          <h2>Tecnologías que uso</h2>
          <div className="tecnologias-grid">
            {tecnologias.map((tech, idx) => (
              <div key={idx} className="tecnologia-item">
                <img src={tech.icon} alt={tech.name} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Federico Castro</p>
      </footer>
    </div>
  );
};

export default Federico;