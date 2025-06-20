import { useEffect, useState } from 'react';
import '../styles/VideoJuegos.css';
import data from '../data/data.json';

function VideoJuegos() {
  const [juegosSabrina, setJuegosSabrina] = useState([]);
  const [juegosDamian, setJuegosDamian] = useState([]);
  const [juegosFederico, setJuegosFederico] = useState([]);
  const [juegosAlejandro, setJuegosAlejandro] = useState([]);

  useEffect(() => {
    setJuegosSabrina(data.videojuegosDeSabrina || []);
    setJuegosDamian(data.videojuegosDeDamian || []);
    setJuegosFederico(data.videojuegosDeFederico || []);
    setJuegosAlejandro(data.videojuegosDeAlejandro || []);
  }, []);

  return (
    <div className="videojuegos animate__animated animate__fadeIn" style={{ animationDelay: '0.1s' }}>
      <h2 className="animate__animated animate__fadeInDown" style={{ animationDelay: '0.2s' }}>Videojuegos favoritos de Sabrina</h2>
      <div className="tarjetas-videojuegos animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}>
        {juegosSabrina.map((juego, index) => (
          <div
            className="tarjeta-juego animate__animated animate__fadeInUp"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            key={`sabrina-${index}`}
          >
            <h3>{juego.titulo}</h3>
            <p><strong>Género:</strong> {juego.genero}</p>
            <p><strong>Año:</strong> {juego.anio}</p>
            <p>{juego.descripcion}</p>
          </div>
        ))}
      </div>

      <h2 className="animate__animated animate__fadeInDown" style={{ animationDelay: '0.6s' }}>Videojuegos favoritos de Damian</h2>
      <div className="tarjetas-videojuegos animate__animated animate__fadeInUp" style={{ animationDelay: '0.7s' }}>
        {juegosDamian.map((juego, index) => (
          <div
            className="tarjeta-juego animate__animated animate__fadeInUp"
            style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            key={`damian-${index}`}
          >
            <h3>{juego.titulo}</h3>
            <p><strong>Género:</strong> {juego.genero}</p>
            <p><strong>Año:</strong> {juego.anio}</p>
            <p>{juego.descripcion}</p>
          </div>
        ))}
      </div>

      <h2 className="animate__animated animate__fadeInDown" style={{ animationDelay: '1.0s' }}>Videojuegos favoritos de Federico</h2>
      <div className="tarjetas-videojuegos animate__animated animate__fadeInUp" style={{ animationDelay: '1.1s' }}>
        {juegosFederico.map((juego, index) => (
          <div
            className="tarjeta-juego animate__animated animate__fadeInUp"
            style={{ animationDelay: `${1.2 + index * 0.1}s` }}
            key={`fede-${index}`}
          >
            <h3>{juego.titulo}</h3>
            <p><strong>Género:</strong> {juego.genero}</p>
            <p><strong>Año:</strong> {juego.anio}</p>
            <p>{juego.descripcion}</p>
          </div>
        ))}
      </div>

      <h2 className="animate__animated animate__fadeInDown" style={{ animationDelay: '1.4s' }}>Videojuegos favoritos de Alejandro</h2>
      <div className="tarjetas-videojuegos animate__animated animate__fadeInUp" style={{ animationDelay: '1.5s' }}>
        {juegosAlejandro.map((juego, index) => (
          <div
            className="tarjeta-juego animate__animated animate__fadeInUp"
            style={{ animationDelay: `${1.6 + index * 0.1}s` }}
            key={`alejandro-${index}`}
          >
            <h3>{juego.titulo}</h3>
            <p><strong>Género:</strong> {juego.genero}</p>
            <p><strong>Año:</strong> {juego.anio}</p>
            <p>{juego.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoJuegos;