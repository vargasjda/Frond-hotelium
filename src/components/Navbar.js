import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">Hotelium</Link>
        </div>
        <div>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-white">
              Cerrar Sesión
            </button>
          ) : (
            <>
              <Link to="/signup" className="text-white mr-4">
                Registro
              </Link>
              <Link to="/login" className="text-white">
                Iniciar Sesión
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
