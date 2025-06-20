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
    <div className="api-page">
      <h2>Personajes de Rick and Morty</h2>
      <div className="tarjetas-api">
        {personajes.slice(0, 8).map(personaje => (
          <div className="tarjeta-api" key={personaje.id}>
            <img src={personaje.image} alt={personaje.name} />
            <h3>{personaje.name}</h3>
            <p><strong>Especie:</strong> {personaje.species}</p>
          </div>
        ))}
      </div>
      <div className="botones-paginado">
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
