import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cupralia_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cupralia_cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cupralia_cookie_consent', 'rejected');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full max-w-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl relative"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 rounded-2xl shrink-0 mt-1">
                <ShieldCheck className="w-6 h-6" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                  Política de Privacidad y Cookies
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  En <strong>CUPRALIA LABS</strong> utilizamos almacenamiento local técnico estrictamente necesario para recordar tus preferencias de visualización (modo claro/oscuro). No compartimos datos personales con terceros comerciales.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleAccept}
                    className="bg-amber-600 hover:bg-amber-500 text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-xl transition-colors cursor-pointer shadow-lg shadow-amber-600/25"
                  >
                    Aceptar y continuar
                  </button>
                  <button
                    onClick={handleReject}
                    className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    Solo necesarias
                  </button>
                </div>
              </div>

              <button
                onClick={handleReject}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 transition-colors cursor-pointer"
                aria-label="Cerrar aviso de cookies"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}