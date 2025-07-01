import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:8081/api/v1/productos';

const ProductoList = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  const fetchProductos = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setProductos(data);
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('¿Seguro que deseas eliminar este producto?')) return;
    await fetch(`http://localhost:8081/api/v1/producto/${id}`, { method: 'DELETE' });
    fetchProductos();
  };

  return (
    <div>
      <h2>Productos</h2>
      <button className="button-new" onClick={() => navigate('/productos/nuevo')}>Nuevo Producto</button>
      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Stock</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(prod => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.nombre}</td>
                <td>{prod.descripcion}</td>
                <td>{prod.stock}</td>
                <td>{prod.precio}</td>
                <td>{prod.categoria?.nombre || '-'}</td>
                <td>
                  <div className="action-buttons">
                    <button className="button-edit" onClick={() => navigate(`/productos/editar/${prod.id}`)}>Editar</button>
                    <button className="button-delete" onClick={() => handleDelete(prod.id)}>Eliminar</button>
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

export default ProductoList; 