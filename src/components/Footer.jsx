import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 dark:bg-slate-50 border-t border-slate-900 dark:border-slate-200 text-slate-400 dark:text-slate-600 text-xs font-mono py-12 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900 dark:border-slate-200 transition-colors">
          {/* Brand con los colores exactos del Navbar */}
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 dark:text-amber-700 font-mono tracking-wider transition-colors">
              CUPRALIA LABS
            </span>
            <p className="text-slate-500 dark:text-slate-500 text-[11px]">Desarrollo Web FullStack & Soluciones Digitales</p>
          </div>

          {/* Redes sociales */}
          <div className="flex items-center space-x-3">
            <a 
              href="https://github.com/jsantander-cl" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-2.5 rounded-xl bg-slate-900 dark:bg-white border border-slate-800 dark:border-slate-300 text-slate-300 dark:text-slate-700 hover:border-amber-500 transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4 group-hover:text-amber-500 transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jordans-phillips/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-2.5 rounded-xl bg-slate-900 dark:bg-white border border-slate-800 dark:border-slate-300 text-slate-300 dark:text-slate-700 hover:border-amber-500 transition-all shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4 group-hover:text-amber-500 transition-colors" />
            </a>
            <a 
              href="https://www.instagram.com/jp_frontend/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-2.5 rounded-xl bg-slate-900 dark:bg-white border border-slate-800 dark:border-slate-300 text-slate-300 dark:text-slate-700 hover:border-amber-500 transition-all shadow-sm"
            >
              <InstagramIcon className="w-4 h-4 group-hover:text-amber-500 transition-colors" />
            </a>
            <a 
              href="mailto:j.santanderph@gmail.com" 
              className="group p-2.5 rounded-xl bg-slate-900 dark:bg-white border border-slate-800 dark:border-slate-300 text-slate-300 dark:text-slate-700 hover:border-amber-500 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 group-hover:text-amber-500 transition-colors" />
            </a>
          </div>

          {/* Botón Volver Arriba */}
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center space-x-2 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 border border-slate-800 dark:border-slate-300 px-4 py-2.5 rounded-xl text-slate-300 dark:text-slate-700 hover:text-white dark:hover:text-slate-900 transition-all cursor-pointer shadow-sm"
          >
            <span>Volver Arriba</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400 dark:text-amber-600 group-hover:translate-y-[-2px] transition-transform" />
          </button>
        </div>

        {/* Derechos y Ubicación */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500 dark:text-slate-500 text-[11px] transition-colors">
          <p>© 2026 Jordan Santander Phillips. Todos los derechos reservados.</p>
          <p>Antofagasta, Chile</p>
        </div>

      </div>
    </footer>
  );
}