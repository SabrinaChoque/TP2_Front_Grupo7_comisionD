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
    <div className="videojuegos">
      <h2>Videojuegos favoritos de Sabrina</h2>
      <div className="tarjetas-videojuegos">
        {juegosSabrina.map((juego, index) => (
          <div className="tarjeta-juego" key={`sabrina-${index}`}>
            <h3>{juego.titulo}</h3>
            <p><strong>Género:</strong> {juego.genero}</p>
            <p><strong>Año:</strong> {juego.anio}</p>
            <p>{juego.descripcion}</p>
          </div>
        ))}
      </div>

      <h2>Videojuegos favoritos de Damian</h2>
      <div className="tarjetas-videojuegos">
        {juegosDamian.map((juego, index) => (
          <div className="tarjeta-juego" key={`damian-${index}`}>
            <h3>{juego.titulo}</h3>
            <p><strong>Género:</strong> {juego.genero}</p>
            <p><strong>Año:</strong> {juego.anio}</p>
            <p>{juego.descripcion}</p>
          </div>
        ))}
      </div>

      <h2>Videojuegos favoritos de Federico</h2>
      <div className="tarjetas-videojuegos">
        {juegosFederico.map((juego, index) => (
          <div className="tarjeta-juego" key={`fede-${index}`}>
            <h3>{juego.titulo}</h3>
            <p><strong>Género:</strong> {juego.genero}</p>
            <p><strong>Año:</strong> {juego.anio}</p>
            <p>{juego.descripcion}</p>
          </div>
        ))}
      </div>
      <h2>Videojuegos favoritos de Alejandro</h2>
      <div className="tarjetas-videojuegos">
        {juegosAlejandro.map((juego, index) => (
          <div className="tarjeta-juego" key={`alejandro-${index}`}>
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
