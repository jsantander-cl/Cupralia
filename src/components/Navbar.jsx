import React, { useState } from 'react';
import { ShoppingBag, Menu, X, MapPin, Sun, Moon } from 'lucide-react';
import logoSvg from '../assets/logo-cupralia.svg';
import { useDarkMode } from '../hooks/useDarkMode';

export default function Navbar({ selectedCount = 0, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, toggleTheme] = useDarkMode();

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/90 dark:bg-slate-50/90 backdrop-blur-md border-b border-slate-900 dark:border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo Oficial */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="relative flex items-center justify-center transition-transform group-hover:scale-105">
            <img 
              src={logoSvg} 
              alt="CUPRALIA LABS Isotipo" 
              className="w-18 h-17 object-contain relative z-10" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 dark:text-amber-700 tracking-wider font-mono">
              CUPRALIA LABS
            </span>
            <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 tracking-widest uppercase -mt-1 hidden sm:block">
              Web Development Agency
            </span>
          </div>
        </a>

        {/* Ubicación Desktop */}
        <div className="hidden md:flex items-center space-x-1.5 text-xs font-mono text-slate-400 dark:text-slate-600 bg-slate-900/80 dark:bg-slate-200/60 px-4 py-1.5 rounded-full border border-slate-800 dark:border-slate-300">
          <MapPin className="w-3.5 h-3.5 text-amber-500" />
          <span>Antofagasta, Chile</span>
        </div>

        {/* Acciones Derecha */}
        <div className="flex items-center space-x-3">
          
          {/* Toggle Switch (Sol / Luna invertidos correctamente) */}
          <button
            onClick={toggleTheme}
            className="relative inline-flex items-center h-8 w-16 rounded-full bg-slate-900 dark:bg-slate-200 border border-amber-500/30 dark:border-amber-400/50 transition-colors cursor-pointer p-1 shadow-inner"
            aria-label="Cambiar Tema"
          >
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-slate-950 shadow-md transform transition-transform duration-300 ${
                isDarkMode ? 'translate-x-0' : 'translate-x-8 bg-amber-600 text-white'
              }`}
            >
              {isDarkMode ? (
                <Sun className="w-3.5 h-3.5" />
              ) : (
                <Moon className="w-3.5 h-3.5" />
              )}
            </div>
          </button>

          {/* Botón Cotizador / Contador */}
          <button
            onClick={onOpenCart}
            className="flex items-center space-x-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-3.5 py-1.5 rounded-xl text-xs font-mono text-amber-400 dark:text-amber-700 transition-all cursor-pointer shadow-lg shadow-amber-500/5"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="font-bold">{selectedCount}</span>
          </button>

          {/* Menú Hambúrger Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 dark:text-slate-600 rounded-lg bg-slate-900 dark:bg-slate-200 border border-slate-800 dark:border-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Menú Desplegable Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 dark:bg-slate-50/98 border-b border-slate-900 dark:border-slate-200 px-4 py-4 space-y-3 font-mono text-xs">
          <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 dark:text-slate-700 hover:text-amber-400">01. Servicios & Cotizador</a>
          <a href="#perfil" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 dark:text-slate-700 hover:text-amber-400">02. Perfil Híbrido</a>
          <a href="#proyectos" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 dark:text-slate-700 hover:text-amber-400">03. Portafolio</a>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 dark:text-slate-700 hover:text-amber-400">04. Contacto & FAQ</a>
        </div>
      )}
    </header>
  );
}