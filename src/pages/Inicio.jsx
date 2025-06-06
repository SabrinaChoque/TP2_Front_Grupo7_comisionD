import { Link } from 'react-router-dom';
import '../styles/Inicio.css';
import sabriImg from '../assets/sabri.png'; 
import damiImg from '../assets/dami.png';
import fedeImg from '../assets/fede.png'; 
import aleImg from '../assets/ale.png'; 
function Inicio() {
  const integrantes = [
    {
      nombre: 'Sabrina Choque',
      ruta: '/sabrina',
      imagen: sabriImg,
      descripcion: 'Mamá, futura desarrolladora y amante del diseño y los videojuegos. En busca de mi primer gran desafío en IT.',

    },
    {
      nombre: 'Damian Coronel Burgos',
      ruta: '/damian',
      imagen: damiImg,
      descripcion: 'Estudiante con una fuerte curiosidad en el area de ciencia de datos e inteligencia artificial'
    },
    {
      nombre: 'Federico Castro',
      ruta: '/federico',
      imagen: fedeImg,
      descripcion: 'Desarrollador en formación con interés en datos y backend. Entusiasta de las soluciones prácticas y bien diseñadas.'
    },
    {
      nombre: 'Alejandro Cubas',
      ruta: '/alejandro',
      imagen: aleImg,
      descripcion: 'Papá panadero y estudiante de desarrollo de soft. Fanático de la tecnología y la ciencia ficción con el sueño de entrar en el mundo IT como Backend.'
    }
  ];

  return (
    <div className="inicio">
      <h1>Te damos la bienvenida a los Simuladores</h1>
      <p>Somos el grupo 7 de comisión D. Este es nuestro trabajo práctico integrador de Desarrollo Frontend.</p>

      <h2>Conocé al equipo</h2>
      <div className="tarjetas">
        {integrantes.map((int) => (
          <div className="tarjeta" key={int.nombre}>
            <img
              src={int.imagen}
              alt={int.nombre}
              className="foto-integrante"
            />
            <h3>{int.nombre}</h3>
            <p>{int.descripcion}</p>
            <Link to={int.ruta}>Ver perfil</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;
