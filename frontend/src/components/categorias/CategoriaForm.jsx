import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CategoriaForm = () => {
  const [nombre, setNombre] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8081/api/v1/categoria/${id}`)
        .then(res => res.json())
        .then(data => setNombre(data.nombre));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = id ? 'PUT' : 'POST';
    const url = id
      ? `http://localhost:8081/api/v1/categoria/${id}`
      : 'http://localhost:8081/api/v1/categorias';
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre })
    });
    navigate('/categorias');
  };

  return (
    <div>
      <div className="form-title">{id ? 'Edición de categoría' : 'Nueva categoría'}</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input id="nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
        </div>
        <div>
          <button type="submit" className="button-save">{id ? 'Actualizar' : 'Guardar'}</button>
          <button type="button" className="button-cancel" onClick={() => navigate('/categorias')}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default CategoriaForm; 