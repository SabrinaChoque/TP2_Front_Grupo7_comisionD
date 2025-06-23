import { useEffect, useState } from 'react';
import '../styles/VideoJuegos.css';
import data from '../data/data.json';
import ageOfEmpires2 from '../assets/gif/ageOfEmpires2.gif';
import bendy from '../assets/gif/bendy.gif';
import codModernWarfare from '../assets/gif/codModernWarfare.gif';
import cs16 from '../assets/gif/cs16.gif';
import darkSouls3 from '../assets/gif/darkSouls3.gif';
import godOfWar from '../assets/gif/godOfWar.gif';
import halo from '../assets/gif/halo.gif';
import kingdomCome from '../assets/gif/kingdomCome.gif';
import leagueOfLegends from '../assets/gif/leagueOfLegends.gif';
import legendOfMana from '../assets/gif/legendOfMana.gif';
import littleNightmares from '../assets/gif/littleNightmares.gif';
import mgs3 from '../assets/gif/mgs3.gif';
import mortalKombat from '../assets/gif/mortalKombat.gif';
import overwatch from '../assets/gif/overwatch.gif';
import pes from '../assets/gif/pes.gif';
import pubg from '../assets/gif/pubg.gif';
import redDead2 from '../assets/gif/redDead2.gif';
import residentEvil2 from '../assets/gif/residentEvil2.gif';
import superSmashBros from '../assets/gif/superSmashBros.gif';
import witcher3 from '../assets/gif/witcher3.gif';


const imagenes = {
  'ageOfEmpires2.gif': ageOfEmpires2,
  'bendy.gif': bendy,
  'codModernWarfare.gif': codModernWarfare,
  'cs16.gif': cs16,
  'darkSouls3.gif': darkSouls3,
  'godOfWar.gif': godOfWar,
  'halo.gif': halo,
  'kingdomCome.gif': kingdomCome,
  'leagueOfLegends.gif': leagueOfLegends,
  'legendOfMana.gif': legendOfMana,
  'littleNightmares.gif': littleNightmares,
  'mgs3.gif': mgs3,
  'mortalKombat.gif': mortalKombat,
  'overwatch.gif': overwatch,
  'pes.gif': pes,
  'pubg.gif': pubg,
  'redDead2.gif': redDead2,
  'residentEvil2.gif': residentEvil2,
  'superSmashBros.gif': superSmashBros,
  'witcher3.gif': witcher3,
};


const Estrellas10 = ({ calificacion }) => (
  <div className="estrellas">
    <div>
      {[...Array(10)].map((_, i) => (
        <span key={i} style={{ color: i < calificacion ? '#f5c518' : '#ccc' }}>★</span>
      ))}
    </div>
    <div className="numero-calificacion">{calificacion}/10</div>
  </div>
);

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

  const renderJuegos = (juegos, keyPrefix) => (
    juegos.map((juego, index) => (
      <div
        className="tarjeta-juego animate__animated animate__fadeInUp"
        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
        key={`${keyPrefix}-${index}`}
      >
        {imagenes[juego.imagen] && (
          <img
            src={imagenes[juego.imagen]}
            alt={juego.titulo}
            className="gif-juego"
          />
        )}
        <h3>{juego.titulo}</h3>
        <p><strong>Género:</strong> {juego.genero}</p>
        <p><strong>Año:</strong> {juego.anio}</p>
        <p>{juego.descripcion}</p>
        {juego.calificacion && <Estrellas10 calificacion={juego.calificacion} />}
      </div>
    ))
  );

  return (
    <div className="videojuegos animate__animated animate__fadeIn" style={{ animationDelay: '0.1s' }}>
      <h2 className="animate__animated animate__fadeInDown">Videojuegos favoritos de Sabrina</h2>
      <div className="tarjetas-videojuegos animate__animated animate__fadeInUp">
        {renderJuegos(juegosSabrina, 'sabrina')}
      </div>

      <h2 className="animate__animated animate__fadeInDown">Videojuegos favoritos de Damian</h2>
      <div className="tarjetas-videojuegos animate__animated animate__fadeInUp">
        {renderJuegos(juegosDamian, 'damian')}
      </div>

      <h2 className="animate__animated animate__fadeInDown">Videojuegos favoritos de Federico</h2>
      <div className="tarjetas-videojuegos animate__animated animate__fadeInUp">
        {renderJuegos(juegosFederico, 'federico')}
      </div>

      <h2 className="animate__animated animate__fadeInDown">Videojuegos favoritos de Alejandro</h2>
      <div className="tarjetas-videojuegos animate__animated animate__fadeInUp">
        {renderJuegos(juegosAlejandro, 'alejandro')}
      </div>
    </div>
  );
}

export default VideoJuegos;
