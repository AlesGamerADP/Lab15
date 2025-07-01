import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductoForm = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [stock, setStock] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [categoriaId, setCategoriaId] = useState('');
  const [categorias, setCategorias] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8081/api/v1/categorias')
      .then(res => res.json())
      .then(data => setCategorias(data));
    if (id) {
      fetch(`http://localhost:8081/api/v1/producto/${id}`)
        .then(res => res.json())
        .then(data => {
          setNombre(data.nombre);
          setDescripcion(data.descripcion);
          setStock(data.stock);
          setPrecio(data.precio);
          setCategoriaId(data.categoria?.id || '');
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = id ? 'PUT' : 'POST';
    const url = id
      ? `http://localhost:8081/api/v1/producto/${id}`
      : 'http://localhost:8081/api/v1/productos';
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, descripcion, stock, precio, categoria: { id: categoriaId } })
    });
    navigate('/productos');
  };

  return (
    <div>
      <div className="form-title">{id ? 'Edición de producto' : 'Nuevo producto'}</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input id="nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <input id="descripcion" value={descripcion} onChange={e => setDescripcion(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input id="stock" type="number" value={stock} onChange={e => setStock(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="precio">Precio:</label>
          <input id="precio" type="number" value={precio} onChange={e => setPrecio(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="categoria">Categoría:</label>
          <select id="categoria" value={categoriaId} onChange={e => setCategoriaId(e.target.value)} required>
            <option value="">Seleccione</option>
            {categorias.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.nombre}</option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit" className="button-save">{id ? 'Actualizar' : 'Guardar'}</button>
          <button type="button" className="button-cancel" onClick={() => navigate('/productos')}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default ProductoForm; 