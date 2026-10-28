import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Terminal, MapPin } from 'lucide-react';

export default function Navbar({ selectedCount = 0, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center space-x-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="text-base font-bold text-white font-sans tracking-tight">CUPRALIA</span>
        </a>

        {/* Ubicación Desktop */}
        <div className="hidden md:flex items-center space-x-1.5 text-xs font-mono text-slate-400 bg-slate-900/80 px-20 py-1.5 rounded-full border border-slate-800">
          <MapPin className="w-3.5 h-3.5 text-blue-400" />
          <span>Antofagasta, Chile</span>
        </div>

        {/* Acciones Derecha */}
        <div className="flex items-center space-x-3">
          
          {/* Botón Cotizador / Contador */}
          <button
            onClick={onOpenCart}
            className="flex items-center space-x-2 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 px-3.5 py-1.5 rounded-xl text-xs font-mono text-blue-400 hover:text-blue-300 transition-all cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="font-bold">{selectedCount}</span>
          </button>

          {/* Menú Hambúrger Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Menú Desplegable Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 border-b border-slate-900 px-4 py-4 space-y-3 font-mono text-xs">
          <a 
            href="#servicios" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 text-slate-300 hover:text-white"
          >
            01. Servicios & Cotizador
          </a>
          <a 
            href="#perfil" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 text-slate-300 hover:text-white"
          >
            02. Perfil Híbrido
          </a>
          <a 
            href="#proyectos" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 text-slate-300 hover:text-white"
          >
            03. Portafolio
          </a>
          <a 
            href="#contacto" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 text-slate-300 hover:text-white"
          >
            04. Contacto & FAQ
          </a>
        </div>
      )}
    </header>
  );
}