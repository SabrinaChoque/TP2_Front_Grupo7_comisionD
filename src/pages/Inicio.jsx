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
      descripcion: 'Mamá, futura desarrolladora y amante del diseño y los videojuegos.En busca de mi primer gran desafío en IT.'
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
  const [votos, setVotos] = useState({});

  useEffect(() => {
    const storedLikes = {};
    const storedVotos = {};

    integrantes.forEach(({ id }) => {
      const savedLikes = localStorage.getItem(`likes-${id}`);
      const savedVoto = localStorage.getItem(`voto-${id}`);
      storedLikes[id] = savedLikes ? parseInt(savedLikes) : 0;
      storedVotos[id] = savedVoto === 'true';
    });

    setLikes(storedLikes);
    setVotos(storedVotos);
  }, []);

  const handleLike = (id) => {
    const yaVoto = votos[id];

    const nuevosLikes = {
      ...likes,
      [id]: yaVoto ? likes[id] - 1 : (likes[id] || 0) + 1,
    };

    const nuevosVotos = {
      ...votos,
      [id]: !yaVoto,
    };

    setLikes(nuevosLikes);
    setVotos(nuevosVotos);
    localStorage.setItem(`likes-${id}`, nuevosLikes[id]);
    if (nuevosVotos[id]) {
      localStorage.setItem(`voto-${id}`, 'true');
    } else {
      localStorage.removeItem(`voto-${id}`);
    }
  };

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
            style={{ "--delay": `${index * 0.2}s` }}
          >
            <div className="portada">
              <img src={integrante.banner} alt="Banner" />

              <div className="corazon-container">
                <div
                  className="corazon"
                  onClick={() => handleLike(integrante.id)}
                  title={votos[integrante.id] ? "Quitar me gusta" : "Dale me gusta"}
                  style={{
                    backgroundColor: votos[integrante.id] ? '#ffe6e6' : 'white',
                    cursor: 'pointer'
                  }}
                >
                  ❤️ {likes[integrante.id] || 0}
                </div>
                <p style={{ fontSize: '0.75rem', marginTop: '4px' }}>
                  {votos[integrante.id] ? "Quitar like" : "Dar like"}
                </p>
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
    </section>
  );
}

export default Inicio;






