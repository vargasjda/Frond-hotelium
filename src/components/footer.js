
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="flex flex-col items-center">
        <p className="m-0 text-sm">© 2024 Tu Hotel. Todos los derechos reservados.</p>
        <div className="mt-2">
          <a href="/about" className="text-blue-400 hover:text-blue-300 mx-4">Acerca de</a>
          <a href="/contact" className="text-blue-400 hover:text-blue-300 mx-4">Contacto</a>
          <a href="/privacy" className="text-blue-400 hover:text-blue-300 mx-4">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
