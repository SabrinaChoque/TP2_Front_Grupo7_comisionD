import '../styles/Bitacora.css';

function Bitacora() {
  return (
    <div className="bitacora animate__animated animate__fadeIn" style={{ animationDelay: '0.1s' }}>
      <h2 className="animate__animated animate__fadeInDown" style={{ animationDelay: '0.2s' }}>Bitácora de Trabajo - Grupo 7</h2>

      <section className="animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}>
        <h3>Integrantes:</h3>
        <ul>
          <li>Sabrina Choque</li>
          <li>Damián Coronel Burgos</li>
          <li>Federico Castro</li>
          <li>Alejandro Cubas</li>
        </ul>
      </section>

      <section className="animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
        <h3>Organización y Metodología</h3>
        <p>
         Utilizamos una metodología colaborativa. Dividimos las tareas por secciones:
         cada integrante desarrolló su propia vista con su información personal, tecnologías y proyectos.  
         Usamos GitHub para el control de versiones y GitHub Desktop para facilitar la gestión de commits.  
         Trabajamos con ramas individuales para que cada integrante pudiera desarrollar su parte sin interferencias, 
         y luego hicimos merge hacia la rama principal (`main`).  
         El entorno de desarrollo fue configurado con Vite, lo que permitió una experiencia rápida y eficiente para 
         todos los integrantes.
        </p>
      </section>

     <section className="animate__animated animate__fadeInUp" style={{ animationDelay: '0.5s' }}>
  <h3>Aportes individuales</h3>
  <p>
    <strong>Sabrina:</strong> Se encargó de la estructura principal del proyecto en React, incluyendo:
    la creación del componente <em>Sidebar</em>, la página de inicio con tarjetas de presentación de los integrantes, el componente <em>Videojuegos</em> que consume datos desde un archivo JSON, la sección de <em>API pública</em> conectada a Rick and Morty, y el armado general de la bitácora.

    También propuso una estructura inicial para el archivo <code>data.json</code> con 5 videojuegos por integrante, aunque se dejó abierto a futuras modificaciones, ya que el diseño visual final será responsabilidad de Damián.

    Durante la integración final con Vercel, detectó un error importante relacionado con el uso inconsistente de nombres de archivos y rutas (mayúsculas, minúsculas). Esto generó fallos al hacer deploy, ya que tanto React como Vercel son sensibles al uso correcto del <em>naming</em>. Para evitarlo, se recomienda seguir un estándar estricto como <code>camelCase</code> o <code>kebab-case</code> (con guiones) de forma consistente.

    <br /><br />
    En la segunda parte del trabajo práctico, se enfocó en la sección que consume la API de Rick and Morty. Implementó la funcionalidad de paginación usando los botones "Anterior" y "Siguiente", gestionando el estado interno con React y controlando la navegación entre páginas de resultados.

    Además, realizó mejoras visuales completas en esta sección, inspiradas en la estética de la serie. Aplicó un fondo con gradiente estilo “portal”, colores llamativos (verde neón, azul oscuro y cian brillante), y tipografías personalizadas (‘Permanent Marker’ y ‘Roboto’ desde Google Fonts). Se diseñaron tarjetas con borde colorido, animaciones suaves al pasar el cursor, y se ajustó el estilo del número de página para lograr mejor legibilidad y coherencia visual.
    <br /><br />
Durante las últimas etapas del proyecto, Sabrina implementó la funcionalidad de "likes" en las tarjetas de presentación de los integrantes usando <code>localStorage</code> para guardar el estado entre sesiones. Además, refactorizó el componente <code>Inicio.jsx</code> para separar completamente el diseño del contenido, trasladando todos los estilos inline al archivo <code>Inicio.css</code> y asegurando una estructura más limpia y mantenible. Se ajustó también la animación de entrada de las tarjetas, corrigiendo errores en los estilos y mejorando la visualización en distintos dispositivos.

    </p>
  <p>
   <strong>Damian:</strong> Como no comprendía cómo desarrollar el proyecto, realizó una simulación aparte desde cero para entender la estructura del mismo. Esto le permitió desenvolverse mejor con este nuevo desafio. Luego se encargó de su página correspondiente, a la cual le dio un estilo único y representativo, utilizando colores acordes al proyecto en cuestión. Asimismo, realizó un aporte a la plantilla de videojuegos, integrando un total de cinco ítems adicionales. Cada una de estas acciones fue planificada y ejecutada utilizando GitHub a través del uso de ramas, lo cual fue posible gracias a la colaboración y constante comunicación grupal, así como al esfuerzo individual. 
   <br />
   En la segunda parte del proyecto integró una Skill-Bar de habilidades en cada una de las paginas de los integrantes, asimismo colaboró con el diseño de interfaz visual del proyecto, efectuando la creación del logo, para luego incorporarlo al sidebar. Por ultimo colaboro en el diseño integral del proyecto, cambiando el estilo a colores mas sobrios.
  </p>
   <p>
    <strong>Federico:</strong> Se encargó del desarrollo de su sección personal en <em>React</em>, incluyendo nombre, habilidades, proyectos y tecnologías con íconos importados correctamente desde la carpeta de <em>assets</em>. Utilizó Flexbox y animaciones CSS para presentar la información de forma ordenada y responsiva. Agregó su ruta a los archivos <code>App.jsx</code> y <code>Sidebar.jsx</code>, y colaboró en la página de videojuegos integrando sus títulos favoritos al archivo <code>data.json</code>. Tuvo que resolver problemas relacionados con la visualización de íconos en producción <em>(Vercel)</em> debido a rutas estáticas incorrectas, y ajustó el estilo del header para evitar estilos globales heredados.
    <br /><br />
    En la segunda etapa del trabajo, Federico se encargó de aplicar animaciones suaves con <em>Animate.css</em> en todas las páginas del proyecto, incluyendo las vistas personales, la página de inicio, la bitácora y la sección de videojuegos. Reemplazó los retrasos estándar por valores personalizados para lograr una entrada progresiva más fluida. También mejoró visualmente el <em>Sidebar</em>, adaptándolo a distintos tamaños de pantalla, rediseñó la página de inicio con efectos <em>hover</em> y animaciones en las tarjetas de integrantes, y reestilizó por completo la página de videojuegos con tarjetas modernas, sombras, transiciones suaves y diseño responsivo.
  </p>
   <p>
    <strong>Alejandro:</strong> Se encargó del diseño de la parte personal. Aunque fue bastante complicado en un principio, estudiando las versiones de sus compañeros junto con el material de consulta, pudo crear una base en la cual poder poner los detalles que consideró propios y los que le gustaron de otros lugares. Colaboró en el agregado de pequeños detalles estéticos de la sidebar al final del desarrollo previo a la entrega. Gracias a la colaboración de sus compañeros, pudo ocmprender y desarrollar una plantilla funcional a lo que se pedía, cosa que hubiera sido mucho más complicada estando solo.
  </p>
  <p>En la segunda parte se encargó de agregar la busqueda por nombre y el filtro por género en la parte de Videojuegos. También colaboró en el retoque de las vistas de las páginas personales y la página de inicio aunque en menor medida. Para el filtro por género optó por un sistema de checkboxes que se mantiene oculto hasta seleccionar el ícono del mando para evitar distracciones. De igual manera la entrada de texto para búsqueda se mantiene oculta hasta que se seleccione la lupa. </p>
</section>

      <section className="animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
        <h3>Tecnologías utilizadas</h3>
        <ul>
          <li>React</li>
          <li>Vite</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Git y GitHub</li>
          <li>API pública (Rick and Morty)</li>
        </ul>
      </section>

      <section className="animate__animated animate__fadeInUp" style={{ animationDelay: '0.7s' }}>
  <h3>Reflexión del grupo</h3>
  <p>
    Este trabajo práctico nos permitió integrar los conocimientos de React y desarrollar un proyecto completo de manera colaborativa.  
    Aprendimos a organizarnos como equipo, a repartir tareas y a comunicarnos durante el proceso.  
    Además, pudimos aplicar herramientas como GitHub, Vite y el consumo de datos tanto locales (JSON) como externos (API pública).  
    Nos ayudó a entender mejor el flujo de trabajo real en proyectos de desarrollo web, y valoramos la experiencia como preparación para futuros desafíos.
  </p>
</section>

    </div>
  );
}

export default Bitacora;