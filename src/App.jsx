import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Sidebar from './components/Sidebar';
import Sabrina from './pages/Sabrina';
import Federico from './pages/Federico';
import Damian from './pages/Damian';
import Alejandro from './pages/Alejandro'; 
import VideoJuegos from './pages/VideoJuegos';
import Api from './pages/Api';
import Bitacora from './pages/Bitacora';
import './App.css'; // tus estilos

function App() {
  return (
    <Router>
      <div className="contenedor-principal" style={{ display: 'flex' }}>
        <Sidebar />
        <main className="contenido-principal" style={{ flex: 1, padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sabrina" element={<Sabrina />} />
            <Route path="/federico" element={<Federico />} />
            <Route path="/damian" element={<Damian />} />
            <Route path='/Alejandro' element={<Alejandro/>}/>
            <Route path="/videojuegos" element={<VideoJuegos />} />
            <Route path="/api" element={<Api />} />
            <Route path="/bitacora" element={<Bitacora />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
