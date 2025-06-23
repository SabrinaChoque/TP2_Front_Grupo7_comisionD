import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Inicio.css';
import sabriImg from '../assets/sabri.png';
import damiImg from '../assets/dami.png';
import fedeImg from '../assets/fede.png';
import aleImg from '../assets/ale.png';
import banner from '../assets/banner.jpg';

function Inicio() {
  const integrantes = [
    {
      id: 'sabrina',
      nombre: 'Sabrina Choque',
      ruta: '/sabrina',
      imagen: sabriImg,
      banner: banner,
      descripcion: 'Mamá, futura desarrolladora y amante del diseño y los videojuegos. En busca de mi primer gran desafío en IT.'
    },
    {
      id: 'damian',
      nombre: 'Damian Coronel Burgos',
      ruta: '/damian',
      imagen: damiImg,
      banner: banner,
      descripcion: 'Estudiante con una fuerte curiosidad en el área de ciencia de datos e inteligencia artificial.'
    },
    {
      id: 'federico',
      nombre: 'Federico Castro',
      ruta: '/federico',
      imagen: fedeImg,
      banner: banner,
      descripcion: 'Desarrollador en formación con interés en datos y backend. Entusiasta de las soluciones prácticas y bien diseñadas.'
    },
    {
      id: 'alejandro',
      nombre: 'Alejandro Cubas',
      ruta: '/alejandro',
      imagen: aleImg,
      banner: banner,
      descripcion: 'Apasionado por la tecnología y el desarrollo de software. Siempre buscando aprender algo nuevo.'
    }
  ];

  const [likes, setLikes] = useState({});

  useEffect(() => {
    const storedLikes = {};
    integrantes.forEach(({ id }) => {
      const savedLikes = localStorage.getItem(`likes-${id}`);
      storedLikes[id] = savedLikes ? parseInt(savedLikes) : 0;
    });
    setLikes(storedLikes);
  }, []);

  const handleLike = (id) => {
    const nuevosLikes = {
      ...likes,
      [id]: (likes[id] || 0) + 1,
    };
    setLikes(nuevosLikes);
    localStorage.setItem(`likes-${id}`, nuevosLikes[id]);

    const corazonEl = document.getElementById(`corazon-${id}`);
    if (corazonEl) {
      corazonEl.classList.add("clicked");
      setTimeout(() => corazonEl.classList.remove("clicked"), 300);
    }
  };

  const totalCorazones = Object.values(likes).reduce((acc, val) => acc + val, 0);

  return (
    <section className="inicio animate__animated animate__fadeIn">
      <h1>Te damos la bienvenida a los <br /> <strong>Simuladores</strong></h1>
      <p>
        Somos el grupo 7 de comisión D. Este es nuestro trabajo práctico integrador de Desarrollo Frontend.
      </p>
      <h2>Conocé al equipo</h2>

      <div className="tarjetas">
        {integrantes.map((integrante, index) => (
          <div
            className="tarjeta"
            key={integrante.id}
            style={{ '--delay': `${index * 0.2}s` }}
          >
            <div className="portada">
              <img src={integrante.banner} alt="Banner" />
              <div className="corazon-container">
                <div
                  id={`corazon-${integrante.id}`}
                  className="corazon activo"
                  onClick={() => handleLike(integrante.id)}
                  title="Dale un corazón"
                >
                  ❤️ {likes[integrante.id] || 0}
                </div>
                <p className="texto-like">Dar corazón</p>
              </div>
            </div>

            <img
              src={integrante.imagen}
              alt={integrante.nombre}
              className="avatar"
            />
            <h3>{integrante.nombre}</h3>
            <p>{integrante.descripcion}</p>
            <Link to={integrante.ruta}>Ver más</Link>
          </div>
        ))}
      </div>

      <h3 className="total-corazones">
        ❤️ Se dieron {totalCorazones} corazones para el grupo!
      </h3>
    </section>
  );
}

export default Inicio;