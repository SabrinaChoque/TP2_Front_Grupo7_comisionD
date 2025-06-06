import { useEffect, useState } from 'react';
import '../styles/Api.css'; 

function Api() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setPersonajes(data.results))
      .catch(err => console.error('Error al obtener personajes:', err));
  }, []);

  return (
    <div className="api-page">
      <h2>Personajes de Rick and Morty</h2>
      <div className="tarjetas-api">
        {personajes.map(personaje => (
          <div className="tarjeta-api" key={personaje.id}>
            <img src={personaje.image} alt={personaje.name} />
            <h3>{personaje.name}</h3>
            <p><strong>Especie:</strong> {personaje.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Api;
