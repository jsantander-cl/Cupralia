import React from 'react';
import { motion } from 'framer-motion';
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Fondo ambiental decorativo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-slate-900/90 dark:bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl backdrop-blur-md text-center relative z-10"
      >
        <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-amber-500 mb-2 block">
          Error 404 • Página No Encontrada
        </span>

        <h1 className="text-3xl font-extrabold text-white mb-3">
          Has llegado a un rincón inexplorado
        </h1>

        <p className="text-sm text-slate-400 mb-8 leading-relaxed">
          La ruta que buscas en <strong className="text-slate-200">CUPRALIA LABS</strong> no existe o ha sido reubicada. Regresemos al núcleo principal.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full bg-amber-600 hover:bg-amber-500 text-white font-medium text-sm py-3 px-6 rounded-2xl transition-colors shadow-lg shadow-amber-600/25 cursor-pointer"
        >
          <Home className="w-4 h-4" />
          Volver al Inicio
        </a>
      </motion.div>
    </div>
  );
}