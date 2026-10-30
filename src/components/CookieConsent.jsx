import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cupralia_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cupralia_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cupralia_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="max-w-md w-full bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl text-slate-100 relative"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Política de Privacidad y Cookies
                </h3>
                <span className="text-xs font-mono text-amber-500">CUPRALIA LABS</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
              En <strong className="text-white">CUPRALIA LABS</strong> utilizamos almacenamiento local técnico estrictamente necesario para recordar tus preferencias de visualización. No compartimos datos personales con terceros comerciales.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={handleReject}
                className="flex-1 bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-medium py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
              >
                Solo necesarias
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 bg-amber-600 hover:bg-amber-500 text-white text-xs font-medium py-2.5 px-4 rounded-xl transition-colors shadow-lg shadow-amber-600/20 cursor-pointer"
              >
                Aceptar y continuar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}