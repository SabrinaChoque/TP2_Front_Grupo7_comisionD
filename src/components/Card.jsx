function Card({ titulo, autor, anio }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px' }}>
      <h3>{titulo}</h3>
      <p>Autor: {autor}</p>
      <p>Año: {anio}</p>
    </div>
  );
}

export default Card;
