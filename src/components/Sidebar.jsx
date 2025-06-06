import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';


function Sidebar() {
  return (
    <nav className="sidebar">
    <h2>Grupo 7</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/sabrina">Sabrina</Link></li>
        <li><Link to="/federico">Federico</Link></li>
        <li><Link to="/damian">Damian</Link></li>
        <li><Link to="/alejandro">Alejandro</Link></li>
        <li><Link to="/videojuegos">Videojuegos</Link></li>
        <li><Link to="/api">API</Link></li>
        <li><Link to="/bitacora">Bitácora</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
