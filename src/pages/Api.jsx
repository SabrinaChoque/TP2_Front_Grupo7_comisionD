import { useEffect, useState } from 'react';
import '../styles/Api.css'; 

function Api() {
  const [personajes, setPersonajes] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(res => res.json())
      .then(data => {
        setPersonajes(data.results);
        setInfo(data.info);
      })
      .catch(err => console.error('Error al obtener personajes:', err));
  }, [page]);

  return (
    <div className="api-page animate__animated animate__fadeIn" style={{ animationDelay: '0.1s' }}>
      <h2 className="animate__animated animate__fadeInDown" style={{ animationDelay: '0.2s' }}>
        Personajes de Rick and Morty
      </h2>
      <div className="tarjetas-api animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}>
        {personajes.slice(0, 8).map((personaje, idx) => (
          <div
            className="tarjeta-api animate__animated animate__fadeInUp"
            style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
            key={personaje.id}
          >
            <img src={personaje.image} alt={personaje.name} />
            <h3>{personaje.name}</h3>
            <p><strong>Especie:</strong> {personaje.species}</p>
          </div>
        ))}
      </div>
      <div className="botones-paginado animate__animated animate__fadeInUp" style={{ animationDelay: '1.3s' }}>
        <button onClick={() => setPage(page - 1)} disabled={!info.prev}>
          Anterior
        </button>
        <span className="numero-pagina">Página {page}</span>
        <button onClick={() => setPage(page + 1)} disabled={!info.next}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Api;