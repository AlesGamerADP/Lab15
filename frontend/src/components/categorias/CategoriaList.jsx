import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:8081/api/v1/categorias';

const CategoriaList = () => {
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();

  const fetchCategorias = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setCategorias(data);
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('¿Seguro que deseas eliminar esta categoría?')) return;
    await fetch(`http://localhost:8081/api/v1/categoria/${id}`, { method: 'DELETE' });
    fetchCategorias();
  };

  return (
    <div>
      <h2>Categorías</h2>
      <button className="button-new" onClick={() => navigate('/categorias/nuevo')}>Nueva Categoría</button>
      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map(cat => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.nombre}</td>
                <td>
                  <div className="action-buttons">
                    <button className="button-edit" onClick={() => navigate(`/categorias/editar/${cat.id}`)}>Editar</button>
                    <button className="button-delete" onClick={() => handleDelete(cat.id)}>Eliminar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoriaList; 