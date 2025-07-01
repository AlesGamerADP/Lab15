import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoriaList from './components/categorias/CategoriaList';
import CategoriaForm from './components/categorias/CategoriaForm';
import ProductoList from './components/productos/ProductoList';
import ProductoForm from './components/productos/ProductoForm';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container" style={{ marginTop: '2rem' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/productos" />} />
          <Route path="/productos" element={<ProductoList />} />
          <Route path="/productos/nuevo" element={<ProductoForm />} />
          <Route path="/productos/editar/:id" element={<ProductoForm />} />
          <Route path="/categorias" element={<CategoriaList />} />
          <Route path="/categorias/nuevo" element={<CategoriaForm />} />
          <Route path="/categorias/editar/:id" element={<CategoriaForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 