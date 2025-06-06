import '../styles/Bitacora.css';

function Bitacora() {
  return (
    <div className="bitacora">
      <h2>Bitácora de Trabajo - Grupo 7</h2>

      <section>
        <h3>Integrantes:</h3>
        <ul>
          <li>Sabrina Choque</li>
          <li>Damián Coronel Burgos</li>
          <li>Federico Castro</li>
          <li>Alejandro Cubas</li>
        </ul>
      </section>

      <section>
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

     <section>
  <h3>Aportes individuales</h3>
    <p>
  <strong>Sabrina:</strong> Se encargó de la estructura principal del proyecto en React, incluyendo:
  la creación del componente <em>Sidebar</em>, la página de inicio con tarjetas de presentación de los integrantes, el componente <em>Videojuegos</em> que consume datos desde un archivo JSON, la sección de <em>API pública</em> conectada a Rick and Morty, y el armado general de la bitácora.

  También propuso una estructura inicial para el archivo <code>data.json</code> con 5 videojuegos por integrante, aunque se dejó abierto a futuras modificaciones, ya que el diseño visual final será responsabilidad de Damián.

  Durante la integración final con Vercel, detectó un error importante relacionado con el uso inconsistente de nombres de archivos y rutas (mayúsculas, minúsculas). Esto generó fallos al hacer deploy, ya que tanto React como Vercel son sensibles al uso correcto del <em>naming</em>. Para evitarlo, se recomienda seguir un estándar estricto como <code>camelCase</code> o <code>kebab-case</code> (con guiones) de forma consistente.
</p>

  <p>
   <strong>Damian:</strong> Como no comprendía cómo desarrollar el proyecto, realizó una simulación aparte desde cero para entender la estructura del mismo. Esto le permitió desenvolverse mejor con este nuevo desafio. Luego se encargó de su página correspondiente, a la cual le dio un estilo único y representativo, utilizando colores acordes al proyecto en cuestión. Asimismo, realizó un aporte a la plantilla de videojuegos, integrando un total de cinco ítems adicionales. Cada una de estas acciones fue planificada y ejecutada utilizando GitHub a través del uso de ramas, lo cual fue posible gracias a la colaboración y constante comunicación grupal, así como al esfuerzo individual.
  </p>
   <p>
    <strong>Federico:</strong> Se encargó del desarrollo de su sección personal en <em>React</em>, incluyendo nombre, habilidades, proyectos y tecnologías con íconos importados correctamente desde la carpeta de <em>assets</em>. Utilizó Flexbox y animaciones CSS para presentar la información de forma ordenada y responsiva. Agregó su ruta a los archivos <code>App.jsx</code> y <code>Sidebar.jsx</code>, y colaboró en la página de videojuegos integrando sus títulos favoritos al archivo <code>data.json</code>. Tuvo que resolver problemas relacionados con la visualización de íconos en producción <em>(Vercel)</em> debido a rutas estáticas incorrectas, y ajustó el estilo del header para evitar estilos globales heredados.
  </p>
   <p>
    <strong>Alejandro:</strong> Se encargó del diseño de la parte personal. Aunque fue bastante complicado en un principio, estudiando las versiones de sus compañeros junto con el material de consulta, pudo crear una base en la cual poder poner los detalles que consideró propios y los que le gustaron de otros lugares. Colaboró en el agregado de pequeños detalles estéticos de la sidebar al final del desarrollo previo a la entrega. Gracias a la colaboración de sus compañeros, pudo ocmprender y desarrollar una plantilla funcional a lo que se pedía, cosa que hubiera sido mucho más complicada estando solo.
  </p>
</section>

      <section>
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

      <section>
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