import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur shadow-sm py-3 px-6 flex justify-between items-center sticky top-0 z-50 border-b border-gray-200">
      <h1 className="text-xl font-semibold text-gray-800 tracking-tight">Portofolio-web</h1>
      <div className="space-x-6 text-sm md:text-base text-gray-700">
        <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-indigo-600 transition-colors">About</Link>
        <Link to="/projects" className="hover:text-indigo-600 transition-colors">Projects</Link>
        <Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;