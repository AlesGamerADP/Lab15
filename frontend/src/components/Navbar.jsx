import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav>
      <div className="navbar-content">
        <span className="navbar-title">Laboratorio 15</span>
        <div className="navbar-links">
          <Link
            to="/productos"
            className={location.pathname.startsWith('/productos') ? 'active' : ''}
          >
            Productos
          </Link>
          <Link
            to="/categorias"
            className={location.pathname.startsWith('/categorias') ? 'active' : ''}
          >
            Categorías
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 